/** Subject tags from new, as empty rooms on old. */

export const topics = [
  {
    id: 'philosophy',
    label: 'Philosophy',
    href: '/philosophia/',
    ready: true,
    blurb: 'Short lessons on ways of thinking.',
  },
  {
    id: 'math',
    label: 'Math',
    href: '/topics/math/',
    ready: false,
    blurb: 'Lessons and games for math will go here.',
  },
  {
    id: 'physics',
    label: 'Physics',
    href: '/topics/physics/',
    ready: false,
    blurb: 'Lessons and games for physics will go here.',
  },
  {
    id: 'chemistry',
    label: 'Chemistry',
    href: '/topics/chemistry/',
    ready: false,
    blurb: 'Lessons and games for chemistry will go here.',
  },
  {
    id: 'biology',
    label: 'Biology',
    href: '/topics/biology/',
    ready: false,
    blurb: 'Lessons and games for biology will go here.',
  },
  {
    id: 'psychology',
    label: 'Psychology',
    href: '/topics/psychology/',
    ready: false,
    blurb: 'Lessons and games for psychology will go here.',
  },
  {
    id: 'social',
    label: 'Social science',
    href: '/topics/social/',
    ready: false,
    blurb: 'Lessons and games for social science will go here.',
  },
  {
    id: 'art',
    label: 'Art',
    href: '/topics/art/',
    ready: false,
    blurb: 'Lessons and games for art will go here.',
  },
  {
    id: 'civics',
    label: 'Civics',
    href: '/topics/civics/',
    ready: false,
    blurb: 'Lessons and games for civics will go here.',
  },
  {
    id: 'journalism',
    label: 'Journalism',
    href: '/topics/journalism/',
    ready: false,
    blurb: 'Lessons and games for journalism will go here.',
  },
  {
    id: 'economics',
    label: 'Economics',
    href: '/topics/economics/',
    ready: false,
    blurb: 'Lessons and games for economics will go here.',
  },
  {
    id: 'programming',
    label: 'Programming',
    href: '/topics/programming/',
    ready: false,
    blurb: 'Lessons and games for programming will go here.',
  },
  {
    id: 'earth',
    label: 'Earth science',
    href: '/topics/earth/',
    ready: false,
    blurb: 'Lessons and games for earth science will go here.',
  },
];

export function getTopic(id) {
  return topics.find((topic) => topic.id === id);
}

export const topicPages = topics.filter((topic) => topic.href.startsWith('/topics/'));
