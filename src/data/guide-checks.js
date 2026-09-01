export const guideChecks = {
  '01': [
    {
      question: 'Did AI begin with ChatGPT?',
      options: ['Yes', 'No. The work goes back many decades.'],
      answer: 1,
    },
    {
      question: 'What was Turing trying to ask, in plain terms?',
      options: ['How fast a computer is', 'Whether a machine can think'],
      answer: 1,
    },
    {
      question: 'What should you take from this history?',
      options: [
        'AI appeared overnight in 2022',
        'AI grew through many tries, winters, and public moments',
      ],
      answer: 1,
    },
  ],
  '02': [
    {
      question: 'What is AI, in this guide?',
      options: ['Only ChatGPT', 'The whole field of making computers do tasks that look like thinking'],
      answer: 1,
    },
    {
      question: 'What is machine learning?',
      options: ['AI that learns from examples', 'Any program with if/then rules'],
      answer: 0,
    },
    {
      question: 'Does every AI system learn from examples?',
      options: ['Yes', 'No'],
      answer: 1,
    },
  ],
  '03': [
    {
      question: 'In supervised learning, what does the computer get during practice?',
      options: ['Examples with the correct answers marked', 'No answers, only guesses'],
      answer: 0,
    },
    {
      question: 'What happens when a guess is wrong?',
      options: ['Nothing', 'The computer adjusts and tries again'],
      answer: 1,
    },
    {
      question: 'What is the later guess on a new example called in the guide?',
      options: ['Training', 'Using what was practised (inference)'],
      answer: 1,
    },
  ],
  '04': [
    {
      question: 'What is a prompt?',
      options: ['The words you type to the AI', 'The computer’s hidden rules'],
      answer: 0,
    },
    {
      question: 'Why do clearer words help?',
      options: ['The AI has less to guess', 'The AI becomes a different kind of machine'],
      answer: 0,
    },
    {
      question: 'Which prompt is clearer?',
      options: ['Tell me about dogs.', 'Explain in four short sentences, for a ten-year-old, how a guide dog is trained.'],
      answer: 1,
    },
  ],
};

export const historyToc = [
  { href: '#ai-did-not-begin-with-chatgpt', label: 'AI did not begin with ChatGPT' },
  { href: '#1943-researchers-turn-a-neuron-into-mathematics', label: '1943' },
  { href: '#1950-alan-turing-asks-a-difficult-question', label: '1950: Turing' },
  { href: '#19551956-artificial-intelligence-gets-a-name', label: '1955–1956: the name' },
  { href: '#the-1970s-the-first-ai-winter', label: 'The first winter' },
  { href: '#1997-deep-blue-defeats-the-world-chess-champion', label: '1997: Deep Blue' },
  { href: '#2017-the-transformer-changes-language-ai', label: '2017: Transformer' },
  { href: '#2022-chatgpt-takes-ai-to-the-public', label: '2022: ChatGPT' },
  { href: '#what-the-history-of-ai-teaches-us', label: 'What it teaches us' },
  { href: '#sources', label: 'Sources' },
];
