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
    image: 'https://cdn.imageurlgenerator.com/uploads/b7a9678b-bee9-4e5f-b8fc-97c34fe04d4a.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Apoorvacodes376/EventQueue-Studios',
    demo: 'https://apoorvacodes376.github.io/EventQueue-Studios/',
    fullDescription: 'EventQueue demonstrates how a real-world event listing and registration platform can be visually and functionally represented using frontend technologies alone. The website allows users to explore events and navigate between different pages smoothly while keeping the scope simple and achievable.The project emphasizes: UI/UX design Frontend logic Basic interactivity using JavaScript',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Hand-coded mini project for revising HTML, CSS and JavaScript',
    image: 'https://cdn.imageurlgenerator.com/uploads/6891f5d3-6253-48b8-bca1-7f9b8e920ec3.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Apoorvacodes376/Portfolio-website',
    demo: 'https://apoorvacodes376.github.io/Portfolio-website/index.html',
    fullDescription: 'A personal portfolio website built from scratch to practice and master HTML, CSS, and JavaScript.',
  },
  {
    id: 3,
    title: 'Smart Waste',
    description: 'Smart waste management platform',
    image: 'https://cdn.imageurlgenerator.com/uploads/1cf47c68-8233-45b8-a93a-b1ab524ad945.png',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A platform connecting citizens, municipalities, and recycling plants for efficient waste management.',
  },

  {
    id: 4,
    title: 'MeritMind',
    description: 'Website promoting bias-free recruitment',
    image: 'https://cdn.imageurlgenerator.com/uploads/da5c336a-a442-4a2f-9ad3-1877e5abcf40.png',
    techStack: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A recruitment platform designed to eliminate bias in the hiring process.',
  },
  {
    id: 5,
    title: 'FrictionZero',
    description: 'Security-focused e-commerce platform',
    image: 'https://cdn.imageurlgenerator.com/uploads/d19f2c54-05cf-40ba-ad91-af52b81ef6c3.webp',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'A secure e-commerce platform with advanced security features and encryption.',
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: '50 Day LeetCode Badge',
    date: '11-06-2026',
    image: '/LeetCode_50days.png',
    issuer: 'LeetCode',
  },
  {
    id: 2,
    title: "ICICRCET'26 International Paper Conference - Smart Waste",
    date: '20-04-2026',
    image: '/Gullapalli Venkata Lakshmi Aporva Participant certificate.png',
    issuer: 'ICICRCET 2026',
  },
  {
    id: 3,
    title: "HackHERthon'26",
    date: '14-04-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.39.41 PM.jpeg',
    issuer: 'HackHERthon',
  },
  {
    id: 4,
    title: "Yet Another Hackathon'26",
    date: '23-02-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.39.41 PM.jpeg',
    issuer: 'Yet Another Hackathon',
  },
  {
    id: 5,
    title: "MongoDB Campus Workshop",
    date: '29-01-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.40.14 PM.jpeg',
    issuer: 'MongoDB',
  },
  {
    id: 6,
    title: 'NPTEL Cyber Security and Privacy',
    date: '28-06-2025',
    image: '/Cyber Security and Privacy.jpg',
    issuer: 'NPTEL',
  },
  {
    id: 7,
    title: 'Prodigy Infotech Internship',
    date: '03-01-2026',
    image: '/InternshipCertificate.jpg',
    issuer: 'Prodigy Infotech',
  },
  {
    id: 8,
    title: 'Cognifyz Internship',
    date: '03-02-2026',
    image: '/InternshipCertificate.jpg',
    issuer: 'Cognifyz',
  },
  {
    id: 9,
    title: 'MongoDB Basics',
    date: '03-11-2025',
    image: '/MongoDB.jpg',
    issuer: 'MongoDB University',
  },
  {
    id: 10,
    title: 'MongoDB Relational to Document Model',
    date: '03-03-2026',
    image: '/MongoDB Relational to Document Model.jpg',
    issuer: 'MongoDB University',
  },
  {
    id: 11,
    title: 'HackerRank SQL Certification',
    date: '03-06-2026',
    image: '/SQL_basic_certificate.jpg',
    issuer: 'HackerRank',
  },
  {
    id: 12,
    title: 'Google Gemini Certified Student',
    date: '03-06-2026',
    image: '/Google Gemini Certificate1.jpg',
    issuer: 'Google',
  },
  {
    id: 13,
    title: 'InfosysSpringBoard',
    date: '03-06-2026',
    image: '/Introduction to HTML.jpg',
    issuer: 'Infosys',
  },
  {
    id: 14,
    title: 'NLP Workshop by Anna University (6 Days)',
    date: '03-06-2026',
    image: 'public/NLPCertificate.jpg',
  }
];
