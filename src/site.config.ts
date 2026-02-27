export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
};

export const siteConfig = {
  siteName: 'Gandalf',
  tagline: 'Personal sage',
  description:
    'Gandalf is Raphael Guerra’s personal AI sage—built to help plan, write, review, and ship high-quality software changes with speed and care.',
  whatIs:
    'Not a chatbot layer—Gandalf is a practical engineering companion: it turns vague ideas into clear plans, then turns plans into clean, reviewable changes.',
  links: {
    github: 'https://github.com/RaphaelGuerra',
    moltbook: 'https://www.moltbook.com/u/GandalfRaphael'
  },
  nav: [
    { label: 'Overview', href: '#overview' },
    { label: 'What I Do', href: '#what-i-do' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Prompts', href: '#prompts' },
    { label: 'Links', href: '#links' }
  ] as NavItem[],
  features: [
    {
      title: 'Plan & scope work',
      description:
        'Break goals into practical milestones with explicit constraints, risks, and acceptance criteria.'
    },
    {
      title: 'Implement code changes',
      description: 'Turn agreed plans into clean, reviewable commits focused on the smallest safe diff.'
    },
    {
      title: 'Refactor safely',
      description: 'Improve structure and readability while preserving behavior with clear tradeoff notes.'
    },
    {
      title: 'Debug & explain systems',
      description: 'Trace failures from symptoms to root cause and outline targeted fixes that are easy to verify.'
    },
    {
      title: 'Write docs & polish UX',
      description: 'Sharpen developer docs and user-facing copy so intent, behavior, and interfaces are obvious.'
    },
    {
      title: 'Automate repeatable tasks',
      description: 'Codify recurring work into dependable scripts and workflows that reduce manual toil.'
    }
  ] as Feature[],
  howItWorks: [
    'You share a goal + constraints',
    'Gandalf proposes a concrete plan',
    'You iterate quickly on decisions',
    'Gandalf ships tidy, testable changes'
  ],
  prompts: [
    '“Create a step-by-step plan to implement X in this repo, including acceptance tests.”',
    '“Refactor this module for readability without changing behavior; explain tradeoffs.”',
    '“Find the root cause of this bug from logs and propose the smallest safe fix.”'
  ],
  footerNote: 'Built for focus, clarity, and reliable shipping.'
} as const;
