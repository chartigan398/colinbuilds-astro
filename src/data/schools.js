/**
 * Schools of Thought taken from Philosophia Interactiva.
 * Short conversational lessons. No chat, badges, or XP.
 */
export const schoolCategories = [
  {
    name: 'Ancient / Classical Antiquity',
    schools: [
      {
        id: 'platonism',
        name: 'Platonism',
        era: 'c. 400 BCE',
        region: 'Greece',
        summary: "The real world is a shadow of perfect ideas, like a perfect circle.",
        lesson: [
          'Plato, a student of Socrates, believed our senses could deceive us.',
          "He argued that true reality exists not in physical objects, but in their perfect, eternal 'Forms'—like the idea of 'perfect justice' or a 'perfect circle'.",
          "We access these Forms through reason, not our senses. This is the journey out of the 'cave' of ignorance.",
        ],
      },
      {
        id: 'aristotelianism',
        name: 'Aristotelianism',
        era: 'c. 350 BCE',
        region: 'Greece',
        summary: "Watch the world. Use reason. Ask what a thing is for.",
        lesson: [
          "Aristotle, Plato's student, brought philosophy back to Earth.",
          'He believed knowledge comes from observing the world (empiricism) and using logic to understand it.',
          "He taught that everything has a 'telos'—an ultimate purpose. The telos of humans is to achieve 'eudaimonia' or flourishing through reason.",
        ],
      },
      {
        id: 'stoicism',
        name: 'Stoicism',
        era: 'c. 300 BCE - 180 CE',
        region: 'Greece & Rome',
        summary: 'Stay steady. You do not control what happens. You do control how you answer.',
        lesson: [
          "Stoicism's core idea is simple: we don't control what happens to us, but we always control how we respond.",
          'Stoics call this the "Dichotomy of Control." Focus only on what is up to you, and you\'ll find peace.',
          "The goal isn't to be emotionless, but to not be controlled by destructive emotions. That's the art of tranquility.",
        ],
      },
      {
        id: 'epicureanism',
        name: 'Epicureanism',
        era: 'c. 300 BCE',
        region: 'Greece',
        summary: 'A calm life. Simple pleasures. Less fear.',
        lesson: [
          'Often misunderstood as hedonism, Epicureanism is about attaining a peaceful life.',
          "Epicurus taught that we should minimize pain and maximize 'ataraxia'—a state of serene calmness.",
          'This is achieved through friendship, simple living, and avoiding things that cause anxiety, like politics or fear of death.',
        ],
      },
      {
        id: 'cynicism',
        name: 'Cynicism',
        era: 'c. 400 BCE',
        region: 'Greece',
        summary: 'A simple life. Drop the chase for money and fame.',
        lesson: [
          'The Cynics, like Diogenes, believed the purpose of life was to live in virtue, in agreement with nature.',
          'This meant rejecting social conventions they saw as artificial, like wealth or reputation.',
          'Diogenes famously lived in a barrel, arguing that a simple life free from possessions was the path to true freedom.',
        ],
      },
      {
        id: 'skepticism',
        name: 'Skepticism',
        era: 'c. 300 BCE',
        region: 'Greece',
        summary: 'We may never be sure. Hold back from claiming certainty.',
        lesson: [
          'Skepticism, founded by Pyrrho, questions whether we can ever know anything for sure.',
          "Since our senses can be fooled, Skeptics proposed 'epoché'—the suspension of judgment.",
          "By not committing to any belief as certain, they sought to achieve 'ataraxia' or peace of mind.",
        ],
      },
    ],
  },
  {
    name: 'Eastern Traditions',
    schools: [
      {
        id: 'confucianism',
        name: 'Confucianism',
        era: 'c. 500 BCE',
        region: 'China',
        summary: 'Live well with others. Care for family. Build character.',
        lesson: [
          'Confucianism is less a religion and more a guide to social and ethical conduct.',
          'It stresses the importance of relationships and the duties within them, such as those between parent and child, or ruler and subject.',
          "The goal is to cultivate 'Ren' (benevolence) and 'Li' (ritual propriety) to create a harmonious and well-ordered society.",
        ],
      },
      {
        id: 'daoism',
        name: 'Daoism (Taoism)',
        era: 'c. 400 BCE',
        region: 'China',
        summary: 'Follow the natural way. Do not force things.',
        lesson: [
          "Daoism advocates for 'wu wei'—effortless action, or going with the flow of the universe.",
          'The Tao Te Ching teaches that we should be like water: gentle and yielding, yet powerful enough to overcome all obstacles.',
          'It values simplicity, spontaneity, and a deep connection to the natural world over ambition and social convention.',
        ],
      },
      {
        id: 'buddhism',
        name: 'Buddhism',
        era: 'c. 500 BCE',
        region: 'India / East Asia',
        summary: 'Understand suffering. Practise a path out of it.',
        lesson: [
          'Founded by Siddhartha Gautama, Buddhism is centered on the Four Noble Truths.',
          'The first truth is that life is suffering. The second is that suffering is caused by craving and attachment.',
          'The third is that suffering can be ended. The fourth is the path to end it: the Noble Eightfold Path, a guide to ethical conduct, mental discipline, and wisdom.',
        ],
      },
      {
        id: 'legalism',
        name: 'Legalism',
        era: 'c. 300 BCE',
        region: 'China',
        summary: 'A strong state needs strict laws and hard punishments.',
        lesson: [
          "In stark contrast to Confucianism's focus on morality, Legalism was a pragmatic approach to statecraft.",
          'Legalists believed human nature was inherently selfish and that people only responded to rewards and punishments.',
          'They argued for a powerful, centralized authority that governed with clear, strict, and impersonal laws to maintain order.',
        ],
      },
    ],
  },
  {
    name: 'Medieval & Religious Philosophy',
    schools: [
      {
        id: 'scholasticism',
        name: 'Scholasticism',
        era: 'c. 1100 - 1700 CE',
        region: 'Europe',
        summary: 'Medieval schoolwork that tried to join Christian faith with older Greek thought.',
        lesson: [
          'Scholasticism was the primary method of thought in medieval universities.',
          'Its goal was to harmonize the teachings of Christianity with the logical rigor of ancient philosophers, especially Aristotle.',
          'Thinkers like Thomas Aquinas used dialectical reasoning to resolve contradictions and build a complete, systematic understanding of the world and God.',
        ],
      },
      {
        id: 'islamic-golden-age',
        name: 'Islamic Golden Age',
        era: 'c. 800 - 1200 CE',
        region: 'Middle East / N. Africa',
        summary: 'A long period of science and thought that kept Greek work alive and built on it.',
        lesson: [
          'While Europe was in the Dark Ages, the Islamic world was a hub of intellectual activity.',
          'Philosophers like Avicenna and Averroes translated and commented on the works of Plato and Aristotle, preserving them for history.',
          'They made huge advancements in medicine, mathematics, and philosophy, deeply influencing later European Scholasticism.',
        ],
      },
    ],
  },
  {
    name: 'Early Modern Philosophy',
    schools: [
      {
        id: 'rationalism',
        name: 'Rationalism',
        era: '17th Century',
        region: 'Europe',
        summary: 'Knowledge comes from thinking, not only from the senses.',
        lesson: [
          'Rationalists like René Descartes believed that pure reason was the ultimate path to truth.',
          "Descartes famously started from a point of radical doubt, concluding he could be certain of only one thing: 'I think, therefore I am' (Cogito, ergo sum).",
          'From this single, rational truth, he attempted to build a complete system of knowledge without relying on the untrustworthy senses.',
        ],
      },
      {
        id: 'empiricism',
        name: 'Empiricism',
        era: '17th-18th Century',
        region: 'Britain',
        summary: 'Knowledge comes from what we see, hear and test.',
        lesson: [
          'In opposition to Rationalism, Empiricists like John Locke argued that all knowledge is derived from experience.',
          "Locke proposed that the mind at birth is a 'tabula rasa' or a blank slate, with no innate ideas.",
          'Everything we know is built up from simple sensory inputs from the world around us.',
        ],
      },
      {
        id: 'idealism',
        name: 'Idealism',
        era: '18th-19th Century',
        region: 'Germany',
        summary: 'What we can know is in the mind, not only in objects.',
        lesson: [
          'Idealism posits that our reality is shaped by our minds.',
          'Immanuel Kant synthesized Rationalism and Empiricism, arguing that our mind actively structures our experience of the world.',
          "We can never know the 'thing-in-itself' (noumenon), only the world as it appears to us (phenomenon), shaped by the categories of our thought.",
        ],
      },
    ],
  },
  {
    name: '19th Century Philosophy',
    schools: [
      {
        id: 'utilitarianism',
        name: 'Utilitarianism',
        era: '19th Century',
        region: 'Britain',
        summary: 'The right act is the one that leads to the most happiness for the most people.',
        lesson: [
          'Utilitarianism is a form of consequentialism—the morality of an action is judged by its outcome.',
          "Founded by Jeremy Bentham, it proposes a 'hedonistic calculus' to determine which action will produce the most pleasure and least pain overall.",
          "John Stuart Mill later refined this, arguing for 'higher' (intellectual) and 'lower' (physical) pleasures.",
        ],
      },
      {
        id: 'marxism',
        name: 'Marxism',
        era: '19th Century',
        region: 'Germany / Britain',
        summary: 'History as a fight between classes. Change the system, not only the story.',
        lesson: [
          'Karl Marx argued that history is driven by the conflict between economic classes: the bourgeoisie (owners) and the proletariat (workers).',
          "He believed that capitalism was inherently exploitative and would inevitably lead to a worker's revolution.",
          'The final stage of history would be a classless, communist society where the means of production are owned by all.',
        ],
      },
      {
        id: 'existentialism',
        name: 'Existentialism',
        era: '19th - 20th Century',
        region: 'Europe',
        summary: 'You are free. You are responsible. Meaning is something you make.',
        lesson: [
          'Existentialism explores individual freedom and the search for meaning in a world without inherent purpose.',
          'Its slogan is "existence precedes essence." This means you are not born with a purpose; you must create your own.',
          'This creates both a terrifying freedom and a profound responsibility. You are defined entirely by your choices and actions.',
        ],
      },
    ],
  },
  {
    name: '20th Century & Contemporary',
    schools: [
      {
        id: 'analytic',
        name: 'Analytic Philosophy',
        era: 'Early 20th Century - Present',
        region: 'UK, USA',
        summary: 'Be clear. Watch how words work. That is how many puzzles get solved.',
        lesson: [
          'Analytic philosophy arose as a reaction against what its founders saw as vague and overly speculative philosophy.',
          'Its primary tool is logic. The goal is to solve problems by carefully analyzing the language we use to state them.',
          "If a statement can't be logically or empirically verified, analytic philosophers are often skeptical. Clarity is king.",
        ],
      },
      {
        id: 'phenomenology',
        name: 'Phenomenology',
        era: 'Early 20th Century',
        region: 'Germany / France',
        summary: 'Study experience from the inside: what it is like to see, feel and notice.',
        lesson: [
          "Phenomenology is a return 'to the things themselves'. It sets aside assumptions about the external world.",
          'Instead, it focuses on describing conscious experience exactly as it is, without scientific or metaphysical theories.',
          "Martin Heidegger used this method to study 'Dasein' or the experience of 'Being-in-the-world'.",
        ],
      },
      {
        id: 'post-structuralism',
        name: 'Post-Structuralism',
        era: 'Mid-20th Century',
        region: 'France',
        summary: 'Big systems and “one true meaning” do not hold still. Words shift.',
        lesson: [
          'Post-structuralism challenges the idea that language points to a stable reality.',
          "Thinkers like Michel Foucault argued that knowledge and power are intertwined; what we consider 'truth' is often a product of social and historical forces.",
          "It encourages 'deconstruction'—taking apart texts and ideas to reveal their hidden assumptions and biases.",
        ],
      },
      {
        id: 'feminist',
        name: 'Feminist Philosophy',
        era: '18th Century - Present',
        region: 'Global',
        summary: 'Ask who has power. Ask how gender and justice were written.',
        lesson: [
          "Feminist philosophy critiques traditional philosophy for its historical exclusion of women's voices.",
          'It explores how concepts like reason and justice have often been defined in implicitly masculine ways.',
          'A key idea from Simone de Beauvoir is that "One is not born, but rather becomes, a woman," meaning gender is a social construct.',
        ],
      },
      {
        id: 'critical-theory',
        name: 'Critical Theory',
        era: '20th Century',
        region: 'Germany / USA',
        summary: 'Do not only describe society. Try to change it.',
        lesson: [
          'Originating with the Frankfurt School, Critical Theory combines philosophy, social science, and psychoanalysis.',
          'It goes beyond just describing society to critique the underlying power structures and ideologies that cause oppression.',
          'Its goal is not neutral observation, but human emancipation from all forms of domination.',
        ],
      },
    ],
  },
  {
    name: 'Cross-cutting Themes',
    schools: [
      {
        id: 'humanism',
        name: 'Humanism',
        era: 'Renaissance - Present',
        region: 'Global',
        summary: 'People matter. Use reason and care to solve problems.',
        lesson: [
          'Humanism is a worldview that places central importance on human agency, reason, and flourishing.',
          'It proposes that we can live ethical and fulfilling lives without religious or supernatural beliefs.',
          'It champions science, critical thinking, and compassion as the primary tools for building a better world.',
        ],
      },
      {
        id: 'nihilism',
        name: 'Nihilism',
        era: '19th Century - Present',
        region: 'Europe',
        summary: 'No given meaning. No given moral law from outside us.',
        lesson: [
          'Nihilism is the belief that life lacks objective meaning, purpose, or intrinsic value.',
          "Friedrich Nietzsche famously declared 'God is dead,' arguing that the decline of religion would lead to a crisis of nihilism in the West.",
          "For Nietzsche, the challenge was not to despair, but to overcome nihilism by creating one's own values and becoming an 'Übermensch'.",
        ],
      },
      {
        id: 'absurdism',
        name: 'Absurdism',
        era: '20th Century',
        region: 'France',
        summary: 'We want meaning. The world does not hand it over. Live anyway.',
        lesson: [
          "Developed by Albert Camus, Absurdism identifies a fundamental conflict: our human need for meaning and the 'unreasonable silence' of the universe.",
          'Camus rejected both religious faith and nihilistic despair as evasions of this truth.',
          'Instead, he argued we must embrace the Absurd and rebel against it by living with passion, freedom, and a love for our fellow humans.',
        ],
      },
    ],
  },
];

export function allSchools() {
  return schoolCategories.flatMap((category) =>
    category.schools.map((school) => ({ ...school, category: category.name })),
  );
}

export function getSchool(id) {
  return allSchools().find((school) => school.id === id) ?? null;
}
