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
    fullDescription: 'EventQueue is a frontend event management website designed to provide a simple and user-friendly experience for discovering and exploring events. Users can browse upcoming events, view detailed information such as dates, venues, and descriptions, and navigate through different sections of the platform. The project also includes a frontend-based event registration/RSVP simulation, where users can interact with registration buttons without requiring a backend or database. The website focuses on creating a realistic event-platform flow while keeping the implementation lightweight. Built as a multi-page responsive website, the project emphasizes clean UI/UX, intuitive navigation, responsive layouts, and JavaScript-based interactivity. Tech Stack: HTML5, CSS3, Vanilla JavaScript. Key Features: Event listing, event details, event discovery, RSVP simulation, multi-page navigation, responsive design, and interactive UI elements.',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Hand-coded mini project for revising HTML, CSS and JavaScript',
    image: 'https://cdn.imageurlgenerator.com/uploads/6891f5d3-6253-48b8-bca1-7f9b8e920ec3.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Apoorvacodes376/Portfolio-website',
    demo: 'https://apoorvacodes376.github.io/Portfolio-website/index.html',
    fullDescription: 'A personal portfolio website built from scratch using HTML, CSS, and JavaScript to showcase my profile, skills, projects, certificates, and other professional information. The website follows a multi-page structure with dedicated sections for About, Skills, Certificates, Resume, and Contact. The project focuses on building a clean and responsive personal website while strengthening my understanding of webpage structure, CSS styling, navigation, JavaScript-based interactions, and basic frontend design. Tech Stack: HTML5, CSS3, Vanilla JavaScript. Key Features: Personal profile, About section, Skills showcase, Projects/Certificates, Resume section, Contact page, responsive styling, and interactive navigation.',
  },
  {
    id: 3,
    title: 'Smart Waste',
    description: 'Smart waste management platform',
    image: 'https://cdn.imageurlgenerator.com/uploads/1cf47c68-8233-45b8-a93a-b1ab524ad945.png',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    fullDescription: 'Smart Waste is an intelligent municipal waste management platform that combines IoT, AI, multi-agent coordination, and blockchain to improve the way waste is monitored, collected, and processed. The system connects citizens, municipalities, and recycling facilities through dedicated web portals. IoT-enabled smart bins provide information such as fill level, waste type, and location, which is processed by AI models to support waste prediction, collection planning, and route optimization. A blockchain layer provides transparent and tamper-resistant records for important waste-management activities, improving traceability and accountability across stakeholders. The platform was developed with a React/Vite frontend, FastAPI/Python backend, Supabase PostgreSQL database, Ethereum/Ganache blockchain, and machine-learning models including Random Forest. Key Features: Smart-bin monitoring, AI-based waste prediction, route optimization, municipal dashboards, citizen interaction, recycling-facility tracking, blockchain-based records, alerts, and transparent waste lifecycle management.',
  },

  {
    id: 4,
    title: 'MeritMind',
    description: 'Website promoting bias-free recruitment',
    image: 'https://cdn.imageurlgenerator.com/uploads/da5c336a-a442-4a2f-9ad3-1877e5abcf40.png',
    techStack: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/Apoorvacodes376/MeritMind-HackHerThon',
    demo: 'https://frontend-bice-beta-56.vercel.app/',
    fullDescription: "MeritMind is a recruitment platform designed to make the hiring process more objective and reduce potential bias in candidate evaluation. The platform supports separate candidate and recruiter roles, allowing candidates to upload resumes and interact with job opportunities while recruiters can manage job descriptions and evaluate applicants. The system uses a React/Vite frontend and Python FastAPI backend, with PostgreSQL and SQLAlchemy for data management. The backend is structured around authentication, job-description processing, resume handling, recruitment agents, and explainable results. The project was developed during HackHERthon'26, focusing on combining practical recruitment workflows with AI-assisted candidate evaluation. Tech Stack: React, Vite, Python, FastAPI, PostgreSQL, SQLAlchemy. Key Features: Candidate/recruiter authentication, resume uploads, job-description processing, candidate evaluation, bias analysis, and explainable recruitment results.",
  },
  {
    id: 5,
    title: 'FrictionZero',
    description: 'Security-focused e-commerce platform',
    image: 'https://cdn.imageurlgenerator.com/uploads/d19f2c54-05cf-40ba-ad91-af52b81ef6c3.webp',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/jashwanth0420/TrustCart',
    demo: 'https://trust-cart-vx6b.vercel.app/',
    fullDescription: "TrustCart is a security-focused e-commerce platform built to make online shopping more trustworthy while adding interactive features beyond a conventional shopping website. It brings together buyers, sellers, and administrators, with features for product discovery, shopping, transactions, and real-time communication. The platform includes fraud monitoring and alerts, secure transaction handling, buyer–seller/admin communication, real-time family/group chat using Socket.IO, and transaction-status updates. It also incorporates interactive elements such as a honeypot maze, product video uploads, theme customization, and arcade-style games to create a more engaging shopping experience. The project was developed during Yet Another Hackathon'26, with a MERN-based architecture and real-time communication capabilities. Tech Stack: React, Node.js, Express.js, MongoDB, Socket.IO. Key Features: E-commerce platform, fraud monitoring, security-focused transactions, buyer–seller chat, family/group chat, transaction updates, product video uploads, interactive security features, and gamified elements.",
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: '100 Day LeetCode Badge',
    date: '20-09-2026',
    image: '/LeetCode_100days.png',
    issuer: 'LeetCode',
  },
  {
    id: 2,
    title: 'Paper Publication Certificate - Smart Waste',
    date: '2026',
    image: '/Certificate of Publication.jpg',
    issuer: 'IJCRT',
  },
  {
    id: 3,
    title: '50 Day LeetCode Badge',
    date: '11-06-2026',
    image: '/LeetCode_50days.png',
    issuer: 'LeetCode',
  },
  {
    id: 4,
    title: "ICICRCET'26 International Paper Conference - Smart Waste",
    date: '20-04-2026',
    image: '/Gullapalli Venkata Lakshmi Aporva Participant certificate.png',
    issuer: 'ICICRCET 2026',
  },
  {
    id: 5,
    title: "HackHERthon'26",
    date: '14-04-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.39.41 PM.jpeg',
    issuer: 'HackHERthon',
  },
  {
    id: 6,
    title: "Yet Another Hackathon'26",
    date: '23-02-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.39.41 PM.jpeg',
    issuer: 'Yet Another Hackathon',
  },
  {
    id: 7,
    title: 'MongoDB Campus Workshop',
    date: '29-01-2026',
    image: '/WhatsApp Image 2026-06-21 at 6.40.14 PM.jpeg',
    issuer: 'MongoDB',
  },
  {
    id: 8,
    title: 'NPTEL Cyber Security and Privacy',
    date: '28-06-2025',
    image: '/Cyber Security and Privacy.jpg',
    issuer: 'NPTEL',
  },
  {
    id: 9,
    title: 'Prodigy Infotech Internship',
    date: '03-01-2026',
    image: '/InternshipCertificate.jpg',
    issuer: 'Prodigy Infotech',
  },
  {
    id: 10,
    title: 'Cognifyz Internship',
    date: '03-02-2026',
    image: '/InternshipCertificate.jpg',
    issuer: 'Cognifyz',
  },
  {
    id: 11,
    title: 'MongoDB Basics',
    date: '03-11-2025',
    image: '/MongoDB.jpg',
    issuer: 'MongoDB University',
  },
  {
    id: 12,
    title: 'MongoDB Relational to Document Model',
    date: '03-03-2026',
    image: '/MongoDB Relational to Document Model.jpg',
    issuer: 'MongoDB University',
  },
  {
    id: 13,
    title: 'HackerRank SQL Certification',
    date: '03-06-2026',
    image: '/SQL_basic_certificate.jpg',
    issuer: 'HackerRank',
  },
  {
    id: 14,
    title: 'Google Gemini Certified Student',
    date: '03-06-2026',
    image: '/Google Gemini Certificate1.jpg',
    issuer: 'Google',
  },
  {
    id: 15,
    title: 'InfosysSpringBoard',
    date: '03-06-2026',
    image: '/Introduction to HTML.jpg',
    issuer: 'Infosys',
  },
  {
    id: 16,
    title: 'NLP Workshop by Anna University (6 Days)',
    date: '03-06-2026',
    image: '/NLPCertificate.jpg',
    issuer: 'Anna University',
  }
];
