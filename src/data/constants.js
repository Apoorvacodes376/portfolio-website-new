export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
  { name: 'GitHub', url: 'https://github.com', icon: 'FaGithub' },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: 'SiLeetcode' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'FaInstagram' },
  { name: 'Duolingo', url: 'https://duolingo.com', icon: 'SiDuolingo' },
];

export const SKILLS_BY_CATEGORY = {
  languages: [
    { name: 'C', icon: 'SiC' },
    { name: 'C++', icon: 'SiCplusplus' },
    { name: 'Python', icon: 'SiPython' },
    { name: 'Java', icon: 'SiJava' },
    { name: 'JavaScript', icon: 'SiJavascript' },
  ],
  frontend: [
    { name: 'HTML', icon: 'SiHtml5' },
    { name: 'CSS', icon: 'SiCss3' },
    { name: 'React', icon: 'SiReact' },
  ],
  backend: [
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name: 'Express.js', icon: 'SiExpress' },
  ],
  database: [
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'MySQL', icon: 'SiMysql' },
  ],
  tools: [
    { name: 'Canva', icon: 'SiCanva' },
    { name: 'Power BI', icon: 'SiPowerbi' },
  ],
  domains: [
    { name: 'Machine Learning', icon: 'FaBrain' },
    { name: 'Artificial Intelligence', icon: 'FaRobot' },
    { name: 'Natural Language Processing', icon: 'FaLanguage' },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: 'EventQueue',
    description: 'Event management website',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A comprehensive event management platform that allows users to create, manage, and participate in events.',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Hand-coded mini project for revising HTML, CSS and JavaScript',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=400&h=300&fit=crop',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A personal portfolio website built from scratch to practice and master HTML, CSS, and JavaScript.',
  },
  {
    id: 3,
    title: 'FrictionZero',
    description: 'Security-focused e-commerce platform',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A secure e-commerce platform with advanced security features and encryption.',
  },
  {
    id: 4,
    title: 'MeritMind',
    description: 'Website promoting bias-free recruitment',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    techStack: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A recruitment platform designed to eliminate bias in the hiring process.',
  },
  {
    id: 5,
    title: 'Smart Waste',
    description: 'Smart waste management platform',
    image: 'https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=400&h=300&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A platform connecting citizens, municipalities, and recycling plants for efficient waste management.',
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: '50 Day LeetCode Badge',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: "ICICRCET'26 International Paper Conference - Smart Waste",
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: "HackHERthon'26",
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    title: "Yet Another Hackathon'26",
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 5,
    title: "ICSEES'26 Paper Presentation",
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 6,
    title: 'NPTEL Cyber Security and Privacy',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 7,
    title: 'Prodigy Infotech Internship - 1 Month',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 8,
    title: 'Cognifyz Internship - 1 Month',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 9,
    title: 'MongoDB Basics',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 10,
    title: 'MongoDB Relational to Document Model',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 11,
    title: 'HackerRank SQL Certification',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 12,
    title: 'Google Gemini Certified Student',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 13,
    title: 'Coursera - Build a Full Website using WordPress',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
  {
    id: 14,
    title: 'NLP Workshop by Anna University (6 Days)',
    date: '03-06-2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
  },
];
