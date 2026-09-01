// All site copy lives here so sections stay presentational.
// House style: no em or en dashes anywhere. Use hyphens, commas, or "to".

export const PROFILE = {
  name: 'Rachel Chertok',
  title: 'Product management, data, and fintech',
  availability: 'Graduating May 2027, seeking full-time PM roles',
  location: 'Boston, MA',
  openTo: 'Open to Boston, New York, Chicago, Texas, California, and remote',
  lead:
    'Combining technical expertise with product management experience, specializing in ' +
    'data-driven solutions and AI-powered tools for business optimization.',
  facts: [
    'Northeastern University, B.S. Computer Science and Business Administration',
    'Previously product management at Red Hat and Bevi',
  ],
}

export const HOW_I_WORK = [
  { label: 'With problems', value: 'I obsess over the problem. I would rather sit in it a while longer than ship a tidy solution to the wrong thing.' },
  { label: 'With people', value: 'The best ideas usually come from whoever sits closest to the problem, so that is where I start.' },
  { label: 'With teams', value: 'I run the standups and share updates early. I would rather ask one more question than assume.' },
  { label: 'With feedback', value: 'Feedback makes the work better, so I ask for it early and I am glad to change my mind.' },
  { label: 'With data', value: 'I bring numbers to a conversation, not to end it. The team knows things the dashboard does not.' },
]

export const INTRO = [
  "I am a CS and business student who ended up in product because I like being the person who asks what the data actually says. Most of the work I am proudest of started as a query nobody had run yet.",
  "This summer that looked like cloud performance analysis and an executive dashboard at Red Hat. Before that it looked like 2 million machine usage events at Bevi, and a rebrand that cost nothing and made $300K.",
  "I graduate in May 2027 and I am looking for full-time product management roles starting after that, ideally at a tech or fintech company where the roadmap is argued with data. I am in Boston now and happy to move for the right team, whether that is New York, Chicago, Texas, California, or fully remote. If that sounds like you, I would love to talk.",
]

export const CURRENTLY = [
  { label: 'Studying', value: 'databases, financial econometrics, and organizational behavior' },
  { label: 'Just wrapped', value: 'a product management internship on Red Hat\'s RHEL Cloud Business Unit' },
  { label: 'Seeking', value: 'full-time PM roles starting June 2027 in tech or fintech, anywhere in the US or remote' },
  { label: 'Using', value: 'Python, SQL, Snowflake, and more Claude Code than is probably normal' },
]

export const INTERESTS = ['Skiing', 'Baking', 'Russian', 'Italian', 'Star Wars', 'Lord of the Rings']

export const EXPERIENCE = [
  {
    when: 'May 2026 to Aug 2026',
    title: 'Product Management Intern',
    org: 'Red Hat',
    note: 'Boston, MA',
    bullets: [
      'Analyzed RHEL deployment performance across AWS, GCP, OCI, and Azure to inform product strategy and roadmap decisions.',
      'Built a real-time executive dashboard (Python, Google Sheets API, Jira API), using A/B testing to refine layout and data views, consolidating revenue, pipeline, and competitive data for the RHEL Cloud Business Unit.',
    ],
    tags: ['Python', 'Google Sheets API', 'Jira API', 'A/B Testing', 'Cloud'],
  },
  {
    when: 'Jul 2025 to Dec 2025',
    title: 'Software / Beverage Product Management Co-op',
    org: 'Bevi',
    note: 'Boston, MA',
    bullets: [
      'Tracked unit performance and flavor trends across 2M+ machine usage events using SQL segmentation in Snowflake and Looker dashboards.',
      'Ran agile standups and sprint planning to coordinate a zero-cost rebrand (Key Lime to Lime), driving a $300K revenue increase.',
      'Built an AI-powered sales assistant (OpenAI GPT API) to generate machine and flavor recommendations by office size, layout, and industry.',
    ],
    tags: ['SQL', 'Snowflake', 'Looker', 'OpenAI GPT API', 'Agile'],
  },
]

