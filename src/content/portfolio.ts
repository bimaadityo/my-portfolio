/** Phase 2 boundary: replace this module's data source while preserving these plain types.
 * IDs and array order are stable; no database, publishing workflow, or CMS is implemented.
 * Only source-verified claims belong here. See CONTENT_SOURCES.md.
 */
export type SocialLink = { id: string; label: string; url: string };
export type Project = { id: string; name: string; category: string; description: string; contribution: string; significance: string; technologies: string[]; links: SocialLink[] };
export type SkillGroup = { id: string; name: string; technologies: string[]; context: string };
export type Publication = { id: string; title: string; year: number; journal: string; citation: string; authors: string[]; summary: string; url: string; doi: string };
export type Experience = { id: string; category: 'Professional' | 'Training' | 'Leadership & teaching'; company: string; role: string; period: string; location?: string; summary: string; contributions: string[] };
export type Education = { id: string; institution: string; degree: string; period: string };
export type Certification = { id: string; name: string };
export type Portfolio = { profile: { name: string; shortName: string; role: string; description: string; portrait: { src: string; alt: string; width: number; height: number }; about: string[]; focus: { title: string; description: string }[] }; socials: SocialLink[]; experiences: Experience[]; education: Education[]; certifications: Certification[]; projects: Project[]; skills: SkillGroup[]; publications: Publication[] };

