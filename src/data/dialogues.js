export const dialogues = [
  {
    id: 'allegory-of-the-cave',
    title: "Plato's Allegory of the Cave",
    tagline: 'Explore the nature of reality through guided questioning.',
    philosopher: 'Socrates',
    nodes: [
      {
        id: 'start',
        text: "Imagine people living in a cave, chained so they can only see the wall in front of them. Behind them, a fire burns, and puppeteers cast shadows on the wall. This is all they've ever known. Would they believe the shadows are real?",
        choices: [
          { text: "Yes, of course. It's their only reality.", nextNodeId: 'q1-yes' },
          { text: 'Perhaps, but they might suspect something is off.', nextNodeId: 'q1-no' },
        ],
      },
      {
        id: 'q1-yes',
        text: 'Precisely. To them, the shadows *are* reality. Now, what if one prisoner was freed and dragged out into the sunlight? What would the sun feel like to eyes that have only known darkness?',
        choices: [
          { text: 'It would be painful and blinding.', nextNodeId: 'q2-pain' },
          { text: 'It would be beautiful and illuminating.', nextNodeId: 'q2-beauty' },
        ],
      },
      {
        id: 'q1-no',
        text: 'An interesting thought. What might make them suspicious of their reality, if the shadows are all they have ever seen?',
        choices: [
          { text: 'Inconsistencies in the shadows.', nextNodeId: 'q2-inconsistent' },
          { text: 'An innate sense of curiosity.', nextNodeId: 'q2-curious' },
        ],
      },
      {
        id: 'q2-pain',
        text: 'Indeed. The truth can be painful. After their eyes adjust, they see the real world—trees, the sun, real objects. They realize the shadows were just faint copies. If this person returned to the cave to tell the others, what would happen?',
        choices: [
          { text: 'They would be celebrated as a hero.', nextNodeId: 'end-hero' },
          { text: 'They would be mocked or even killed.', nextNodeId: 'end-mocked' },
        ],
      },
      {
        id: 'q2-beauty',
        text: 'A beautiful thought, but would it not first be overwhelming? The truth can be painful. After their eyes adjust, they see the real world. If this person returned to the cave to tell the others, what would happen?',
        choices: [
          { text: 'They would be celebrated as a hero.', nextNodeId: 'end-hero' },
          { text: 'They would be mocked or even killed.', nextNodeId: 'end-mocked' },
        ],
      },
      {
        id: 'q2-inconsistent',
        text: 'A keen observation. The path to philosophy often begins with noticing such inconsistencies. If this person was then freed and saw the real world, and returned to tell the others, how would they be received?',
        choices: [
          { text: 'They would be celebrated as a hero.', nextNodeId: 'end-hero' },
          { text: 'They would be mocked or even killed.', nextNodeId: 'end-mocked' },
        ],
      },
      {
        id: 'q2-curious',
        text: 'Ah, the innate human spirit of inquiry! A noble thought. If this person was then freed and saw the real world, and returned to tell the others, how would they be received?',
        choices: [
          { text: 'They would be celebrated as a hero.', nextNodeId: 'end-hero' },
          { text: 'They would be mocked or even killed.', nextNodeId: 'end-mocked' },
        ],
      },
      {
        id: 'end-hero',
        text: 'One would hope so, but Plato was less optimistic. The prisoners might think the outside world had ruined their friend. They might prefer the comfort of their familiar illusions. Plato suggests this is the plight of the philosopher. This concludes our dialogue.',
      },
      {
        id: 'end-mocked',
        text: "You see the dilemma. The prisoners would think the outside world had ruined him. They would prefer the comfort of their familiar illusions. Plato suggests this is the plight of the philosopher—one who has seen the 'truth' but is rejected by those who have not. This concludes our dialogue.",
      },
    ],
  },
  {
    id: 'categorical-imperative',
    title: 'The Universal Law',
    tagline: 'Discover the foundation of duty with Immanuel Kant.',
    philosopher: 'Immanuel Kant',
    nodes: [
      {
        id: 'start',
        text: 'A moral action is not judged by its consequences, but by the motive behind it. The only truly good motive is a sense of duty. Would you agree that consequences are a poor measure of morality?',
        choices: [
          { text: 'Yes, good intentions matter most.', nextNodeId: 'q1-yes' },
          { text: 'No, the outcome is what truly matters.', nextNodeId: 'q1-no' },
        ],
      },
      {
        id: 'q1-yes',
        text: "Good. Now, how do we determine our duty? I propose a test: 'Act only according to that maxim whereby you can at the same time will that it should become a universal law.' Consider making a promise you intend to break. Could you will that 'everyone should make false promises' be a universal law?",
        choices: [
          { text: 'No, if everyone did that, promises would be meaningless.', nextNodeId: 'q2-yes-perfect' },
          { text: 'Yes, if it achieves a greater good.', nextNodeId: 'q2-no-utilitarian' },
        ],
      },
      {
        id: 'q1-no',
        text: 'But consequences are unpredictable. A good action can have a bad result by chance. Should morality depend on luck? Or should it be grounded in something we can control, like our rational will?',
        choices: [
          { text: 'It should be grounded in our will.', nextNodeId: 'q1-yes' },
          { text: 'We must still be responsible for the results.', nextNodeId: 'q2-no-utilitarian' },
        ],
      },
      {
        id: 'q2-yes-perfect',
        text: 'Exactly. The maxim fails the test because it creates a contradiction. A world where false promises are universal is a world where promises cannot exist. Therefore, we have a perfect duty not to make false promises. This is how reason determines morality. Does this seem logical?',
        choices: [
          { text: 'Yes, it is a clear and rational test.', nextNodeId: 'end-rational' },
          { text: 'It seems too rigid for the real world.', nextNodeId: 'end-rigid' },
        ],
      },
      {
        id: 'q2-no-utilitarian',
        text: 'You are thinking of consequences again. The "greater good" is irrelevant to the morality of the act itself. The act is making a false promise. The question is whether the act itself, if universalized, is logically coherent. Its consequences do not factor into this rational test.',
        choices: [
          { text: 'I see. The focus is on the principle, not the outcome.', nextNodeId: 'q2-yes-perfect' },
          { text: "But isn't that ignoring human suffering?", nextNodeId: 'end-rigid' },
        ],
      },
      {
        id: 'end-rational',
        text: 'Indeed. For Kant, morality is not a matter of feeling or outcome, but of rational consistency. By applying the Categorical Imperative, we can derive our moral duties from reason itself. This concludes our dialogue.',
      },
      {
        id: 'end-rigid',
        text: 'Some find it so. They argue it lacks flexibility for complex situations. But for Kant, this rigidity is its strength. Moral laws, like the laws of physics, must be universal and without exception to be valid. This concludes our dialogue.',
      },
    ],
  },
];

export function getDialogue(id) {
  return dialogues.find((item) => item.id === id) ?? null;
}
