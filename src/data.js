// All portfolio content lives here, so the components only decide how to show it.

export const profile = {
  name: 'Jasper Teo Kheng Cher',
  shortName: 'Jasper Teo',
  role: 'IT Student & Ambitious Software Developer',
  location: 'Singapore',
  tagline:
    'I build web experiences where the interaction is the point: animated, accessible and fast, with AI doing the heavy lifting behind the scenes.',
  intro: [
    'I enjoy building web experiences that feel alive, from council websites that residents rely on every day to full-stack platforms used by real companies.',
    "I pair clean front-end craft with a growing interest in AI-driven development. I'm currently looking for internships where I can keep learning by shipping real products.",
  ],
  summary: [
    "I'm a Year 2 Information Technology student at Nanyang Polytechnic, building on a Higher Nitec in IT Applications Development from ITE College Central.",
    'It started in secondary school, when I published WordPress blogs and kept bending themes to see what happened. Since then I have worked as a Web Developer at SF Technologies and picked up the full stack, from React to Node, Flask and Supabase.',
    "Right now I'm on exchange at Gachon University in Seoul, studying Computer Engineering, including this Web Programming course.",
  ],
  github: 'https://github.com/secbest',
  linkedin: 'https://www.linkedin.com/in/jasper-teo-jt',
  email: 'jastkc8@gmail.com',
}

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'Tailwind CSS', 'Next.js', 'Bootstrap', 'Flutter', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Flask', 'Supabase', 'PostgreSQL'] },
  { title: 'Programming', items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#', 'SQL'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Firebase', 'Google Cloud', 'Docker', 'Cloudinary'] },
  { title: 'AI', items: ['Gemini', 'OpenAI', 'Anthropic'] },
  { title: 'Design & Tools', items: ['Figma', 'Illustrator', 'Premiere Pro', 'Git', 'GitHub'] },
]

export const education = [
  {
    id: 'gachon',
    school: 'Gachon University',
    programme: 'Computer Engineering (exchange)',
    period: 'Sep – Dec 2026',
    summary:
      'Studying bachelor-level courses in Computer Engineering as an exchange student at Gachon University in South Korea.',
    sections: [
      {
        label: 'Courses taken',
        items: ['Operating Systems', 'Database', 'Machine Learning Programming', 'Consumer Behavior', 'Web Programming'],
      },
    ],
  },
  {
    id: 'np',
    school: 'Nanyang Polytechnic',
    programme: 'Diploma in Information Technology',
    period: '2025 – 2028',
    summary: "A three-year diploma at Nanyang Polytechnic's School of Information Technology, where I'm now in Year 2.",
    sections: [
      { label: 'CCA', items: ['SIT Club Subcommittee (2025 – Present)'] },
      { label: 'Competitions & hackathons', items: ["NTUC's e2i Tech Hackathon 2026: 2nd place"] },
      {
        label: 'Achievements',
        items: ["3× Director's List (top 15% of cohort)", 'Edusave Certificate of Academic Achievement 2026'],
      },
      {
        label: 'Distinction modules (A+, top 5%)',
        items: ['Cybersecurity Technologies & Ethics', 'Digital User Experience Design', 'Full Stack Application Development'],
      },
    ],
  },
  {
    id: 'ite',
    school: 'Institute of Technical Education',
    programme: 'Higher Nitec in IT Applications Development',
    period: '2023 – 2025',
    summary: 'A Higher Nitec at ITE College Central, the foundation for my diploma at Nanyang Polytechnic.',
    sections: [
      { label: 'Co-curricular activities', items: ['EXCO Member, IAD Club', 'Member, Peer Support Leader'] },
      {
        label: 'Distinction modules (A+, top 5%)',
        items: ['Server Side Development', 'Website Optimisation', 'Enterprise Web Development'],
      },
    ],
  },
]

export const experience = [
  {
    company: 'SF Technologies Pte Ltd',
    role: 'Web Developer',
    period: 'Sep 2024 – Feb 2025',
    summary: 'Web design and development with WordPress and Elementor, including the Jalan Besar Town Council website.',
  },
]

export const certifications = [
  { title: 'User Experience Design Fundamentals', issuer: 'IBM' },
  { title: 'AI Fluency Framework & Foundations', issuer: 'Anthropic' },
  { title: 'Web Development Fundamentals', issuer: 'IBM' },
]

// category drives the filter buttons
export const projects = [
  {
    id: 'jbtc',
    title: 'Jalan Besar Town Council',
    year: 'Sep – Nov 2024',
    category: 'Internship',
    summary: 'My first internship project: a resident-facing council website, built in WordPress.',
    tags: ['WordPress', 'Elementor', 'OceanWP', 'Web Design'],
    href: 'https://jbtc.org.sg/',
    linkLabel: 'Visit site',
  },
  {
    id: 'sft',
    title: 'SF Technologies',
    year: 'Nov 2024 – Feb 2025',
    category: 'Internship',
    summary: 'My second internship project: a company website for a Singapore web development firm, built in WordPress.',
    tags: ['WordPress', 'Elementor', 'Web Design'],
    href: 'https://sftechnologies.co/',
    linkLabel: 'Visit site',
  },
  {
    id: 'resumematch',
    title: 'ResumeMatch',
    year: 'Oct 2025 – Feb 2026',
    category: 'Industry',
    summary: 'An industry project with SCCCI: an AI portal that scores resumes against job descriptions.',
    tags: ['Python', 'Flask', 'SQLite', 'Gemini API'],
  },
  {
    id: 'efar',
    title: 'EFAR Hub',
    year: 'Apr – Aug 2026',
    category: 'Industry',
    summary: "An industry project with SCCCI: a finance automation platform that replaces an ambulance company's paper memos.",
    tags: ['React', 'Node.js', 'PostgreSQL', 'Xero API'],
    href: 'https://efar-platform.vercel.app/login',
    linkLabel: 'Visit site',
  },
  {
    id: 'booksearch',
    title: 'Book Search App',
    year: 'Oct 2026',
    category: 'Course',
    summary: 'Search millions of books with the Open Library API. Built with JavaScript and fetch(), deployed on GitHub Pages.',
    tags: ['JavaScript', 'fetch()', 'GitHub Pages'],
    href: 'https://secbest.github.io/webpro-book-search/',
    linkLabel: 'Live site',
  },
  {
    id: 'wind',
    title: 'Gachon WIND Baseball Club site',
    year: 'Oct 2026',
    category: 'Course',
    summary: "Team 16's proposal for a better club website. Keyboard friendly, with a skip link, and a Lighthouse accessibility score of 100.",
    tags: ['HTML', 'CSS', 'Accessibility'],
    href: 'https://secbest.github.io/WebProgrammingGachon/project/',
    linkLabel: 'Live site',
  },
]
