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
        summary: "Belief in a higher realm of perfect 'Forms', of which the physical world is merely a shadow.",
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
        summary: "Focuses on logic, empirical observation, and understanding the 'telos' or purpose of things.",
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
        summary: 'An ancient guide to resilience, focusing on virtue, self-control, and the dichotomy of control.',
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
        summary: 'Advocates for seeking modest, sustainable pleasure in the form of tranquility and freedom from fear.',
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
        summary: 'A rejection of conventional desires for wealth or fame, advocating a simple life in accordance with nature.',
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
        summary: 'Questions the possibility of certainty in knowledge, advocating for suspension of judgment.',
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
        summary: 'An ethical and philosophical system emphasizing social harmony, filial piety, and moral character.',
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
        summary: 'Focuses on living in harmony with the Tao, the natural, ordering principle of the universe.',
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
        summary: 'A path of spiritual development to achieve enlightenment by understanding the nature of suffering.',
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
        summary: 'A political philosophy arguing that a strong state is achieved through strict laws and harsh punishments.',
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
        summary: 'The dominant medieval method of learning, which aimed to reconcile Christian theology with classical philosophy.',
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
        summary: 'A period of intense philosophical and scientific advancement, preserving and building upon Greek thought.',
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
        summary: 'Asserts that reason is the chief source and test of knowledge, rather than sensory experience.',
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
        summary: 'Contends that knowledge comes only or primarily from sensory experience and evidence.',
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
        summary: 'Maintains that reality as we can know it is fundamentally mental or otherwise immaterial.',
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
        summary: 'An ethical theory that states the best action is the one that maximizes utility, or the greatest happiness for the greatest number.',
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
        summary: 'A political and economic theory that analyzes history through the lens of class struggle.',
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
        summary: 'Emphasizes individual freedom, responsibility, and the search for meaning in a meaningless world.',
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
        summary: 'Emphasizes clarity and logical rigor, often through the analysis of language to solve philosophical problems.',
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
        summary: 'The study of structures of consciousness as experienced from the first-person point of view.',
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
        summary: 'Critiques the idea of objective structures and universal truths, emphasizing the instability of meaning.',
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
        summary: 'Examines concepts of gender, power, and justice through a critical lens, often challenging traditional philosophy.',
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
        summary: 'A social philosophy that critiques and seeks to change society, not just understand it.',
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
        summary: 'Emphasizes the value of human beings and relies on reason and ethics to solve problems.',
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
        summary: 'The rejection of all religious and moral principles, often in the belief that life is meaningless.',
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
        summary: 'The belief that a search for meaning is inherently in conflict with the actual lack of meaning, but that one should embrace this conflict.',
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
