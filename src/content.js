// All site copy lives here.
// House style: no em or en dashes anywhere. Use hyphens, commas, or "to".

export const PROFILE = {
  name: 'Rachel Chertok',
  blurb:
    'I study computer science and business at Northeastern and work on data-heavy products, ' +
    'which usually means I am the one pulling the numbers.',
  availability: 'Open to full-time PM roles, June 2027',
  openTo: 'Boston, New York, Chicago, Texas, California, or remote',
}

export const HEADLINE = {
  value: '$300K',
  label: 'Biggest win',
  note:
    'A flavor at Bevi was underperforming because of its name rather than its formula. ' +
    'I found it in the usage data and coordinated a rename across software, marketing and sales, ' +
    'which took no engineering work and which finance projected at $300K in new revenue.',
}

export const METRICS = [
  { value: '2M+',  label: 'At Bevi',       note: 'machine usage events analyzed in Snowflake and Looker', tone: 'blue' },
  { value: '+30%', label: 'At Bevi',       note: 'lift in concentrate consumption across partner accounts', tone: 'green' },
  { value: '95+',  label: 'At Oasis NEU',  note: 'React projects shipped by the club I ran' },
  { value: '60%',  label: 'Sales Mailer',  note: 'less time spent drafting emails, per rep' },
]

export const WORK = [
  {
    org: 'Red Hat',
    role: 'Product Management Intern',
    when: 'May to Aug 2026',
    place: 'RHEL Cloud Business Unit, Boston',
    bullets: [
      'Analyzed RHEL deployment performance across AWS, GCP, OCI, and Azure to inform roadmap decisions.',
      'Built a real-time executive dashboard consolidating revenue, pipeline, and competitive data, cutting the time to get current numbers from weeks to seconds.',
    ],
    stat: {
      value: 'Weeks to seconds',
      note: 'Pulling current revenue, pipeline and competitive numbers used to take weeks of manual work.',
    },
    tags: ['Python', 'Jira API', 'A/B Testing'],
  },
  {
    org: 'Bevi',
    role: 'Product Management Co-op',
    when: 'Jul to Dec 2025',
    place: 'Software and beverage product, Boston',
    bullets: [
      'Tracked unit and flavor performance with SQL segmentation in Snowflake and Looker.',
      'Ran standups and sprint planning for a zero-cost rebrand that drove a $300K revenue increase.',
      'Built an AI sales assistant on the OpenAI API recommending machines by office profile.',
    ],
    tags: ['SQL', 'Snowflake', 'Looker', 'OpenAI API'],
  },
]

export const PROJECTS = [
  {
    title: 'RHEL cloud executive dashboard',
    org: 'Red Hat, 2026',
    summary: 'The business unit can see its current revenue, pipeline and competitive data in one place instead of waiting on a manual pull.',
    problem: 'Decisions needed numbers that lived in separate places and got pulled by hand.',
    solution: 'Built a real-time dashboard in Python on the Google Sheets and Jira APIs, with A/B tested layouts.',
    impact: 'The team reviews current numbers in its regular meetings instead of assembling them.',
    tags: ['Python', 'Google Sheets API', 'Jira API'],
  },
  {
    title: 'Sales Mailer',
    org: 'Personal project, 2025',
    summary: 'Sales reps can send templated pricing emails and see at a glance who has already been contacted.',
    problem: 'Reps drafted pricing emails by hand and tracked sends manually, so follow-ups slipped.',
    solution: 'Built a React app on the Gmail API with templates and send history as a first-class feature.',
    impact: 'Cut drafting time roughly 60% per rep and removed duplicate outreach.',
    tags: ['React', 'Gmail API'],
    links: [
      { label: 'Live app', href: 'https://sales-mailer-mu.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/chertokr/sales-mailer' },
    ],
  },
  {
    title: 'Flavor swaps and voting',
    org: 'Bevi, 2025',
    summary: 'I built a model that recommends which beverage SKUs to swap out, and piloted it across 110 partner sites.',
    problem: 'Low-performing SKUs held machine slots and held down concentrate consumption.',
    solution: 'Built a Python model on Snowflake data to flag low performers and recommend swaps, piloted with a voting program.',
    impact: 'Boosted concentrate consumption 30% across strategic accounts.',
    tags: ['Python', 'Snowflake', 'Looker'],
  },
]

export const EDUCATION = {
  school: 'Northeastern University',
  degree: 'B.S. Computer Science and Business Administration',
  concentration: 'Concentration in Fintech',
  when: 'Graduating May 2027',
  honors: 'Dean’s List, Spring 2026',
}

export const COURSEWORK = [
  {
    area: 'Now, fall 2026',
    now: true,
    courses: ['CS 3200 Databases', 'FINA 4350 Applied Financial Econometrics', 'ORGB 3201 Organizational Behavior'],
  },
  {
    area: 'Computer science and data',
    courses: ['CS 3500 Object-Oriented Design', 'CS 3650 Computer Systems', 'CS 3000 Algorithms and Data', 'DS 3000 Foundations of Data Science', 'DS 2000 Programming with Data'],
  },
  {
    area: 'Business and finance',
    courses: ['FINA 3301 Corporate Finance', 'FINA 2201 Financial Management', 'ACCT 1201 Financial Accounting', 'MGSC 2301 Business Statistics', 'MKTG 2201 Marketing'],
  },
]

export const RESEARCH = {
  title: 'Markov chain research',
  when: 'Jun to Dec 2025',
  detail: 'Modeled memory-aware Markov Chains in Python with networkx and numpy, for predictive finance applications.',
  tags: ['Python', 'Research'],
}

export const ORGS = [
  {
    org: 'Oasis NEU',
    role: 'Executive Board President',
    when: '2024 to 2026',
    detail: 'Ran a 150+ member web development club: recruitment, workshops, events, and reviews for 95+ React projects built for real clients.',
  },
  {
    org: 'Chi Omega',
    role: 'Member',
    when: '2023 to now',
    detail: 'I have been an active member since my first year, mostly through philanthropy events and chapter programming.',
  },
]

export const SKILLS = [
  { area: 'Languages', items: ['Python', 'SQL', 'Java', 'R'] },
  { area: 'Data', items: ['Snowflake', 'Looker', 'Hex', 'numpy'] },
  { area: 'Tools', items: ['React', 'Git', 'Jira', 'OpenAI API', 'Claude Code'] },
  { area: 'Product', items: ['User Research', 'A/B Testing', 'Roadmapping', 'Sprint Planning', 'Financial Modeling'] },
]

export const INTERESTS = ['Skiing', 'Baking', 'Star Wars', 'Lord of the Rings']

// spoken languages, not the programming kind in SKILLS
export const LANGUAGES = ['Russian', 'Italian']
