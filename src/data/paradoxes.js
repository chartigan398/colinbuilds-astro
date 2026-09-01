export const paradoxes = [
  {
    id: 'ship-of-theseus',
    title: 'The Ship of Theseus',
    tagline: 'A puzzle of identity over time.',
    description:
      'The famous ship of the hero Theseus is preserved in a museum. Over the years, its wooden planks begin to rot. Each rotten plank is replaced one by one, until eventually, no original planks remain. Is this fully restored ship, with all new parts, still the Ship of Theseus?',
    resolution:
      'There is no single correct answer. Philosophers disagree! Some, like Heraclitus, would say nothing remains the same anyway. Others, like Aristotle, might argue the "formal cause" (the ship\'s design) makes it the same ship. This paradox forces us to question what identity is: our physical matter, our form, our history, or something else entirely?',
    choices: [{ text: 'Yes, it is the same ship' }, { text: 'No, it is a new ship' }],
  },
  {
    id: 'sorites-paradox',
    title: 'The Sorites Paradox',
    tagline: 'How many grains make a heap?',
    description:
      'Consider a heap of sand. If you remove one grain, it is still a heap. If you remove another grain, it remains a heap. You can repeat this process. Eventually, you will be left with only one grain of sand. Is a single grain a "heap"? If not, at what exact point did it stop being a heap?',
    resolution:
      'This paradox challenges vague concepts. There is no clear line where a "heap" becomes a "non-heap." Some philosophers argue that concepts like "heap" are not precisely definable. Others propose multi-valued logic systems where something can be "sort of a heap." It highlights the limits of language in describing the world perfectly.',
    choices: [
      { text: 'There is a specific, unknown number.' },
      { text: 'The term "heap" is too vague to have a specific line.' },
    ],
  },
  {
    id: 'liar-paradox',
    title: 'The Liar Paradox',
    tagline: 'A statement that contradicts itself.',
    description: "Consider the following simple sentence: 'This statement is false.' Is the sentence true or false? If it's true, then what it says must be correct, which means it must be false. But if it's false, then it's not a false statement, which must make it true.",
    resolution:
      "This self-referential paradox has fascinated logicians for centuries. There's no easy solution. Some, like Alfred Tarski, proposed that 'true' and 'false' must operate in different language levels to avoid this loop. You can't use a language to assess the truth of its own sentences. The paradox reveals deep issues in logic and language about how truth works.",
    choices: [{ text: 'It is both true and false' }, { text: 'It is neither true nor false' }],
  },
  {
    id: 'zenos-paradoxes',
    title: "Zeno's Paradoxes",
    tagline: 'The impossibility of motion.',
    description:
      "To get to any destination, you must first get halfway there. To get halfway there, you must get a quarter of the way there, and so on. Since there are an infinite number of these 'halfway' points to cross, how can you ever reach the destination? How can motion even begin?",
    resolution:
      "Zeno's paradoxes challenge the nature of space, time, and infinity. While mathematically we can solve this with the concept of a convergent series (the infinite sum has a finite value), the philosophical problem remains. It highlights a conflict between our logical model of the world and our sensory experience of it. The development of calculus was partly a response to these very problems.",
    choices: [
      { text: 'Motion is an illusion' },
      { text: 'The paradox shows a flaw in our logic, not reality' },
    ],
  },
];

export function getParadox(id) {
  return paradoxes.find((item) => item.id === id) ?? null;
}
