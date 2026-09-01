export const paths = [
  {
    id: 'epistemology-101',
    title: 'Introduction to Epistemology',
    tagline: 'What can we know, and how can we know it?',
    description:
      'Journey into the theory of knowledge. Explore the nature of truth, belief, and justification, and question the very foundations of what you think you know.',
    modules: [
      {
        id: 'ep-l1',
        title: 'What is Knowledge?',
        type: 'lesson',
        estimatedTime: '5 min',
        lesson: [
          'Epistemology is the branch of philosophy concerned with knowledge. It asks: What is it? How do we get it? And how can we be sure?',
          "A classic definition is that knowledge is 'justified true belief'. Let's break that down.",
          'Belief is the starting point. You have to hold a proposition to be true. Truth means it must actually be true in reality. Justified means you must have good reasons for your belief. All three are needed.',
        ],
      },
      {
        id: 'ep-te1',
        title: "Mary's Room",
        type: 'thought-experiment',
        estimatedTime: '5 min',
        experimentId: 'marys-room',
      },
      {
        id: 'ep-sd1',
        title: "Plato's Cave",
        type: 'socratic-dialogue',
        estimatedTime: '10 min',
        dialogueId: 'allegory-of-the-cave',
      },
      {
        id: 'ep-p1',
        title: 'The Liar Paradox',
        type: 'paradox',
        estimatedTime: '5 min',
        paradoxId: 'liar-paradox',
      },
      {
        id: 'ep-q1',
        title: 'Epistemology Quiz',
        type: 'quiz',
        estimatedTime: '5 min',
        questions: [
          {
            question: "Which component of 'justified true belief' deals with having evidence?",
            options: ['Belief', 'True', 'Justified', 'Knowledge'],
            correctAnswer: 'Justified',
          },
          {
            question: "The 'Mary's Room' experiment challenges which philosophical position?",
            options: ['Dualism', 'Idealism', 'Physicalism', 'Skepticism'],
            correctAnswer: 'Physicalism',
          },
        ],
      },
    ],
  },
  {
    id: 'ethics-101',
    title: 'Introduction to Ethics',
    tagline: 'Exploring the foundations of morality.',
    description:
      'Delve into the core questions of right and wrong. This path introduces you to the major frameworks for ethical reasoning, from ancient virtue to modern deontology.',
    modules: [
      {
        id: 'eth-l1',
        title: 'Three Ethical Frameworks',
        type: 'lesson',
        estimatedTime: '5 min',
        lesson: [
          'Ethical philosophy generally falls into three main categories.',
          "1. Virtue Ethics: Focuses on the character of the moral agent. Asks 'What makes a good person?' (Aristotle)",
          '2. Deontology: Focuses on duties and rules. Certain actions are inherently right or wrong, regardless of consequences. (Kant)',
          '3. Consequentialism: Focuses on the outcomes. The right action is the one that produces the best results. (Utilitarianism)',
        ],
      },
      {
        id: 'eth-te1',
        title: 'The Trolley Problem',
        type: 'thought-experiment',
        estimatedTime: '5 min',
        experimentId: 'trolley-problem',
      },
      {
        id: 'eth-sd1',
        title: "Kant's Universal Law",
        type: 'socratic-dialogue',
        estimatedTime: '10 min',
        dialogueId: 'categorical-imperative',
      },
      {
        id: 'eth-q1',
        title: 'Ethics Quiz',
        type: 'quiz',
        estimatedTime: '5 min',
        questions: [
          {
            question: "Which framework would say 'Lying is always wrong, no matter what'?",
            options: ['Virtue Ethics', 'Deontology', 'Consequentialism'],
            correctAnswer: 'Deontology',
          },
          {
            question: 'The Trolley Problem is a classic test for which framework?',
            options: ['Deontology', 'Utilitarianism (a type of Consequentialism)', 'Virtue Ethics'],
            correctAnswer: 'Utilitarianism (a type of Consequentialism)',
          },
        ],
      },
    ],
  },
  {
    id: 'political-philosophy-101',
    title: 'Introduction to Political Philosophy',
    tagline: 'How should we live together?',
    description:
      'Examine the fundamental questions of justice, power, and the state. This path explores different visions of the ideal society, from ancient republics to modern theories of liberty.',
    modules: [
      {
        id: 'pol-l1',
        title: 'The State of Nature',
        type: 'lesson',
        estimatedTime: '5 min',
        lesson: [
          "Political philosophy often starts with a thought experiment: What would life be like without government? This is the 'State of Nature'.",
          "Thomas Hobbes believed it would be a 'war of all against all'—nasty, brutish, and short. Therefore, we need a strong ruler to keep the peace.",
          'John Locke disagreed, arguing people are naturally rational and have rights to life, liberty, and property. Government exists only to protect these rights.',
        ],
      },
      {
        id: 'pol-te1',
        title: "The Prisoner's Dilemma",
        type: 'thought-experiment',
        estimatedTime: '5 min',
        experimentId: 'prisoners-dilemma',
      },
      {
        id: 'pol-q1',
        title: 'Political Philosophy Quiz',
        type: 'quiz',
        estimatedTime: '5 min',
        questions: [
          {
            question: "Who described the State of Nature as 'nasty, brutish, and short'?",
            options: ['John Locke', 'Jean-Jacques Rousseau', 'Thomas Hobbes', 'Karl Marx'],
            correctAnswer: 'Thomas Hobbes',
          },
          {
            question: "In the Prisoner's Dilemma, what is usually the 'rational' individual choice?",
            options: ['Cooperate (Stay Silent)', 'Betray (Confess)', 'Flip a coin', 'Wait for a lawyer'],
            correctAnswer: 'Betray (Confess)',
          },
        ],
      },
    ],
  },
];

export function getPath(id) {
  return paths.find((item) => item.id === id) ?? null;
}

export function getPathModule(pathId, moduleId) {
  const path = getPath(pathId);
  if (!path) return null;
  const module = path.modules.find((item) => item.id === moduleId);
  if (!module) return null;
  return { path, module };
}

export function moduleHref(pathId, module) {
  if (module.type === 'lesson' || module.type === 'quiz') {
    return `/philosophia/paths/${pathId}/${module.id}/`;
  }
  if (module.type === 'thought-experiment') {
    return `/philosophia/thought-experiments/${module.experimentId}/`;
  }
  if (module.type === 'paradox') {
    return `/philosophia/paradoxes/${module.paradoxId}/`;
  }
  if (module.type === 'socratic-dialogue') {
    return `/philosophia/dialogues/${module.dialogueId}/`;
  }
  return `/philosophia/paths/${pathId}/`;
}

export function playablePathModules() {
  return paths.flatMap((path) =>
    path.modules
      .filter((module) => module.type === 'lesson' || module.type === 'quiz')
      .map((module) => ({ pathId: path.id, moduleId: module.id })),
  );
}
