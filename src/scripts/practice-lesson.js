import { loadProgress, saveProgress, stepReady } from '../lib/learning-state.js';

export function initPracticeLesson() {
  const root = document.querySelector('[data-lesson]');
  if (!root || root.dataset.initialised) return;
  root.dataset.initialised = 'true';
  const lesson = JSON.parse(document.getElementById('practice-lesson-data').textContent);
  // Access to window.localStorage itself can throw in privacy modes.
  let storage;
  try { storage = window.localStorage; } catch { storage = null; }
  const loaded = loadProgress(storage, lesson);
  const state = loaded.state;
  const panels = [...root.querySelectorAll('[data-step]')];
  const next = root.querySelector('[data-next]');
  const prev = root.querySelector('[data-prev]');
  const help = root.querySelector('[data-next-help]');
  function storageNotice(ok) {
    root.querySelector('[data-storage]').textContent = ok
      ? 'Progress and your written answer are saved in this browser on this device. Clearing browser data removes them. They do not sync between devices.'
      : 'Saving is unavailable in this browser. You can still finish the lesson, but your progress and answer will be lost when you leave or reload.';
  }
  function persist() { storageNotice(saveProgress(storage, lesson, state)); }
  function ready() { return stepReady(lesson.steps[state.step], state); }
  function controls() {
    prev.disabled = state.step === 0;
    next.hidden = state.step === panels.length - 1;
    // Keep Continue focusable so learners can discover why a step needs attention.
    next.setAttribute('aria-disabled', String(!ready()));
    const step = lesson.steps[state.step];
    help.textContent = ready() ? '' : step.type === 'independent' ? 'Write an answer, then compare it with the example.' : 'Check your answer to continue. You can try again.';
    root.querySelector('[data-completion]').textContent = state.completed ? 'Practice worked through' : 'Practice in progress';
  }
  function feedback(panel, text, success = false) {
    const area = panel.querySelector('[data-feedback]');
    area.textContent = text;
    area.classList.toggle('success', success);
  }
  function render(focus = false) {
    panels.forEach((panel, i) => panel.hidden = i !== state.step);
    root.querySelectorAll('[data-outline]').forEach((item, i) => {
      if (i === state.step) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current');
      item.querySelector('[data-step-marker]').textContent = i < state.step ? '✓' : '';
    });
    root.querySelector('[data-position]').textContent = `Step ${state.step + 1} of ${panels.length}`;
    root.querySelector('progress').value = state.step + 1;
    root.querySelector('.learn-skip').href = `#activity-title-${state.step}`;
    controls();
    if (focus) panels[state.step].querySelector('h2').focus({ preventScroll: false });
  }
  panels.forEach((panel, index) => {
    const step = lesson.steps[index];
    panel.querySelectorAll('input[type="radio"]').forEach(input => {
      input.checked = state.answers[input.name] === input.value;
      input.addEventListener('change', () => {
        state.answers[input.name] = input.value;
        state.checked[step.id] = false;
        state.completed = false;
        panel.querySelector('[data-builder-result]')?.setAttribute('hidden', '');
        panel.querySelectorAll('[data-group-feedback]').forEach(el => el.textContent = '');
        feedback(panel, ''); controls(); persist();
      });
    });
    const choiceForm = panel.querySelector('[data-choice-form]');
    function checkChoice() {
      const option = step.options.find(o => o.id === state.answers[step.id]);
      state.checked[step.id] = Boolean(option);
      feedback(panel, option ? option.feedback : 'Choose an answer first.', Boolean(option?.correct));
      controls();
    }
    choiceForm?.addEventListener('submit', event => { event.preventDefault(); checkChoice(); persist(); });
    if (choiceForm && state.checked[step.id]) checkChoice();
    const builder = panel.querySelector('[data-builder-form]');
    function checkBuilder() {
      const correct = step.groups.every(group => group.options.some(o => o.correct && o.id === state.answers[`${step.id}:${group.id}`]));
      state.checked[step.id] = true;
      for (const group of step.groups) {
        const selected = group.options.find(o => o.id === state.answers[`${step.id}:${group.id}`]);
        panel.querySelector(`[data-group-feedback="${group.id}"]`).textContent = !selected ? 'Choose one instruction.' : selected.correct ? 'This fits the brief.' : selected.feedback;
      }
      panel.querySelector('[data-builder-result]').hidden = !correct;
      feedback(panel, correct ? 'Your request gives the purpose, known facts, tone, and a rule for the missing details. Read it below, then continue.' : 'Review the feedback under each group and try again.', correct);
      controls();
    }
    builder?.addEventListener('submit', event => { event.preventDefault(); checkBuilder(); persist(); });
    if (builder && state.checked[step.id]) checkBuilder();
    const draft = panel.querySelector('[data-draft]');
    if (draft) {
      draft.value = state.drafts[step.id] || '';
      panel.querySelector('[data-model]').hidden = !state.reviewed[step.id];
      draft.addEventListener('input', () => {
        state.drafts[step.id] = draft.value;
        state.reviewed[step.id] = false;
        state.criteria[step.id] = [];
        state.completed = false;
        panel.querySelector('[data-model]').hidden = true;
        panel.querySelectorAll('[data-criterion]').forEach(input => input.checked = false);
        feedback(panel, ''); controls(); persist();
      });
      panel.querySelector('[data-review]').addEventListener('click', () => {
        if (!draft.value.trim()) { feedback(panel, 'Write your own answer first. It does not have to be perfect.'); draft.focus(); return; }
        state.reviewed[step.id] = true;
        panel.querySelector('[data-model]').hidden = false;
        feedback(panel, 'The example is now below. Compare the facts and missing details; your answer has not been automatically graded.');
        controls(); persist();
      });
      panel.querySelectorAll('[data-criterion]').forEach(input => {
        input.checked = (state.criteria[step.id] || []).includes(Number(input.dataset.criterion));
        input.addEventListener('change', () => {
          state.criteria[step.id] = [...panel.querySelectorAll('[data-criterion]:checked')].map(el => Number(el.dataset.criterion)); persist();
        });
      });
    }
  });
  prev.addEventListener('click', () => { if (state.step > 0) { state.step--; render(true); persist(); } });
  next.addEventListener('click', () => {
    if (!ready()) { feedback(panels[state.step], help.textContent); return; }
    if (state.step < panels.length - 1) { state.step++; render(true); persist(); }
  });
  root.querySelector('[data-copy]').addEventListener('click', async () => {
    const text = root.querySelector('#request-checklist');
    const status = root.querySelector('[data-copy-status]');
    try { await navigator.clipboard.writeText(text.value); status.textContent = 'Checklist copied.'; }
    catch { text.focus(); text.select(); status.textContent = 'Select Copy from your browser menu, or press Ctrl+C (Command+C on Mac).'; }
  });
  root.querySelector('[data-finish]').addEventListener('click', () => {
    if (!lesson.steps.every(step => stepReady(step, state))) return;
    state.completed = true;
    feedback(panels[state.step], 'Practice recorded as worked through. Keep the checklist and use it on your next task.', true);
    controls(); persist();
  });
  root.querySelectorAll('[data-enhanced]').forEach(el => el.hidden = false);
  // Probe writes too: some browsers allow reads but reject writes.
  storageNotice(loaded.available && saveProgress(storage, lesson, state));
  render();
}
