# Practical AI: pilot and upkeep

## Release boundary

The complete practice preview is at `/learn/practical-ai/a-useful-answer/`.
It belongs to module 2, lesson 1. The course map lists all 12 planned lessons,
but only this preview has a working lesson link. Do not author the other 11
until the beginner pilot is reviewed. No pilot users have been recruited or
observed by this implementation. Local QA is not learner evidence.

## Run the five-person pilot

Recruit five adults who are new to AI, separately and with their consent.
Use anonymous participant IDs P1–P5. Ask them to use their own words and the
fictional task only. Do not collect personal or sensitive details. Each person
needs a fresh browser profile or a device without an existing lesson attempt.

Opening instruction: “Work through this lesson as you would at home. Tell us
when something is unclear. I will observe without explaining how to answer.”

Do not coach the repair-café transfer task. Record the first written answer
before the participant opens the model. Record the revised answer separately.
Opening the model before producing a substantive attempt counts as needing
help, even though the lesson itself allows any non-empty writing.

An independent transfer success requires all of the following:
- Identifies booking arrangements, date, time, and location as unknown.
- Asks for confirmation or labelled blanks rather than invented facts.
- Keeps free entry and the one-small-item limit.
- Does not promise a successful repair.
- Requests a short invitation suitable for neighbours.

Accept equivalent wording. Do not score confidence, reading speed, the UI's
worked-through marker, or copying the model as learning. A participant who
needs coaching to complete the task does not meet the independent criterion.

| ID | First attempt meets all criteria? | Needed coaching/model? | Where they hesitated | Feedback unclear? | Next step easy to find? | Changes to make |
|---|---|---|---|---|---|---|
| P1 | | | | | | |
| P2 | | | | | | |
| P3 | | | | | | |
| P4 | | | | | | |
| P5 | | | | | | |

Gate: at least 4/5 complete the unfamiliar task independently, and all major
navigation or feedback problems are corrected. This is a practical release
check, not statistical proof. If fewer pass, fix the observed problems and run
another fresh five-person pilot. Document outcomes before expanding the course.

## Reusable lesson content

`src/data/practical-ai.js` owns course order, outcomes, authored activities,
specific feedback, references, review dates, and next-lesson availability.
`PracticeLesson.astro` renders content; `practice-lesson.js` controls interaction;
`learning-state.js` handles progression and defensive local saves.

Supported activities:
- `compare`: labelled examples and a choice with feedback.
- `decision`: a situation, options, and consequences.
- `independent`: learner writing, a model answer, and self-review criteria.
- Supporting `read`, `builder`, and `finish` activities.

Each choice needs one correct option and a useful explanation for every option.
Keep free text self-reviewed unless a later, separately evaluated grading
system is introduced. Render learner input as text, never HTML. No AI API is
used. Do not imply that prepared examples are generated live.

Use stable lesson/step IDs for wording corrections. Increment lesson `version`
if an activity changes enough to invalidate saved work. That starts a fresh
attempt in a separate storage key. The UI must state that progress is local
to a browser/device and that clearing browser data removes it.

## Monthly review: 2–4 hours

1. 30–60 min: check official vendor documentation/release notes and the lesson's
   evidence sources. Only investigate changes that affect taught tasks.
2. 30–60 min: correct affected examples or linked dated guides. Record the exact
   source URL, access date, claim, lesson affected, and change made. If nothing
   material changed, say so; do not invent news to fill an edition.
3. 30–60 min: add one entry to `src/data/learning-updates.js`, including date,
   what changed, who it affects, the affected lesson, a short exercise, a model
   response, a recall question, its answer, and sources. The September entry is
   a course-release note, not a claim about AI product changes.
4. 30–60 min: review learner feedback; run tests and build; check the changed
   lesson on mobile and with keyboard. Publish through the existing site workflow.

Keep product-specific steps and prices in dated guides, linked by the affected
lesson. Do not rewrite the whole core course for each model release. Do not
automate publication or schedule a monitor as part of this implementation.

## Technical checks

Run `node --test tests/practical-ai.test.mjs` and `npm run build`.
Manually verify correct and wrong choices, changing a previously checked answer,
four builder fields, empty writing, model reveal, editing after review, checkbox
state, back/next, reload/resume, copy fallback, and completion wording.
Verify keyboard focus order and radio arrow keys, mobile width, 200% zoom/text,
light and dark themes, reduced motion, and unavailable storage. Also check that
planned lessons have no broken links and no-JavaScript readers can read examples.
