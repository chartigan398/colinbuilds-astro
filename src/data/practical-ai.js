// Course structure and authored teaching content. The pilot is the only ready lesson.
export const course = {
  id: 'practical-ai', title: 'AI for everyday life',
  description: 'Give AI a useful task. Improve the answer. Check it before you use it.',
  pilot: 'a-useful-answer', reviewed: '2026-09-09',
  modules: [
    { title: 'Choose a useful task', outcome: 'Know where AI can help and where you need to check.', lessons: [
      { slug: 'choose-a-task', title: 'Where can AI help?', outcome: 'Compare useful tasks with tasks needing independent verification.' },
      { slug: 'your-first-task', title: 'Choose your first task', outcome: 'Select a useful, low-risk task.' },
    ] },
    { title: 'Give clear instructions', outcome: 'Give the purpose, the facts, and the limits.', lessons: [
      { slug: 'a-useful-answer', title: 'Turn a vague request into a useful answer', outcome: 'Spot missing facts and improve a request.', status: 'ready' },
      { slug: 'write-your-request', title: 'Write a request from your own brief', outcome: 'Use supplied facts to write a clear request.' },
    ] },
    { title: 'Improve the response', outcome: 'Notice what needs changing and ask for that change.', lessons: [
      { slug: 'diagnose-an-answer', title: 'What is wrong with this answer?', outcome: 'Diagnose an unhelpful response.' },
      { slug: 'useful-follow-up', title: 'Ask a useful follow-up', outcome: 'Choose and write a targeted follow-up.' },
    ] },
    { title: 'Check before trusting', outcome: 'Check claims against evidence.', lessons: [
      { slug: 'claims-and-suggestions', title: 'A claim or a suggestion?', outcome: 'Separate factual claims from suggestions.' },
      { slug: 'check-the-source', title: 'Does the source support it?', outcome: 'Compare an answer with supplied source material.' },
    ] },
    { title: 'Protect private information', outcome: 'Share only what the task needs.', lessons: [
      { slug: 'private-details', title: 'What should you leave out?', outcome: 'Identify unnecessary sensitive information.' },
      { slug: 'safer-request', title: 'Rewrite a request safely', outcome: 'Use fictional or generalised information.' },
    ] },
    { title: 'Complete a project', outcome: 'Use the skills together and review your work.', lessons: [
      { slug: 'event-project', title: 'Make an invitation and a checklist', outcome: 'Turn fictional event notes into useful drafts.' },
      { slug: 'review-your-project', title: 'Check your finished project', outcome: 'Review the drafts against the original brief.' },
    ] },
  ],
};

