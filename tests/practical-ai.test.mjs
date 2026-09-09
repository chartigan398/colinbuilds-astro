import { test } from 'node:test';
import assert from 'node:assert/strict';
import { course, pilotLesson as lesson } from '../src/data/practical-ai.js';
import { freshState, stepReady, normaliseState, loadProgress, saveProgress, storageKey } from '../src/lib/learning-state.js';

test('only the pilot is available; the complete planned path has six modules and twelve unique lessons', () => {
  assert.equal(course.modules.length, 6);
  const lessons = course.modules.flatMap(m => m.lessons);
  assert.ok(course.modules.every(m => m.lessons.length === 2));
  assert.equal(new Set(lessons.map(l => l.slug)).size, 12);
  assert.deepEqual(lessons.filter(l => l.status === 'ready').map(l => l.slug), [lesson.id]);
  assert.equal(new Set(lesson.steps.map(s => s.id)).size, lesson.steps.length);
});
test('every graded choice has one correct option and specific feedback for wrong answers', () => {
  for (const step of lesson.steps) {
    const groups = step.groups || (step.options ? [step] : []);
    for (const group of groups) {
      assert.equal(group.options.filter(o => o.correct).length, 1);
      assert.equal(new Set(group.options.map(o => o.id)).size, group.options.length);
      assert.ok(group.options.filter(o => !o.correct).every(o => o.feedback?.length > 20));
    }
  }
});
test('choosing an answer is insufficient: wrong and unchecked answers cannot advance', () => {
  const step = lesson.steps.find(s => s.type === 'decision'), state = freshState();
  state.answers[step.id] = step.options.find(o => !o.correct).id;
  state.checked[step.id] = true;
  assert.equal(stepReady(step, state), false);
  state.answers[step.id] = step.options.find(o => o.correct).id;
  state.checked[step.id] = false;
  assert.equal(stepReady(step, state), false);
  state.checked[step.id] = true;
  assert.equal(stepReady(step, state), true);
});
test('builder requires all four suitable instructions, checked together', () => {
  const step = lesson.steps.find(s => s.type === 'builder'), state = freshState();
  state.checked[step.id] = true;
  for (const group of step.groups) state.answers[`${step.id}:${group.id}`] = group.options.find(o => o.correct).id;
  assert.equal(stepReady(step, state), true);
  delete state.answers[`${step.id}:${step.groups[0].id}`];
  assert.equal(stepReady(step, state), false);
});
test('writing is self-reviewed, not graded by length or keyword matching', () => {
  const step = lesson.steps.find(s => s.type === 'independent'), state = freshState();
  state.reviewed[step.id] = true;
  state.drafts[step.id] = '   ';
  assert.equal(stepReady(step, state), false);
  state.drafts[step.id] = 'My own wording';
  assert.equal(stepReady(step, state), true);
  state.reviewed[step.id] = false;
  assert.equal(stepReady(step, state), false);
});
test('corrupt, old, and out-of-range saves recover without unlocking unanswered activities', () => {
  for (const raw of [null, [], false, { step: 99, completed: true }, { step: -9 }, { step: 3, answers: null }]) {
    const state = normaliseState(raw, lesson);
    assert.ok(state.step >= 0 && state.step <= 1);
    assert.equal(state.completed, false);
  }
  const storage = { getItem: () => '{ broken json' };
  assert.deepEqual(loadProgress(storage, lesson).state, freshState());
});
test('unavailable storage and quota errors do not block the lesson', () => {
  const blocked = { getItem() { throw Error('blocked'); }, setItem() { throw Error('quota'); } };
  assert.equal(loadProgress(blocked, lesson).available, false);
  assert.equal(saveProgress(blocked, lesson, freshState()), false);
  assert.equal(loadProgress(null, lesson).available, false);
  assert.equal(saveProgress(null, lesson, freshState()), false);
});
test('a reviewed attempt and current position survive a reload', () => {
  const state = freshState();
  for (const step of lesson.steps) {
    if (step.options) state.answers[step.id] = step.options.find(o => o.correct).id;
    for (const group of step.groups || []) state.answers[`${step.id}:${group.id}`] = group.options.find(o => o.correct).id;
    state.checked[step.id] = true;
    if (step.type === 'independent') { state.drafts[step.id] = 'Original learner answer'; state.reviewed[step.id] = true; state.criteria[step.id] = [0, 2]; }
  }
  state.step = lesson.steps.length - 1; state.completed = true;
  const map = new Map(); const storage = { getItem: k => map.get(k), setItem: (k,v) => map.set(k,v) };
  assert.equal(saveProgress(storage, lesson, state), true);
  const restored = loadProgress(storage, lesson).state;
  assert.equal(restored.step, 7); assert.equal(restored.completed, true);
  assert.equal(restored.drafts.transfer, 'Original learner answer');
  assert.deepEqual(restored.criteria.transfer, [0, 2]);
  assert.notEqual(storageKey(lesson), storageKey({ ...lesson, version: lesson.version + 1 }));
});
