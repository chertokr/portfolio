// All site copy lives here.
// House style: no em or en dashes anywhere. Use hyphens, commas, or "to".

export const PROFILE = {
  name: 'Rachel Chertok',
  role: 'Product management, data, fintech',
  blurb:
    'I am a CS and business student at Northeastern who works on data-heavy products. ' +
    'Four years, two co-ops, and a lot of queries nobody had run yet.',
  availability: 'Graduating May 2027, open to full-time PM roles',
  openTo: 'Boston, New York, Chicago, Texas, California, or remote',
}

export const FILTERS = [
  { id: 'all',     label: 'Everything' },
  { id: 'work',    label: 'Work' },
  { id: 'project', label: 'Projects' },
  { id: 'school',  label: 'School' },
  { id: 'org',     label: 'Orgs' },
]

// The spine. Oldest first: the page walks forward through the years.
export const TIMELINE = [
  {
    id: 'neu',
    year: '2023',
    when: 'September 2023',
    type: 'school',
    title: 'Started at Northeastern',
    org: 'Khoury College and D’Amore-McKim',
    detail: 'B.S. in Computer Science and Business Administration, concentration in Fintech.',
    tags: ['Boston'],
  },
  {
    id: 'chiomega',
    year: '2023',
    when: 'September 2023',
    type: 'org',
    title: 'Joined Chi Omega',
    detail: 'Philanthropy and chapter programming, still a member.',
  },
  {
    id: 'oasis',
    year: '2024',
    when: 'January 2024 to May 2026',
    type: 'org',
    title: 'Elected president of Oasis NEU',
    org: 'Student led web development club',
    detail:
      'Ran a 150+ member club: recruitment, workshops, events, and reviews for 95+ React projects built for real clients.',
    metric: { value: '95+', label: 'React projects led' },
    tags: ['React', 'Leadership'],
  },
  {
    id: 'markov',
    year: '2025',
    when: 'June 2025 to December 2025',
    type: 'school',
    title: 'Markov chain research',
    org: 'Northeastern University',
    detail:
      'Modeled memory-aware Markov Chains in Python with networkx and numpy, for predictive finance applications.',
    tags: ['Python', 'Research'],
  },
  {
    id: 'bevi',
    year: '2025',
    when: 'July 2025 to December 2025',
    type: 'work',
    title: 'Product management co-op at Bevi',
    org: 'Software and beverage product',
    detail:
      'Tracked unit and flavor performance with SQL segmentation in Snowflake and Looker, ran standups and sprint planning, and built an AI sales assistant on the OpenAI API that recommended machines by office profile.',
    metric: { value: '2M+', label: 'machine usage events analyzed' },
    tags: ['SQL', 'Snowflake', 'Looker', 'OpenAI API'],
  },
  {
    id: 'flavor',
    year: '2025',
    when: 'July 2025 to September 2025',
    type: 'project',
    title: 'Flavor swaps and voting',
    org: 'Bevi',
    detail:
      'Low-performing SKUs were holding machine slots. Built a Python model on Snowflake data to flag them and recommend swaps, then piloted it across 110 partner sites with a flavor voting program.',
    metric: { value: '+30%', label: 'concentrate consumption' },
    tags: ['Python', 'Snowflake', 'Looker'],
  },
  {
    id: 'mailer',
    year: '2025',
    when: 'August 2025 to May 2026',
    type: 'project',
    title: 'Sales Mailer',
    org: 'Personal project',
    detail:
      'Reps drafted pricing emails by hand and tracked sends manually, so follow-ups slipped. Built a React app on the Gmail API with templates and send history as a first-class feature.',
    metric: { value: '60%', label: 'less drafting time per rep' },
    tags: ['React', 'Gmail API'],
    links: [
      { label: 'Open the live app', href: 'https://sales-mailer-mu.vercel.app/' },
      { label: 'Source on GitHub', href: 'https://github.com/chertokr/sales-mailer' },
    ],
  },
  {
    id: 'keylime',
    year: '2025',
    when: 'Autumn 2025',
    type: 'project',
    title: 'Renamed Key Lime to Lime',
    org: 'Bevi',
    detail:
      'A flavor was underperforming for a reason that turned out to be its name. Coordinated the rebrand across software, marketing, and sales at zero cost.',
    metric: { value: '$300K', label: 'revenue increase' },
    tags: ['User Research', 'Go-to-Market'],
  },
  {
    id: 'deans',
    year: '2026',
    when: 'Spring 2026',
    type: 'school',
    title: 'Dean’s List',
    detail: 'Corporate Finance, Foundations of Data Science, Business Statistics.',
  },
  {
    id: 'redhat',
    year: '2026',
    when: 'May 2026 to August 2026',
    type: 'work',
    title: 'Product management intern at Red Hat',
    org: 'RHEL Cloud Business Unit',
    detail:
      'Analyzed RHEL deployment performance across AWS, GCP, OCI, and Azure to inform roadmap decisions.',
    metric: { value: '4', label: 'clouds compared' },
    tags: ['Python', 'Jira API', 'A/B Testing'],
  },
  {
    id: 'dashboard',
    year: '2026',
    when: 'Summer 2026',
    type: 'project',
    title: 'RHEL cloud executive dashboard',
    org: 'Red Hat',
    detail:
      'Decisions needed numbers that lived in separate places and got pulled by hand. Built a real-time dashboard in Python on the Google Sheets and Jira APIs, with A/B tested layouts, so the team reviews current revenue, pipeline, and competitive data in its regular meetings.',
    metric: { value: 'live', label: 'instead of assembled by hand' },
    tags: ['Python', 'Google Sheets API', 'Jira API'],
  },
  {
    id: 'fall',
    year: '2026',
    when: 'Right now',
    type: 'school',
    status: 'now',
    title: 'Fall semester',
    detail:
      'CS 3200 Introduction to Databases, FINA 4350 Applied Financial Econometrics, ORGB 3201 Organizational Behavior.',
  },
  {
    id: 'grad',
    year: '2027',
    when: 'May 2027',
    type: 'school',
    status: 'future',
    title: 'Graduating',
    detail: 'B.S. Computer Science and Business Administration, concentration in Fintech.',
  },
  {
    id: 'next',
    year: '2027',
    when: 'June 2027',
    type: 'work',
    status: 'future',
    title: 'Whatever is next',
    detail:
      'Looking for a full-time product role where the roadmap gets argued with data. Boston, New York, Chicago, Texas, California, or remote.',
  },
]

export const SKILLS = [
  { area: 'Languages', items: ['Python', 'SQL', 'Java', 'R'] },
  { area: 'Data',      items: ['Snowflake', 'Looker', 'Hex', 'numpy'] },
  { area: 'Tools',     items: ['OpenAI API', 'Claude Code', 'Git', 'Jira'] },
  { area: 'Product',   items: ['User Research', 'A/B Testing', 'Roadmapping', 'Sprint Planning', 'Financial Modeling'] },
]

export const INTERESTS = ['Skiing', 'Baking', 'Russian', 'Italian', 'Star Wars', 'Lord of the Rings']
