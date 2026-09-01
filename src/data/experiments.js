export const experiments = [
  {
    id: 'trolley-problem',
    title: 'The Trolley Problem',
    tagline: 'An impossible choice about life and death.',
    description:
      'An out-of-control trolley is speeding towards five people tied to the main track. You are standing next to a lever that can switch the trolley to a side track, where there is one person tied up. What do you do?',
    choices: [
      {
        text: 'Pull the lever',
        outcome:
          'You pull the lever. The trolley switches tracks, saving five people but sacrificing one. This choice aligns with Utilitarianism, which seeks the greatest good for the greatest number.',
      },
      {
        text: 'Do nothing',
        outcome:
          'You do nothing. The trolley continues on its path, and five people are lost. This choice aligns with a deontological view, where the act of pulling the lever would make you directly responsible for a death.',
      },
    ],
  },
  {
    id: 'marys-room',
    title: "Mary's Room",
    tagline: 'A question about knowledge and experience.',
    description:
      'Mary is a brilliant scientist who has lived her entire life in a black-and-white room. She knows everything there is to know about the physics and biology of color vision. One day, she is allowed to leave the room and sees the color red for the first time. Does she learn something new?',
    choices: [
      {
        text: 'Yes, she learns what it is like to see red.',
        outcome:
          'This suggests that subjective experience (qualia) is a form of knowledge that exists beyond physical facts alone. This is an argument against pure physicalism.',
      },
      {
        text: 'No, she already knew everything about red.',
        outcome:
          'This implies that all knowledge is, in principle, physical knowledge. Her new experience is just a new way of accessing facts she already possessed.',
      },
    ],
  },
  {
    id: 'chinese-room',
    title: 'The Chinese Room',
    tagline: 'Can a machine truly understand?',
    description:
      'Imagine a man in a locked room who does not speak Chinese. He has a book of complex rules. People outside the room slide notes with Chinese characters under the door. The man uses his rulebook to find the correct Chinese characters to send back as a response. To the people outside, it seems like the person in the room is a fluent Chinese speaker. But does the man in the room actually understand Chinese?',
    choices: [
      {
        text: "No, he's just manipulating symbols.",
        outcome:
          "This is John Searle's conclusion. He argues that this scenario is analogous to a computer running a program. The computer can process information and produce correct outputs, but it doesn't have genuine understanding or consciousness.",
      },
      {
        text: 'Yes, the system as a whole understands.',
        outcome:
          "This is the 'Systems Reply'. While the man himself doesn't understand, the combination of the man, the room, and the rulebook constitutes a system that *does* understand Chinese. This challenges the idea that understanding must be located in a single component.",
      },
    ],
  },
  {
    id: 'prisoners-dilemma',
    title: "The Prisoner's Dilemma",
    tagline: 'A test of trust, betrayal, and self-interest.',
    description:
      'You and an accomplice are arrested for a crime. The police separate you and offer each of you the same deal: If you betray your accomplice and they stay silent, you go free and they get 3 years. If you both betray each other, you both get 2 years. If you both stay silent, you both get only 1 year. Your accomplice is being offered the exact same deal. You cannot communicate with them. What do you do?',
    choices: [
      {
        text: 'Betray your accomplice',
        outcome:
          "You choose to betray. This is the 'rational' choice from a purely self-interested perspective, as it offers a better outcome for you regardless of what your accomplice does. This scenario, a cornerstone of game theory, shows how individual rationality can lead to a worse collective outcome.",
      },
      {
        text: 'Stay silent',
        outcome:
          'You choose to stay silent, trusting your accomplice to do the same. This choice aims for the best possible *collective* outcome (1 year each). It requires trust and cooperation, but risks the worst possible *personal* outcome (3 years) if your trust is betrayed.',
      },
    ],
  },
  {
    id: 'veil-of-ignorance',
    title: 'The Veil of Ignorance',
    tagline: 'How would you design a just society?',
    description:
      "Imagine you have the power to design the fundamental principles of a new society. However, you must do so from behind a 'veil of ignorance.' This means you do not know what your position in this society will be—you could be rich or poor, healthy or sick, talented or not. From this original position, what is the most important principle to establish?",
    choices: [
      {
        text: 'Absolute equality: everyone gets the same resources.',
        outcome:
          "This choice aims for a simple form of fairness, but might stifle individual effort and not account for people's different needs. John Rawls, who created this experiment, argued against this simple equality.",
      },
      {
        text: 'Maximum liberty and fairness for the least advantaged.',
        outcome:
          "This is Rawls's conclusion. He argued that from behind the veil, any rational person would choose a system that (a) protects basic liberties for all, and (b) ensures that any social or economic inequalities are arranged so that they are to the greatest benefit of the least advantaged members of society. This is the foundation of his theory of 'Justice as Fairness'.",
      },
    ],
  },
];

export function getExperiment(id) {
  return experiments.find((item) => item.id === id) ?? null;
}