export const EDUCATION = {
  school: 'Northeastern University',
  degree: 'B.S. in Computer Science and Business Administration',
  concentration: 'Concentration in Fintech',
  when: 'Expected May 2027',
  location: 'Boston, MA',
  openTo: 'Open to Boston, New York, Chicago, Texas, California, and remote',
}

export const EDUCATION_HONORS = ["Dean's List, Spring 2026"]

// Course codes and titles from the transcript. Non relevant courses
// (seminars, labs, general electives) are intentionally left out.
export const COURSEWORK = [
  {
    area: 'Computer Science',
    courses: [
      { code: 'CS 3500', title: 'Object-Oriented Design' },
      { code: 'CS 3650', title: 'Computer Systems' },
      { code: 'CS 3000', title: 'Algorithms and Data' },
      { code: 'CS 1800', title: 'Discrete Structures' },
      { code: 'CS 2500', title: 'Fundamentals of Computer Science 1' },
      { code: 'CS 2510', title: 'Fundamentals of Computer Science 2' },
    ],
  },
  {
    area: 'Data and Quantitative',
    courses: [
      { code: 'DS 3000',   title: 'Foundations of Data Science' },
      { code: 'DS 2000',   title: 'Programming with Data' },
      { code: 'DS 2001',   title: 'Data Science Programming Practicum' },
      { code: 'MGSC 2301', title: 'Business Statistics' },
      { code: 'MATH 1341', title: 'Calculus 1' },
    ],
  },
  {
    area: 'Business and Finance',
    courses: [
      { code: 'FINA 3301', title: 'Corporate Finance' },
      { code: 'FINA 2201', title: 'Financial Management' },
      { code: 'ACCT 1201', title: 'Financial Accounting and Reporting' },
      { code: 'ACCT 2301', title: 'Profit Analysis for Managerial Advisement' },
      { code: 'MISM 2301', title: 'Information Systems and Digital Technologies' },
      { code: 'MKTG 2201', title: 'Introduction to Marketing' },
      { code: 'ECON 1116', title: 'Principles of Microeconomics' },
      { code: 'ECON 1115', title: 'Principles of Macroeconomics' },
    ],
  },
  {
    area: 'In Progress, Fall 2026',
    current: true,
    courses: [
      { code: 'CS 3200',   title: 'Introduction to Databases' },
      { code: 'FINA 4350', title: 'Applied Financial Econometrics and Data Modeling' },
      { code: 'ORGB 3201', title: 'Organizational Behavior' },
      { code: 'ENGW 3302', title: 'Advanced Writing in the Technical Professions' },
    ],
  },
]

export const RESEARCH = {
  when: 'Jun 2025 to Dec 2025',
  title: 'Markov Chain Research for Predictive Models',
  org: 'Northeastern University',
  note: 'Boston, MA',
  bullets: [
    'Used Claude AI prompt engineering and Python (networkx, numpy) to model memory-aware Markov Chains.',
  ],
  tags: ['Python', 'networkx', 'numpy', 'Prompt Engineering'],
}

export const ORGS = [
  {
    when: 'Jan 2024 to May 2026',
    title: 'Executive Board President',
    org: 'Oasis NEU',
    note: 'Student led web development club',
    bullets: [
      'Led 95+ React projects and organized events that grew member engagement and technical skills across a 150+ member club.',
    ],
    tags: ['React', 'Leadership', 'Mentorship'],
  },
  {
    when: 'Sep 2023 to Present',
    title: 'Member',
    org: 'Chi Omega',
    bullets: ['Active member, involved in philanthropy and chapter programming.'],
  },
]

