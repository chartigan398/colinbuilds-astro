export const storageKey = (lesson) => `cb-learning:${lesson.id}:v${lesson.version}`;
export const freshState = () => ({ step: 0, answers: {}, checked: {}, drafts: {}, reviewed: {}, criteria: {}, completed: false });
const record = (value) => value && typeof value === 'object' && !Array.isArray(value) ? value : {};

export function stepReady(step, state) {
  if (step.type === 'compare' || step.type === 'decision') {
    return state.checked[step.id] === true && step.options.some(o => o.correct && o.id === state.answers[step.id]);
  }
  if (step.type === 'builder') {
    return state.checked[step.id] === true && step.groups.every(g => g.options.some(o => o.correct && state.answers[`${step.id}:${g.id}`] === o.id));
  }
  if (step.type === 'independent') return Boolean(state.drafts[step.id]?.trim()) && state.reviewed[step.id] === true;
  return true;
}

export function normaliseState(raw, lesson) {
  const source = record(raw), state = freshState();
  for (const step of lesson.steps) {
    const keys = step.type === 'builder' ? step.groups.map(g => `${step.id}:${g.id}`) : [step.id];
    for (const key of keys) {
      const answer = record(source.answers)[key];
      if (typeof answer === 'string') state.answers[key] = answer;
    }
    state.checked[step.id] = record(source.checked)[step.id] === true;
    state.reviewed[step.id] = record(source.reviewed)[step.id] === true;
    const draft = record(source.drafts)[step.id];
    if (typeof draft === 'string') state.drafts[step.id] = draft.slice(0, 6000);
    state.criteria[step.id] = Array.isArray(record(source.criteria)[step.id]) ? source.criteria[step.id].filter(x => Number.isInteger(x) && x >= 0 && x < (step.criteria?.length || 0)) : [];
  }
  const firstUnready = lesson.steps.findIndex(step => !stepReady(step, state));
  const limit = firstUnready < 0 ? lesson.steps.length - 1 : firstUnready;
  state.step = Number.isInteger(source.step) ? Math.max(0, Math.min(source.step, limit)) : 0;
  state.completed = source.completed === true && firstUnready < 0;
  return state;
}

export function loadProgress(storage, lesson) {
  try {
    const raw = storage.getItem(storageKey(lesson));
    if (!raw) return { state: freshState(), available: true };
    try { return { state: normaliseState(JSON.parse(raw), lesson), available: true }; }
    catch { return { state: freshState(), available: true }; }
  } catch { return { state: freshState(), available: false }; }
}

export function saveProgress(storage, lesson, state) {
  try { storage.setItem(storageKey(lesson), JSON.stringify(state)); return true; }
  catch { return false; }
}
