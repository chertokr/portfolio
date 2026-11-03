// All site copy lives here so sections stay presentational.
// House style: no em or en dashes anywhere. Use hyphens, commas, or "to".
// Keep it short. Every line here competes for attention with the work itself.

export const PROFILE = {
  name: 'Rachel Chertok',
  title: 'Product management, data, and fintech',
  availability: 'Graduating May 2027, seeking full-time PM roles',
  location: 'Boston, MA',
  openTo: 'Open to Boston, New York, Chicago, Texas, California, and remote',
  lead: 'I am a CS and business student at Northeastern who works on data-heavy products.',
}

export const INTRO =
  'I spent this past summer as a product management intern at Red Hat, and the semester before that as a co-op at Bevi, mostly on questions that needed someone to go pull the numbers. I write the SQL and Python to do that part myself.'

export const HOW_I_WORK = [
  { label: 'Problems', value: 'I spend more time defining the problem than picking the solution.' },
  { label: 'People', value: 'I start with whoever is closest to the work: reps, engineers, operators.' },
  { label: 'Data', value: 'I pull the numbers myself, then check them against what the team already knows.' },
]

export const INTERESTS = ['Skiing', 'Baking', 'Russian', 'Italian', 'Star Wars', 'Lord of the Rings']

export const EXPERIENCE = [
  {
    when: 'May 2026 to Aug 2026',
    title: 'Product Management Intern',
    org: 'Red Hat',
    note: 'Boston, MA',
    bullets: [
      'Analyzed RHEL deployment performance across AWS, GCP, OCI, and Azure to inform roadmap decisions.',
      'Built a real-time executive dashboard consolidating revenue, pipeline, and competitive data for the RHEL Cloud Business Unit.',
    ],
    tags: ['Python', 'Jira API', 'A/B Testing', 'Cloud'],
  },
  {
    when: 'Jul 2025 to Dec 2025',
    title: 'Product Management Co-op',
    org: 'Bevi',
    note: 'Boston, MA',
    bullets: [
      'Tracked unit and flavor performance across 2M+ machine usage events in Snowflake and Looker.',
      'Coordinated a zero-cost rebrand (Key Lime to Lime) that drove a $300K revenue increase.',
      'Built an AI sales assistant on the OpenAI API recommending machines and flavors by office profile.',
    ],
    tags: ['SQL', 'Snowflake', 'Looker', 'OpenAI API'],
  },
]

export const EDUCATION = {
  school: 'Northeastern University',
  degree: 'B.S. in Computer Science and Business Administration',
  concentration: 'Concentration in Fintech',
  when: 'Expected May 2027',
  location: 'Boston, MA',
}

export const EDUCATION_HONORS = ["Dean's List, Spring 2026"]

// Selected coursework only. Intro sequences, labs, and electives are left out
// on purpose: the full transcript is a document, not a web page.
export const COURSEWORK = [
  {
    area: 'Computer Science and Data',
    courses: [
      { code: 'CS 3500', title: 'Object-Oriented Design' },
      { code: 'CS 3650', title: 'Computer Systems' },
      { code: 'CS 3000', title: 'Algorithms and Data' },
      { code: 'DS 3000', title: 'Foundations of Data Science' },
      { code: 'DS 2000', title: 'Programming with Data' },
    ],
  },
  {
    area: 'Business and Finance',
    courses: [
      { code: 'FINA 3301', title: 'Corporate Finance' },
      { code: 'FINA 2201', title: 'Financial Management' },
      { code: 'ACCT 1201', title: 'Financial Accounting' },
      { code: 'MGSC 2301', title: 'Business Statistics' },
      { code: 'MKTG 2201', title: 'Marketing' },
    ],
  },
  {
    area: 'In Progress, Fall 2026',
    current: true,
    courses: [
      { code: 'CS 3200',   title: 'Introduction to Databases' },
      { code: 'FINA 4350', title: 'Applied Financial Econometrics' },
      { code: 'ORGB 3201', title: 'Organizational Behavior' },
    ],
  },
]

export const RESEARCH = {
  when: 'Jun 2025 to Dec 2025',
  title: 'Markov Chain Research for Predictive Models',
  org: 'Northeastern University',
  bullets: [
    'Modeled memory-aware Markov Chains in Python (networkx, numpy) for predictive finance applications.',
  ],
  tags: ['Python', 'Research'],
}

export const ORGS = [
  {
    when: 'Jan 2024 to May 2026',
    title: 'Executive Board President',
    org: 'Oasis NEU',
    note: 'Web development club',
    bullets: [
      'Led 95+ React projects and the workshops and events around them, across a 150+ member club.',
    ],
    tags: ['React', 'Leadership'],
  },
  {
    when: 'Sep 2023 to Present',
    title: 'Member',
    org: 'Chi Omega',
  },
]

export const PROJECTS = [
  {
    title: 'RHEL Cloud Executive Dashboard',
    when: 'May 2026 to Aug 2026',
    stack: 'Red Hat / Python, Jira API',
    summary: 'A live view of revenue, pipeline, and competitive data for a cloud business unit.',
    problem: 'Decisions needed numbers that lived in separate places and had to be pulled by hand.',
    solution: 'Built a real-time dashboard in Python on the Google Sheets and Jira APIs, with A/B tested layouts.',
    impact: 'The team now reviews current numbers in its regular meetings instead of assembling them.',
    tags: ['Python', 'Jira API', 'A/B Testing'],
  },
  {
    title: 'Sales Mailer',
    when: 'Aug 2025 to May 2026',
    stack: 'Personal project / React, Gmail API',
    href: 'https://github.com/chertokr/sales-mailer',
    summary: 'Templated pricing emails and send history tracking for sales reps.',
    problem: 'Reps drafted pricing emails by hand and tracked sends manually, so follow-ups slipped.',
    solution: 'Built a React app on the Gmail API with templates and send history as a first-class feature.',
    impact: 'Cut drafting time roughly 60% per rep and removed duplicate outreach.',
    tags: ['React', 'Gmail API'],
  },
  {
    title: 'Flavor Swaps and Voting',
    when: 'Jul 2025 to Sep 2025',
    stack: 'Bevi / Python, Snowflake, Looker',
    summary: 'A SKU optimization model, piloted across 110 partner sites.',
    problem: 'Low-performing SKUs held machine slots and held down concentrate consumption.',
    solution: 'Built a Python model on Snowflake data to flag low performers and recommend swaps, piloted with a voting program.',
    impact: 'Boosted concentrate consumption 30% across strategic accounts.',
    tags: ['Python', 'Snowflake', 'Looker'],
  },
]

export const SKILLS = [
  {
    group: 'Technical',
    rows: [
      { area: 'Languages', items: ['Python', 'SQL', 'Java', 'R'] },
      { area: 'Data',      items: ['Snowflake', 'Looker', 'Hex', 'numpy'] },
      { area: 'Tools',     items: ['OpenAI API', 'Claude Code', 'Git', 'Jira'] },
    ],
  },
  {
    group: 'Product',
    rows: [
      { area: 'Discovery', items: ['User Research', 'Competitive Analysis'] },
      { area: 'Delivery',  items: ['Agile', 'Sprint Planning', 'Roadmapping'] },
      { area: 'Analysis',  items: ['A/B Testing', 'SQL Segmentation', 'Dashboarding', 'Financial Modeling'] },
    ],
  },
]