export const PROJECTS = [
  {
    title: 'RHEL Cloud Executive Dashboard',
    when: 'May 2026 to Aug 2026',
    stack: 'Red Hat / Python, Google Sheets API, Jira API',
    problem:
      'The RHEL Cloud POD could not make informed product decisions without data, since revenue, pipeline, and competitive numbers lived in separate places and had to be pulled by hand.',
    insight:
      'Putting that data in front of product managers in one live view lets them act proactively instead of reactively, and it makes the tradeoffs visible before a decision gets made rather than after.',
    solution:
      'Built a real-time executive dashboard in Python against the Google Sheets and Jira APIs, consolidating revenue, pipeline, and competitive data for the RHEL Cloud Business Unit, and used A/B testing on layout and data views to land on the version leaders actually read.',
    impact:
      'Replaced manual reporting pulls with a single view that refreshes on its own, so the POD reviews current numbers in its regular meetings and spends that time on decisions instead of assembling data.',
    tags: ['Python', 'Google Sheets API', 'Jira API', 'A/B Testing', 'Data Visualization'],
  },
  {
    title: 'Sales Mailer',
    when: 'Aug 2025 to May 2026',
    stack: 'Personal project / React, Gmail API',
    href: 'https://github.com/chertokr/sales-mailer',
    problem:
      'Sales reps drafted personalized pricing emails by hand and tracked sends manually, so follow-ups were inconsistent and duplicate outreach was easy.',
    insight:
      'Templating the email and recording send history would remove the repetitive drafting work and give reps the context they needed to decide who to follow up with.',
    solution:
      'Built a React and Gmail API sales mailer that automated email templates, and designed send history tracking as a first-class feature to prevent duplicate outreach.',
    impact:
      'Cut drafting time roughly 60% for reps and improved consistency across 100% of outbound communications.',
    tags: ['React', 'Gmail API', 'Automation'],
  },
  {
    title: 'Flavor Swaps and Voting',
    when: 'Jul 2025 to Sep 2025',
    stack: 'Bevi / Python, Snowflake, Looker',
    problem:
      'Low-performing SKUs occupied machine slots across partner sites, holding down concentrate consumption.',
    insight:
      'Usage data showed clear per-SKU and per-site underperformance, so swapping in high-usage replacements could lift consumption at almost no operational cost.',
    solution:
      'Built an AI-powered SKU optimization algorithm (Python, Snowflake, Looker) to flag low-performing SKUs and recommend replacements, then piloted it across 110 partner sites alongside a flavor voting program.',
    impact:
      'Boosted concentrate consumption 30%, and the pilot collected quantitative and qualitative feedback that validated the algorithm.',
    tags: ['Python', 'Snowflake', 'Looker', 'Pilot Program'],
  },
]

export const SKILLS = [
  {
    group: 'Technical',
    rows: [
      { area: 'Languages', items: ['Python', 'Java', 'SQL', 'C++', 'R', 'HTML/CSS'] },
      { area: 'Data',      items: ['Snowflake', 'Looker', 'Hex', 'MySQL', 'numpy', 'networkx'] },
      { area: 'AI',        items: ['OpenAI GPT API', 'Claude Code', 'Copilot', 'Cursor', 'Prompt Engineering'] },
      { area: 'Tools',     items: ['Git/GitHub', 'VS Code', 'Jira', 'Trello', 'Slack', 'Google Suite'] },
    ],
  },
  {
    group: 'Product',
    rows: [
      { area: 'Discovery', items: ['User Research', 'Customer Interviews', 'Competitive Analysis', 'Pilot Programs'] },
      { area: 'Delivery',  items: ['Agile Standups', 'Sprint Planning', 'Roadmapping', 'Cross-functional Coordination'] },
      { area: 'Analysis',  items: ['A/B Testing', 'SQL Segmentation', 'Dashboarding', 'Financial Modeling', 'Decision Frameworks'] },
      { area: 'Strategy',  items: ['SKU and Portfolio Strategy', 'Go-to-Market', 'Stakeholder Communication'] },
    ],
  },
]