export const pilotLesson = {
  id: 'a-useful-answer', version: 1, title: 'Turn a vague request into a useful answer',
  minutes: '10–15', module: 2, lesson: 1, reviewed: '2026-09-09',
  outcome: 'Spot missing facts, give clearer instructions, and check what comes back.',
  next: { title: 'Write a request from your own brief', href: '/learn/practical-ai/#module-2', status: 'planned' },
  sources: [
    { title: 'Elements of AI — examples followed by an exercise', url: 'https://course.elementsofai.com/1/1/' },
    { title: 'The Evolution of Trust — choices and consequences', url: 'https://ncase.me/trust/' },
    { title: 'Karpicke & Blunt — research on retrieval practice', url: 'https://pubmed.ncbi.nlm.nih.gov/21252317/' },
    { title: 'NIST — Generative AI Profile (confabulation)', url: 'https://doi.org/10.6028/NIST.AI.600-1' },
  ],
  steps: [
    { id: 'brief', type: 'read', label: 'The task', title: 'An invitation for your neighbours',
      text: 'You are helping organise a community seed swap. You want AI to turn a few notes into a short, friendly invitation. No AI account is needed here: you will work with prepared examples.',
      blocks: [{ label: 'Your notes · fictional event', text: 'Community seed swap. Everyone welcome. Bring spare seeds if you have them. Free entry. The date, time, and venue have not been decided.' }],
      takeaway: 'Your job is to make a useful draft without turning unknown details into facts.',
      explanation: 'AI tools can draft text from instructions. Here, a “request” or “prompt” means the instructions you give the tool.' },
    { id: 'compare', type: 'compare', label: 'Look closely', title: 'It sounds helpful. Is it ready to send?',
      text: 'Compare the answer with the notes. Notice which details came from the notes and which did not.',
      reference: 'Community seed swap. Everyone welcome. Bring spare seeds if you have them. Free entry. The date, time, and venue have not been decided.',
      blocks: [
        { label: 'Weak request', text: 'Write a friendly invitation to our community seed swap.' },
        { label: 'Prepared example · flawed answer', text: 'Join us for a free community seed swap this Saturday at 10 am in Oak Hall! Everyone is welcome. Bring your spare seeds and meet your neighbours.' },
      ],
      prompt: 'Which detail needs checking before you send this?',
      options: [
        { id: 'welcome', text: 'Everyone is welcome.', feedback: 'That matches the notes. Look for a detail the organiser has not decided yet.' },
        { id: 'invented', text: 'Saturday at 10 am in Oak Hall.', correct: true, feedback: 'Exactly. The date, time, and venue were never supplied. The example has filled the gaps with invented details.' },
        { id: 'free', text: 'The event is free.', feedback: 'Free entry was in the notes. The problem is information that did not come from the brief.' },
      ], explanation: 'A sentence can sound natural and still contain unsupported facts. Compare the answer with the information you actually supplied.' },
    { id: 'diagnose', type: 'decision', label: 'Make a decision', title: 'What would you fix first?',
      text: 'Someone suggests sending the invitation now. What is the most useful next step?',
      prompt: 'Choose your response.',
      options: [
        { id: 'tone', text: 'Ask for a more cheerful tone.', feedback: 'The invitation may sound warmer, but people could still arrive at an invented venue. Fix the missing facts first.' },
        { id: 'facts', text: 'Supply the known facts and leave the unknown details blank.', correct: true, feedback: 'Yes. Give the tool the facts you have, and tell it how to handle what you do not know. You still need to check the next answer.' },
        { id: 'length', text: 'Ask for half as many words.', feedback: 'A shorter invitation could still send people to the wrong place. Length is secondary to getting the details right.' },
      ], explanation: 'Clear instructions can reduce avoidable errors. They do not guarantee a correct answer, so checking remains part of the task.' },
    { id: 'build', type: 'builder', label: 'Improve it', title: 'Give the tool what it needs',
      text: 'Choose one instruction in each group. Together they will form a better request.',
      groups: [
        { id: 'purpose', label: '1. Purpose', options: [
          { id: 'invite', text: 'Write a short invitation for neighbours.', correct: true },
          { id: 'impress', text: 'Write something impressive.', feedback: '“Impressive” does not explain the task or audience. Choose the instruction that says what to write and who it is for.' },
        ] },
        { id: 'facts', label: '2. Supplied facts', options: [
          { id: 'invent', text: 'Add a likely date and a nearby venue.', feedback: 'Likely is not confirmed. Use the organiser’s notes instead of filling in event details.' },
          { id: 'notes', text: 'Seed swap; everyone welcome; free entry; bring spare seeds if you have them.', correct: true },
        ] },
        { id: 'tone', label: '3. Tone', options: [
          { id: 'friendly', text: 'Use friendly, plain language.', correct: true },
          { id: 'formal', text: 'Use formal business language.', feedback: 'This is a neighbourhood invitation. Plain, friendly wording suits the audience better.' },
        ] },
        { id: 'unknown', label: '4. Unknown details', options: [
          { id: 'blanks', text: 'Use [date], [time], and [venue]. Do not invent them.', correct: true },
          { id: 'confident', text: 'Make it sound confident and complete.', feedback: 'Confidence does not supply missing facts. Ask for labelled blanks that the organiser can fill later.' },
        ] },
      ],
      result: 'Write a short invitation for neighbours to a community seed swap. Everyone is welcome. Entry is free. Ask people to bring spare seeds if they have them. Use friendly, plain language. The date, time, and venue are not decided. Use [date], [time], and [venue]; do not invent them.',
      explanation: 'Purpose + known facts + tone + a rule for missing details. You do not need special jargon or a long prompt.' },
    { id: 'result', type: 'read', label: 'See the change', title: 'A useful draft keeps the gaps visible',
      text: 'This is a prepared example of a revised answer. A real AI tool may respond differently.',
      blocks: [{ label: 'Prepared example · revised answer', text: 'Come along to our free community seed swap on [date] at [time], at [venue]. Everyone is welcome! Bring spare seeds if you have them, and meet your neighbours.' }],
      changes: [
        { title: 'Known facts stayed', text: 'Free entry, everyone welcome, and spare seeds all come from the organiser’s notes.' },
        { title: 'Unknown facts became blanks', text: '[date], [time], and [venue] show exactly what still needs confirming.' },
        { title: 'The tone fits the task', text: 'The invitation stays short and friendly, as requested.' },
      ], takeaway: 'This is ready to review, not ready to send. Confirm the details, replace the blanks, and check the whole message.',
      explanation: 'The improvement is not just nicer wording. You can trace the answer back to the instructions and see what is still unknown.' },
    { id: 'transfer', type: 'independent', label: 'Try a new task', title: 'Your turn: a repair café',
      text: 'Work from this new brief on your own. Write your answer before opening the example. Use only these fictional notes.',
      blocks: [{ label: 'Organiser’s notes', text: 'A free repair café for neighbours. People can bring one small household item. Volunteers will try to help, but repairs are not guaranteed. Booking arrangements, date, opening time, and location are not confirmed.' }],
      prompt: 'What information is missing? Write a request for a short invitation that handles those gaps and keeps the limits clear.',
      model: 'Write a short, friendly invitation to a free repair café for neighbours. People may bring one small household item. Volunteers will try to help; do not promise a successful repair. Booking arrangements, date, opening time, and location are unconfirmed. Use [booking details], [date], [time], and [location]. Do not invent information.',
      criteria: [
        'I identified all four gaps: booking arrangements, date, opening time, and location.',
        'I used labelled blanks or asked for confirmation instead of guessing.',
        'I included free entry and the limit of one small household item.',
        'I kept the warning that a repair is not guaranteed.',
        'I stated the purpose and used an appropriate tone.',
      ], explanation: 'Different wording can be equally good. Compare the facts and instructions, rather than matching the model answer word for word.' },
    { id: 'recall', type: 'decision', label: 'Remember it', title: 'One last check',
      text: 'You have written a careful request and received a polished answer.',
      prompt: 'What should happen before you use it?',
      options: [
        { id: 'send', text: 'Use it immediately because the request was clear.', feedback: 'A clear request helps, but the response can still be wrong. Compare it with your brief and confirm the facts.' },
        { id: 'check', text: 'Compare it with the brief, confirm facts, and fill any remaining blanks.', correct: true, feedback: 'That is the habit to keep: request, review, then use. Clear instructions help; checking finishes the job.' },
      ] },
    { id: 'finish', type: 'finish', label: 'Take it with you', title: 'A checklist for your next request',
      text: 'You have practised improving a request and reviewing an answer. Your written task is self-reviewed, not automatically graded.',
      checklist: 'MY AI REQUEST CHECKLIST\n1. Say what I need and who it is for.\n2. Supply the facts the tool should use.\n3. Set the tone, length, or format where useful.\n4. Name missing details: ask for blanks or clarification.\n5. Check the answer against my brief and reliable sources.\n6. Confirm details and replace blanks before using it.',
    },
  ],
};