const researchUrl = 'https://www.researchgate.net/publication/370785730_Rancang_Bangun_Aplikasi_Quest_Board_Untuk_Masyarakat_Menggunakan_Metode_Devops_Berbasis_Android';
export const portfolio: Portfolio = {
  profile: {
    name: 'Bima Adityo Kurniawan', shortName: 'Bima Adityo', role: 'Full-Stack Developer',
    portrait: { src: '/images/bima-adityo.jpeg', alt: 'Bima Adityo Kurniawan wearing a dark suit and blue tie', width: 800, height: 800 },
    description: 'A software engineering leader and full-stack developer focused on reliable web systems from architecture to deployment.',
    focus: [{ title: 'Web systems', description: 'Interfaces, APIs, databases, and production delivery.' }, { title: 'Engineering leadership', description: 'Architecture, standards, documentation, and technical direction.' }, { title: 'Applied software', description: 'Operational tools, AI-assisted systems, and mobile applications.' }],
    about: [
      'I’m Bima, a software engineering leader and full-stack developer based in Kota Bogor, Jawa Barat. I work across system architecture, APIs, databases, responsive interfaces, and production operations.',
      'At PT EbyB Global Marketplace, I lead engineering direction across production and internal applications. Earlier, at PT. Eksa Digital Agency, I built HR, leave, KPI, CRM, ATS, and website-performance systems with React, Express, and MySQL.',
      'I’m particularly interested in software architecture, engineering leadership, applied AI, mobile delivery, and turning complex operational requirements into maintainable systems.'
    ]
  },
  socials: [{ id: 'github', label: 'GitHub', url: 'https://github.com/bimaadityo' }, { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/bimaadityokurniawan/' }],
  experiences: [{
    id: 'asa-lead-fullstack', category: 'Professional', company: 'PT. Asa Inovasi Software', role: 'Lead Fullstack Engineer', period: 'September 2026 — Present', location: 'Yogyakarta, Indonesia',
    summary: 'Leading development of a customer-facing AI assistant and the systems around it.',
    contributions: ['Drive development with an emphasis on code quality, system performance, and the capabilities of the LLM stack.', 'Lead architecture around context-window management, tool calling, and API cost optimization.', 'Collaborate directly with AI/ML Engineers to fine-tune models and evaluate response quality.', 'Drive technical documentation and runbooks so the project remains maintainable as it scales.']
  }, {
    id: 'ebyB-head-engineering', category: 'Professional', company: 'PT EbyB Global Marketplace', role: 'Head of Engineering', period: 'April 2026 — September 2026', location: 'Jakarta, Indonesia',
    summary: 'Led software engineering and owned technical direction across architecture, infrastructure, APIs, technology choices, and engineering standards.',
    contributions: ['Standardized the engineering stack and development practices across systems, reducing fragmented technologies and inconsistent implementation.', 'Re-engineered a slow, crash-prone WhatsApp chatbot into a high-performance omnichannel platform supporting WhatsApp, Instagram, and Telegram.', 'Rebuilt the platform around modular microservices and dynamic chatbot integration, allowing AI/ML Engineers to deploy custom chatbots without changing core application code.', 'Built provider-agnostic AI infrastructure with multi-LLM failover and self-hosted open-weight models, reducing AI operating costs by approximately 95%.', 'Pioneered and led DevHub, an internal version-control platform with repository management, code intelligence, and granular role-based access control.', 'Architected and led ByB, a scalable business directory and marketplace platform.', 'Established AI-assisted engineering performance tracking using operational data, project logbooks, progress supervision, and technical reviews.', 'Built the Aftersales AI Bot for review collection, customer feedback, human escalation, and upselling.', 'Restructured maintenance agreements around scope, revision limits, SLAs, MoUs, and contractual boundaries, reducing scope disputes and revision complaints.', 'Secured approval for monthly software subscriptions and doubled Custom Software division revenue through recurring contracts.']
  }, {
    id: 'ebyB-frontend', category: 'Professional', company: 'PT EbyB Global Marketplace', role: 'Frontend Developer', period: 'January 2026 — March 2026', location: 'Jakarta, Indonesia',
    summary: 'Led development and optimization of core digital platforms, particularly agen.byb.co.id.',
    contributions: ['Built fast, responsive interfaces that bridge complex backend logic and a clear user experience.', 'Worked with the back-end team and used Mantine and shadcn to ship clean, scalable, visually consistent web applications.']
  }, {
    id: 'ebyB-mobile', category: 'Professional', company: 'PT EbyB Global Marketplace', role: 'Mobile Application Developer', period: 'September 2025 — December 2025', location: 'Jakarta, Indonesia',
    summary: 'Owned end-to-end delivery of the company’s iOS and Android applications using Flutter.',
    contributions: ['Handled platform-specific optimization for production performance and reliability.', 'Owned company registration, developer accounts, certificates, signing, testing, store compliance, review feedback, and production publishing across Apple App Store Connect and Google Play Console.']
  }, {
    id: 'eksa-fullstack', category: 'Professional', company: 'PT. Eksa Digital Agency', role: 'Fullstack Developer', period: 'April 2025 — April 2026', location: 'Surabaya, Indonesia',
    summary: 'Built internal business systems and data workflows with React, Express, and MySQL, with CI/CD on Plesk.',
    contributions: ['Migrated two years of marketing sales-point records to a normalized 3NF schema, then cleaned and visualized the data for management analytics.', 'Managed sensitive internal data with storage, security, and audit-log tracking.', 'Built an HR Employee Management System synchronized with facial-recognition attendance for more than 200 employees.', 'Digitalized employee leave management and built a KPI Performance and Analytics Dashboard for ten divisions with different scoring systems.', 'Created a CRM handling more than 10,000 client records, tickets, and websites.', 'Built an automated website-performance system using the Google Lighthouse API to check more than 10,000 websites daily before 7:30 AM.', 'Created an Applicant Tracking System for recording and evaluating recruitment, including applicant demographic graphs and analytics.', 'Automated deployment with CI/CD on Plesk and wrote documentation for every commit and pull request.']
  }, {
    id: 'laskar-ai', category: 'Training', company: 'Laskar AI', role: 'AI Engineer Apprentice', period: 'January 2025 — June 2025', location: 'Jakarta, Indonesia',
    summary: 'Developed and deployed AI-driven solutions through machine learning, cloud computing, and data science in a collaboration program between NVIDIA, Lintasarta, and Dicoding.',
    contributions: ['Worked with Python, deep learning frameworks, and data visualization to build and optimize AI models for real-world challenges.', 'Designed scalable AI systems with a focus on efficiency and business impact.']
  }, {
    id: 'starbito-web', category: 'Professional', company: 'Starbito', role: 'Web Developer', period: 'March 2024 — March 2025', location: 'Purwokerto, Indonesia',
    summary: 'Built websites and web applications from custom HTML, CSS, and JavaScript through Next.js, Express, and Linux VPS deployment.',
    contributions: ['Moved from custom client websites to maintainable, performant, SEO-aware company profiles with Next.js.', 'Contributed to administrative dashboards, backend services, and server deployment and maintenance on Linux-based VPS environments.', 'Collaborated with team members and clients throughout delivery to produce responsive, reliable, business-focused solutions.']
  }, {
    id: 'dicoding-distinction', category: 'Training', company: 'Dicoding Indonesia', role: 'Front-End Web & Back-End Developer — Distinction Graduate', period: 'July 2024 — December 2024',
    summary: 'Completed a web-development bootcamp with distinction across front-end, back-end, and framework fundamentals.',
    contributions: ['Worked with HTML, CSS, JavaScript, Node.js, and web frameworks through hands-on projects.', 'Appointed as a study tutor, simplifying complex concepts, running additional sessions, and mentoring peers through completion of the bootcamp.']
  }, {
    id: 'aliansi-chairman', category: 'Leadership & teaching', company: 'Aliansi Laboratorium Teknik Elektro — Universitas Jenderal Soedirman', role: 'Chairman', period: 'December 2022 — December 2023', location: 'Purbalingga, Central Java, Indonesia',
    summary: 'Led a collaborative network of student-run laboratory divisions within the Department of Electrical Engineering.',
    contributions: ['Unified lab goals, facilitated resource sharing, and introduced regular strategic forums for cross-lab coordination.', 'Established a centralized digital communication platform, launched joint research and workshops, and encouraged cross-functional mentoring between senior and junior students.']
  }, {
    id: 'computer-network-lab', category: 'Leadership & teaching', company: 'Universitas Jenderal Soedirman', role: 'Head Assistant of Computer Network Lab', period: 'September 2022 — February 2023', location: 'Purbalingga, Indonesia',
    summary: 'Managed computer-network practicums and worked with lecturers to develop learning modules.',
    contributions: ['Trained more than 50 students on virtual-machine technologies and network architecture using GNS3 and VirtualBox.']
  }, {
    id: 'programming-fundamentals-ta', category: 'Leadership & teaching', company: 'Universitas Jenderal Soedirman', role: 'Programming Fundamentals Teaching Assistant', period: 'September 2022 — February 2023', location: 'Purbalingga, Central Java, Indonesia',
    summary: 'Helped first-year students build a foundation in variables, loops, functions, data types, debugging, and clean coding habits.',
    contributions: ['Refined lab materials with the course instructor, provided hands-on and one-to-one mentoring, and supported students who needed extra assistance.']
  }, {
    id: 'algorithm-data-structures-lab', category: 'Leadership & teaching', company: 'Universitas Jenderal Soedirman', role: 'Head Assistant of Algorithm and Data Structures Lab', period: 'April 2022 — September 2022', location: 'Purbalingga, Indonesia',
    summary: 'Taught fundamental programming, object-oriented programming, algorithms, and data structures with a university lecturer.',
    contributions: ['Created the department’s first Python learning module and helped write C++ and Python programming quizzes and final exams.']
  }],
  education: [{ id: 'unsoed-electrical-engineering', institution: 'Universitas Jenderal Soedirman', degree: 'Bachelor of Engineering (BE), Electrical Engineering', period: 'September 2020 — March 2024' }],
  certifications: [{ id: 'machine-learning-terapan', name: 'Machine Learning Terapan' }, { id: 'google-it-support', name: 'Google IT Support Specialization' }, { id: 'frontend-expert', name: 'Menjadi Front-End Web Developer Expert' }],
  projects: [{
    id: 'energymate', name: 'EnergyMate', category: 'Web application · Frontend developer',
    description: 'A household energy prediction app with appliance-based estimates, visualizations, and an interactive energy-advice chatbot.',
    contribution: 'Frontend developer on the team: built the React and TypeScript application with prediction and chatbot interfaces connected to REST APIs.',
    significance: 'Turns appliance usage inputs into understandable estimates and recommendations, helping users reason about their electricity consumption.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Flask API'],
    links: [{ id: 'repository', label: 'View repository', url: 'https://github.com/bimaadityo/EnergyMate' }, { id: 'demo', label: 'Visit demo', url: 'https://energymate.netlify.app' }]
  }, {
    id: 'izinboss', name: 'IzinBoss', category: 'Android application · Leave management',
    description: 'An employee leave-management application with request submission, manager review, and status updates.',
    contribution: 'Reworked the Android application around MVVM, separating views, view models, and repositories for company, user, and leave-request data.',
    significance: 'Connects employee and manager workflows through Firebase Authentication and Cloud Firestore. The repository includes end-to-end UI tests for core flows.',
    technologies: ['Kotlin', 'MVVM', 'Firebase Auth', 'Cloud Firestore'],
    links: [{ id: 'repository', label: 'View repository', url: 'https://github.com/bimaadityo/IzinBoss-v2' }]
  }, {
    id: 'kota-quest', name: 'Kota Quest', category: 'Android application · Research project',
    description: 'A community quest board where people can post requests for help and others can take them on. Built around the Indonesian tradition of gotong royong.',
    contribution: 'First author of the paper documenting the application’s design, implementation, and DevOps development process.',
    significance: 'Brings posting, accepting, and reporting community tasks into one mobile workflow, with shared state stored in Cloud Firestore.',
    technologies: ['Kotlin', 'Android', 'Firebase', 'Cloud Firestore', 'Gradle'],
    links: [{ id: 'repository', label: 'View repository', url: 'https://github.com/bimaadityo/Kota-Quest' }, { id: 'publication', label: 'Read the project paper', url: researchUrl }]
  }],
  skills: [
    { id: 'frontend', name: 'Frontend', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], context: 'Web interfaces and applications' },
    { id: 'backend', name: 'Backend', technologies: ['Node.js', 'Express', 'Go', 'Flask', 'REST APIs'], context: 'Server-side development' },
    { id: 'database', name: 'Databases', technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cloud Firestore'], context: 'Relational and document data' },
    { id: 'devops', name: 'DevOps & tooling', technologies: ['GitHub', 'CI/CD', 'Docker', 'Vite', 'Gradle'], context: 'Source control, builds, and development' },
    { id: 'mobile-ml', name: 'Mobile & ML', technologies: ['Kotlin', 'Swift', 'Flutter', 'Python', 'TensorFlow'], context: 'Additional areas of development' },
    { id: 'engineering-practice', name: 'Engineering practice', technologies: ['Technical leadership', 'System architecture', 'Technical documentation'], context: 'Direction, maintainability, and delivery' }
  ],
  publications: [{
    id: 'quest-board-2023',
    title: 'Rancang Bangun Aplikasi Quest Board Untuk Masyarakat Menggunakan Metode Devops Berbasis Android',
    year: 2023, journal: 'Jurnal Pendidikan dan Teknologi Indonesia', citation: 'Vol. 3, No. 4 · pp. 151–164',
    authors: ['Bima Adityo Kurniawan', 'Acep Taryana', 'Yogi Ramadhani', 'Ari Fadli'],
    summary: 'Design and development of an Android community quest board using a DevOps process, Kotlin, and Firebase. The study explores how a mobile application can support mutual assistance in urban communities.',
    url: researchUrl, doi: '10.52436/1.jpti.285'
  }]
};
