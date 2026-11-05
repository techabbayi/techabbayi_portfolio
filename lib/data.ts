// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO DATA
// Used by both Hacker Theme and Designer Theme
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const personalInfo = {
    name: "Lokeswara Muthumula",
    role: "Programmer • Cyber Activist • Student Entrepreneur • Content Creator • Writer",
    tagline: "Building secure systems and advocating for digital freedom.",
    quote: "Code is not just lines of logic, it's the bridge between imagination and reality.",
    location: "Komarole, Prakasam Dt., Andhra Pradesh, India",
    email: "rknewsceo@protonmail.com",
    phone: "+91 9666072642",
    degree: "Degree", // Display as-is
};

// Designer-specific content
export const designerInfo = {
    name: "Lokeswara Muthumula",
    role: "Programmer • Cyber Activist • Student Entrepreneur • Content Creator • Writer",
    manifesto: "Code is not just lines of logic, it's the bridge between imagination and reality. Through thoughtful programming and intentional storytelling, I craft digital experiences that empower people and challenge the status quo.",
    bio: "I'm a programmer and cyber activist based in Andhra Pradesh, where I spend my days building secure systems and my evenings writing about technology, digital rights, and the future of the internet. My work sits at the intersection of code, activism, and storytelling—always seeking to create things that make a difference.",
    philosophy: [
        "Technology should empower, not exploit",
        "Code is a tool for positive change",
        "Privacy is a fundamental human right",
        "Good software serves people, not corporations",
    ],
};

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/techabbayi",
        icon: "Github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lokeswaramuthumula/",
        icon: "Linkedin",
    },
    {
        name: "Twitter",
        url: "https://x.com/techabbayi",
        icon: "Twitter",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/techabbayi/",
        icon: "Instagram",
    },
    {
        name: "Email",
        url: "mailto:rknewsceo@protonmail.com",
        icon: "Mail",
    },
];

export const skills = {
    technical: [
        { name: "Python", description: "Automation, scripting, and backend development" },
        { name: "C++", description: "System programming and performance-critical apps" },
        { name: "Java", description: "Enterprise applications and Android development" },
        { name: "Java Springboot", description: "Enterprise backend microservices & REST APIs" },
        { name: "AI Agents", description: "Autonomous decision-making agentic workflows & LLM orchestration" },
        { name: "N8N", description: "Visual node-based workflow automation and integration pipelines" },
        { name: "Dart", description: "Client-optimized language for fast apps" },
        { name: "Flutter", description: "Cross-platform UI framework for mobile & web" },
        { name: "Kotlin", description: "Modern language for Android & JVM" },
        { name: "React", description: "Library for building component-based UIs" },
        { name: "Next.js", description: "React framework for production-grade apps" },
        { name: "HTML", description: "The standard markup for web documents" },
        { name: "CSS", description: "Styling and layout for web interfaces" },
        { name: "JavaScript", description: "The logic and interactivity of the web" },
        { name: "TailwindCSS", description: "Utility-first CSS framework for rapid UI" },
        { name: "MongoDB", description: "NoSQL database for modern applications" },
        { name: "SQL(MySQL)", description: "Relational database management" },
        { name: "Bash / Shell Scripting", description: "Command-line automation and OS control" },
        { name: "Basic Networking", description: "TCP/IP, DNS, and network architecture" },
        { name: "Git", description: "Distributed version control system" },
        { name: "npm", description: "Package manager for JavaScript ecosystems" },
        { name: "WordPress", description: "Content management and web publishing" },
    ],
    tools: [
        { name: "Android Studio", description: "Native Android application development and debugging" },
        { name: "Claude", description: "AI-assisted programming, architecture & code generation" },
        { name: "N8N", description: "Workflow automation and agent orchestration platform" },
        { name: "Openclaw", description: "Modern open-source testing, automation, and API tooling" },
        { name: "Figma", description: "Interface design and prototyping" },
        { name: "Photoshop", description: "Raster graphics editing and manipulation" },
        { name: "GitHub Actions", description: "CI/CD and workflow automation" },
        { name: "Docker", description: "Containerization and environment isolation" },
        { name: "Burp Suite", description: "Web vulnerability research and auditing" },
        { name: "Nmap", description: "Network scanning and reconnaissance" },
        { name: "Wireshark", description: "Packet analysis and network forensics" },
        { name: "Postman", description: "API development and testing platform" },
        { name: "Bruno", description: "Fast and Git-friendly API client" },
        { name: "Office 365", description: "Collaborative productivity suite" },
        { name: "Canva", description: "Quick visual design and communication" },
    ],
    os: [
        { name: "Windows", description: "Primary OS for productivity and gaming" },
        { name: "Ubuntu", description: "Debian-based Linux for server environments" },
        { name: "Kali Linux", description: "The standard for penetration testing" },
    ],
};

// Designer-specific skills (same source)
export const designSkills = skills;

export interface ProjectItem {
    id: number;
    title: string;
    category: string;
    tagline?: string;
    description: string;
    fullDescription?: string;
    techStack: string[];
    github: string;
    live: string | null;
    featured: boolean;
    context?: string;
    year?: string;
    highlights?: string[];
}

export const projects: ProjectItem[] = [
    {
        id: 1,
        title: "FoundrAI",
        category: "Autonomous AI & Startup OS",
        tagline: "Autonomous AI Virtual Co-Founder & Startup Operating System 🤖🚀",
        description: "Built during Summer Bootcamp. Designed to help early-stage founders and student entrepreneurs move seamlessly from Idea → Validation → Strategy → MVP → Launch with 24/7 autonomous AI mentorship.",
        fullDescription: "What if a founder could have an AI co-founder available 24/7 to help turn an idea into something executable? Built during Summer Bootcamp, FoundrAI acts as an end-to-end autonomous operating system for founders, providing automated feasibility audits, market size analysis, and sprint planning.",
        techStack: ["Python", "FastAPI", "React", "Next.js", "TailwindCSS", "LLMs"],
        github: "https://github.com/techabbayi/FoundrAI",
        live: null,
        featured: true,
        context: "Summer Bootcamp Flagship",
        year: "2024",
        highlights: [
            "AI Idea Validation & Feasibility Analysis",
            "TAM / SAM / SOM Market Research",
            "Competitor Intelligence & Gap Analysis",
            "Interactive Business Model Canvas",
            "MVP Feature Planning & Sprint Management",
            "AI Pitch Deck Generation",
            "Funding & Financial Modeling",
            "AI Co-Founder Mentorship",
            "Startup Risk Assessment",
            "Founder & Team Workspace Management",
        ],
    },
    {
        id: 2,
        title: "LawPilot AI",
        category: "Legal AI & Privacy",
        tagline: "Privacy-First AI Legal Intelligence Platform ⚖️",
        description: "Built in just 2 intensive nights. A privacy-first AI legal intelligence platform ensuring strict confidentiality, zero data retention, and instant document breakdown with precision citations.",
        fullDescription: "Built in just 2 nights after months of ideation. Somewhere in the process of working on various startups and ideas, I realized I had moved away from what made me strongest: rapid, privacy-first technical execution. LawPilot AI solves deep legal bottlenecks without compromising sensitive client data sovereignty.",
        techStack: ["Python", "FastAPI", "React", "Privacy AI", "Vector DB", "TailwindCSS"],
        github: "https://github.com/techabbayi/LawPilot-AI",
        live: null,
        featured: true,
        context: "Built in 2 Nights • Rapid Prototyping",
        year: "2024",
        highlights: [
            "Privacy-First Architecture (Zero Data Retention)",
            "Automated Clause Extraction & Risk Audit",
            "Strict Data Sovereignty & Confidentiality by Design",
            "Rapid 48-Hour Prototyping & High Precision Synthesis",
            "Citation Cross-Verification & Legal Anomaly Detection",
        ],
    },
    {
        id: 3,
        title: "IntraQuiz AI",
        category: "Adaptive AI & EdTech",
        tagline: "Dynamic AI Quiz Platform with Secured Backend & Modular UI 🚀",
        description: "Capstone project AI-powered quiz platform. Features a secured backend and modern modular frontend built with React.js, Tailwind CSS, and React Router DOM for dynamic testing experiences.",
        fullDescription: "With the backend fully built and secured, officially stepped into the frontend phase of this Capstone project. IntraQuiz AI provides adaptive, interactive assessment flows powered by AI generation, dynamic route handling, and an intuitive responsive user experience.",
        techStack: ["React.js", "Tailwind CSS", "React Router", "Python", "REST API", "AI"],
        github: "https://github.com/techabbayi/IntraQuiz-AI",
        live: null,
        featured: true,
        context: "University Capstone Project",
        year: "2024",
        highlights: [
            "Full secured backend architecture with role isolation",
            "Initialized with React.js modular component hierarchy",
            "Tailwind CSS integration for rapid, responsive UI styling",
            "React Router DOM configuration for scalable route handling",
            "Intuitive homepage layout & AI quiz orchestration",
        ],
    },
    {
        id: 4,
        title: "NeoShieldX",
        category: "Military-Grade Cryptography",
        tagline: "AI-Assisted File Vault & Hybrid Cryptographic Wrapping 🔒",
        description: "AI-assisted file vault system combining AES-256-GCM with RSA-4096 hybrid wrapping. Supports remote wipe, auto expiry, and secure deletion. Powered by the ARC47 HexaCore Engine™.",
        fullDescription: "Next-generation personal data sovereignty platform integrating the ARC47 HexaCore Engine™ to manage multi-layer cryptographic envelopes including AES-256-GCM and RSA-4096 hybrid asymmetric wrapping.",
        techStack: ["Python", "Cryptography", "Security", "AI"],
        github: "https://github.com/techabbayi/NeoSheildX",
        live: null,
        featured: true,
        context: "Security Research",
        year: "2024",
        highlights: [
            "AES-256-GCM authenticated payload encryption",
            "RSA-4096 asymmetric key-wrapping mechanism",
            "Automated self-destruct & cryptographic wipe",
            "Powered by the ARC47 HexaCore Engine™",
        ],
    },
    {
        id: 5,
        title: "NeoShare",
        category: "Secure Communication",
        tagline: "Zero-Friction File Sharing with QR & Passcode Verification ⚡",
        description: "Fast, secure, and easy-to-use file-sharing web app that allows users to upload files and share them using a QR code or a 4-digit access code. No sign-up required—just upload, share, and download!",
        fullDescription: "Frictionless peer file-sharing web application built with Python and Flask. Eliminates user account requirements by utilizing temporary cryptographically salted 4-digit passcodes and instant QR code rendezvous.",
        techStack: ["Python", "Flask", "QR Code", "Security"],
        github: "https://github.com/techabbayi/NeoShare-FileSharing-with-QR",
        live: null,
        featured: true,
        context: "Open Source Utility",
        year: "2024",
        highlights: [
            "No account or sign-up needed",
            "Dual-key sharing: QR Code + 4-digit security code",
            "Temporary encrypted staging on server",
            "Lightweight and optimized for mobile browsers",
        ],
    },
    {
        id: 6,
        title: "Folder Launcher",
        category: "Productivity Tools",
        tagline: "One-Click Browser Directory Launcher & OS Automation Utility 📂",
        description: "Desktop utility built with Python + Flask to eliminate daily friction of digging through nested file paths for Capstone work, screenshots, side projects, and class materials. Opens folders with 1 click from a clean browser UI.",
        fullDescription: "As a developer and student, digging through long file paths daily was a repetitive friction. Built Folder Launcher with Python and Flask to open most-used folders with one click right from a browser UI. Features dark mode, responsive Bootstrap UI, folder icons, auto-launch in browser, and terminal auto-minimization.",
        techStack: ["Python", "Flask", "Bootstrap", "OS Automation", "JavaScript"],
        github: "https://github.com/techabbayi/Folder-Launcher-Python",
        live: null,
        featured: false,
        context: "Developer Workflow Solution",
        year: "2024",
        highlights: [
            "One-click launch of frequently accessed project folders",
            "Dark mode toggle 🌙 for low-light developer setups",
            "Bootstrap-powered clean & responsive layout",
            "Folder icons for immediate visual identification",
            "Auto-launches default browser upon boot",
            "Minimizes the terminal window after launch for smooth UX",
            "Standalone `.exe` packaging in roadmap for non-technical users",
        ],
    },
    {
        id: 7,
        title: "ARC – Advanced WebScan",
        category: "Security Auditing",
        tagline: "Automated Web Vulnerability Scanner & Crawler 🛡️",
        description: "Automated security scanner for web applications. Identifies vulnerabilities using Flask and BeautifulSoup parsing to detect critical security flaws like XSS and SQLi in target systems.",
        fullDescription: "Accessible yet powerful security auditing crawler capable of parsing target web applications, analyzing DOM structures, and diagnosing security misconfigurations.",
        techStack: ["Python", "Flask", "BeautifulSoup", "Security"],
        github: "https://github.com/techabbayi/ARC-Advance-WebScan",
        live: null,
        featured: false,
        context: "Security Research",
        year: "2023",
        highlights: [
            "Automated DOM traversal and link extraction",
            "Cross-Site Scripting (XSS) pattern matching",
            "SQL Injection entry-point detection",
            "Generates concise technical vulnerability audits",
        ],
    },
    {
        id: 8,
        title: "AI-Terminal CheatSheet",
        category: "Developer Efficiency",
        tagline: "CLI-Native AI Cheatsheet & Code Reference Generator 💻",
        description: "CLI-based AI-powered developer cheat sheet system. Generates concise references for React, Python, and JavaScript directly in the terminal—no browser context-switching required.",
        fullDescription: "Lightweight command-line interface leveraging language models to generate context-aware code references directly inside developer terminal sessions.",
        techStack: ["Python", "AI", "CLI", "Shell"],
        github: "https://github.com/kalviumcommunity/AI-CLI-CheatSheet.git",
        live: null,
        featured: false,
        context: "Developer Tooling",
        year: "2024",
        highlights: [
            "Zero browser context switching",
            "Instant command lookup for React, Python, and Bash",
            "Offline cached references with dynamic AI fallback",
        ],
    },
];

// Designer-specific projects (editorial presentation)
export const designProjects = [
    {
        id: 1,
        title: "FoundrAI",
        category: "Autonomous AI & Startup OS",
        intent: "Empower early-stage founders with an autonomous AI co-founder available 24/7.",
        process: "Engineered during Summer Bootcamp, combining LLM orchestration with interactive market modeling and venture canvas systems.",
        outcome: "A full startup operating system guiding ideas through validation, strategy, MVP, and pitch deck generation.",
        year: "2024",
        featured: true,
        highlights: [
            "AI Idea Validation & Market Research",
            "TAM / SAM / SOM Modeling",
            "Interactive Business Model Canvas",
            "24/7 AI Co-Founder Mentorship",
        ],
    },
    {
        id: 2,
        title: "LawPilot AI",
        category: "Legal AI & Privacy",
        intent: "Deliver privacy-preserving legal document intelligence without compromising client confidentiality.",
        process: "Engineered in 2 intensive nights, focusing on strict zero-retention architecture and rapid citation parsing.",
        outcome: "A high-precision legal intelligence platform upholding data sovereignty as an uncompromising standard.",
        year: "2024",
        featured: true,
        highlights: [
            "Privacy-first zero data retention",
            "48-hour rapid development sprint",
            "Automated clause & risk breakdown",
        ],
    },
    {
        id: 3,
        title: "IntraQuiz AI",
        category: "Adaptive AI & EdTech",
        intent: "Transform academic assessments through intuitive AI generation and responsive UI design.",
        process: "Secured backend architecture first, then developed modular React.js frontend with Tailwind CSS and React Router DOM.",
        outcome: "A robust, scalable testing environment ready for high-throughput AI quiz execution.",
        year: "2024",
        featured: true,
        highlights: [
            "React.js & Tailwind CSS responsive interface",
            "React Router DOM dynamic client routing",
            "Capstone project flagship",
        ],
    },
    {
        id: 4,
        title: "NeoShieldX",
        category: "Military-Grade Cryptography",
        intent: "Define the next generation of personal data sovereignty.",
        process: "Integrated the ARC47 HexaCore Engine™ to manage complex encryption layers including AES-256 and RSA-4096.",
        outcome: "A future-proof vault system ready for the quantum cryptography era.",
        year: "2024",
        featured: true,
        highlights: [
            "AES-256-GCM + RSA-4096 hybrid wrapping",
            "Remote cryptographic wipe",
        ],
    },
    {
        id: 5,
        title: "NeoShare",
        category: "Secure Communication",
        intent: "Make secure file transfer as effortless as scanning a QR code.",
        process: "Engineered a dual-key system using QR codes and 4-digit passcodes for frictionless sharing without compromising integrity.",
        outcome: "A minimalist, high-speed transfer platform that eliminates the need for user accounts.",
        year: "2024",
        featured: true,
        highlights: [
            "No registration required",
            "Instant QR & 4-digit pairing",
        ],
    },
    {
        id: 6,
        title: "Folder Launcher",
        category: "Productivity Tools",
        intent: "Eliminate repetitive OS directory navigation friction through a minimalist browser interface.",
        process: "Developed a Python + Flask backend interfacing with local filesystem via responsive Bootstrap UI with dark mode and terminal auto-minimization.",
        outcome: "A one-click desktop utility that saves cumulative hours of file navigation friction.",
        year: "2024",
        featured: false,
        highlights: [
            "One-click browser directory launch",
            "Dark mode & Bootstrap layout",
            "Auto-launches browser & minimizes terminal",
        ],
    },
    {
        id: 7,
        title: "ARC – Advanced WebScan",
        category: "Security Auditing",
        intent: "Democratize industrial-strength web security scanning.",
        process: "Utilized Flask and BeautifulSoup to build an intelligent crawler capable of identifying deep-seated XSS and SQLi patterns.",
        outcome: "An accessible yet powerful auditing tool that simplifies vulnerability management.",
        year: "2023",
        featured: false,
        highlights: [
            "XSS & SQLi vulnerability detection",
            "Fast web crawler and DOM parsing",
        ],
    },
    {
        id: 8,
        title: "AI-Terminal CheatSheet",
        category: "Developer Efficiency",
        intent: "Eliminate context-switching for developers by bringing documentation into the terminal.",
        process: "Developed a lightweight CLI that leverages LLMs to generate context-aware code snippets and cheatsheets.",
        outcome: "A significant boost in developer productivity by reducing the need for external searches.",
        year: "2024",
        featured: false,
        highlights: [
            "Terminal-native AI documentation",
            "Fast multi-language command reference",
        ],
    },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ACHIEVEMENTS & EXPERIENCES (9 CORE MILESTONES)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface AchievementExperienceItem {
    id: number;
    title: string;
    category: 'Experience' | 'Achievement' | 'Milestone';
    role: string;
    period: string;
    organization: string;
    badge: string;
    summary: string;
    highlights: string[];
    techStack: string[];
    link?: string;
    icon: string;
}

export const achievementsAndExperiences: AchievementExperienceItem[] = [
    {
        id: 1,
        title: "Proud to Share: Selected as a MyGov Campus Ambassador 🎉",
        category: "Achievement",
        role: "MyGov Campus Ambassador",
        period: "2026 - Present",
        organization: "MyGov India • Government of India",
        badge: "National Ambassador",
        summary: "Proud to be officially selected as a MyGov Campus Ambassador, leading initiatives to bridge youth innovation, active civic engagement, and digital governance across academic ecosystems.",
        highlights: [
            "Selected as a campus ambassador representing youth voice and digital governance",
            "Fostering civic engagement through Government of India digital initiatives and citizen platforms",
            "Organizing campus outreach to raise awareness on digital privacy, ethical technology, and public innovation",
        ],
        techStack: ["Leadership", "Digital Governance", "Civic Tech", "Campus Outreach"],
        link: "https://www.linkedin.com/in/mygov/",
        icon: "Award",
    },
    {
        id: 2,
        title: "Guest of Honour & Jury Member — HackSphere Hackathon 2026",
        category: "Experience",
        role: "Guest of Honour & Technical Jury Member",
        period: "10 October 2026",
        organization: "SITAMS (Sreenivasa Inst. of Technology & Management Studies, Chittoor)",
        badge: "Honorary Jury",
        summary: "10 October 2026 will always be a special day. Some moments make you stop, look back at your journey, and feel truly grateful. Had the honour of being invited as a Guest of Honour and Jury Member at HackSphere Hackathon 2026, organized by SITAMS.",
        highlights: [
            "Invited as Guest of Honour and Technical Jury Member at HackSphere Hackathon 2026",
            "Evaluated breakthrough student prototypes spanning AI, systems security, and full-stack software",
            "Shared technical insights on building scalable products and persevering through startup challenges",
            "Celebrated student talent across regional institutions with faculty and leadership",
        ],
        techStack: ["Hackathon Mentorship", "Technical Evaluation", "Keynote Speaker", "System Auditing"],
        link: "https://www.linkedin.com/school/sitams/",
        icon: "Award",
    },
    {
        id: 3,
        title: "Official Launch & Inauguration of Diksuchi EdTech at The Apollo University",
        category: "Milestone",
        role: "Founder & Chief Executive",
        period: "26 August 2026",
        organization: "Diksuchi EdTech • The Apollo University",
        badge: "Startup Inauguration",
        summary: "Some moments make you realize why you started. When I started Diksuchi EdTech, I didn't have a big team, huge budget, or established company behind me — just an idea and a belief that we could build something meaningful for students. On 26th August 2026, with the support of The Apollo University, faculty, and mentors, we brought together 200+ students from Andhra Pradesh, Karnataka, and Tamil Nadu to officially launch and inaugurate Diksuchi EdTech.",
        highlights: [
            "Official inauguration and launch of Diksuchi EdTech hosted at The Apollo University",
            "Brought together 200+ student attendees from across AP, Karnataka, and Tamil Nadu",
            "Turned an idea from sleepless nights, uncertainty, and persistence into an operational reality",
            "Backed by mentors, university leadership, and student developer communities",
        ],
        techStack: ["EdTech Startup", "Community Leadership", "Event Orchestration", "Student Innovation"],
        link: "https://www.linkedin.com/in/diksuchiedtech/",
        icon: "Sparkles",
    },
    {
        id: 4,
        title: "From a 6th Class YouTube Creator to Building Startups — My Entrepreneurial Journey",
        category: "Experience",
        role: "Founder, Creator & Technologist",
        period: "2016 - Present",
        organization: "Sr Software Solutions • Sr Digital Telugu • Diksuchi • AKMULTIVISION",
        badge: "Founder Journey",
        summary: "My entrepreneurial journey didn't start with a startup. It started in 6th class (2016) with freelancing through Sr Software Solutions, converting a web app to APK and earning my first ₹10,000. In 2017, launched YouTube channel Sr Digital Telugu (formerly Garuda Channel). In 9th class, explored Cybersecurity. During B.Tech, co-founded Diksuchi EduLabs Private Limited and creative agency AKMULTIVISION (Andhra Kreatives).",
        highlights: [
            "6th Class (2016): Started freelancing with Sr Software Solutions (My First Business), earned first ₹10,000",
            "16 April 2017: Launched YouTube channel Sr Digital Telugu (formerly Garuda Channel), mastering video editing, websites, and app development",
            "9th Class & Lockdowns: Mastered deep Cybersecurity fundamentals, system security, and hands-on tooling",
            "Intermediate & B.Tech: Shifted focus toward industry ecosystems, entrepreneurship, and venture building",
            "Milestone Roadmap: 6th Class → YouTube → Freelancing → First ₹10,000 → Editing → Websites → Apps → Cybersecurity → Entrepreneurship → Diksuchi → AKMULTIVISION",
            "Supported by mentors like BHSir and inspired by my father's hard work, responsibility, and persistence",
        ],
        techStack: ["Entrepreneurship", "Freelancing", "YouTube Media", "Cybersecurity", "Agency Building", "App Dev"],
        link: "https://www.linkedin.com/in/lokeswaramuthumula/",
        icon: "Briefcase",
    },
    {
        id: 5,
        title: "Apple WWDC26 Developer Participant — Siri AI & Apple Intelligence",
        category: "Achievement",
        role: "Apple Developer Participant",
        period: "June 2026",
        organization: "Apple Developer Community • WWDC26",
        badge: "WWDC26 Delegate",
        summary: "Attended Apple's Worldwide Developers Conference (WWDC26) virtually as an Apple Developer, exploring cutting-edge innovations shaping the future of technology.",
        highlights: [
            "Explored Siri AI powered by Apple Intelligence and contextual on-device reasoning",
            "Analyzed advanced AI capabilities and neural engine integrations across Apple platforms",
            "Mastered enhanced developer tools, Swift frameworks, and intelligent app design patterns",
            "Attended inspiring technical sessions from Apple's core engineering and design teams",
        ],
        techStack: ["Apple Intelligence", "Siri AI", "Developer Frameworks", "Swift", "Machine Learning"],
        link: "https://developer.apple.com/wwdc/",
        icon: "Cpu",
    },
    {
        id: 6,
        title: "Milestones Across the Google for Developers Ecosystem",
        category: "Milestone",
        role: "Google Developer Program Member",
        period: "Last 6 Months • 2026",
        organization: "Google for Developers • GDG Communities",
        badge: "Google Ecosystem",
        summary: "Over the last 6 months, actively exploring, learning, and contributing within the Google Developer ecosystem across AI, Cloud, and developer communities worldwide.",
        highlights: [
            "Google I/O 2026 Participant",
            "Google Developer Program Active Member",
            "Gemini Enterprise Agent Ready Credential",
            "Google Cloud & NVIDIA Community Contributor",
            "Active in GDG Bangalore & GDG Cloud Hyderabad",
            "Firebase Studio Developer Community Member",
            "Official Google Developer Profile: https://g.dev/techabbayi",
        ],
        techStack: ["Google Cloud", "Gemini AI", "Firebase Studio", "NVIDIA Community", "GDG"],
        link: "https://g.dev/techabbayi",
        icon: "Globe",
    },
    {
        id: 7,
        title: "Founder Session: 'Enterprise AI: Built Right, Sold Right' at T-Hub",
        category: "Experience",
        role: "Invited Startup Founder",
        period: "2026",
        organization: "Google for Startups, Hyderabad • T-Hub",
        badge: "Founder Insights",
        summary: "Attended the exclusive Founder Session 'Enterprise AI: Built Right, Sold Right' hosted at T-Hub by Google for Startups, Hyderabad, featuring founders and leaders from Cognida.ai, KonnectNXT, and Beacon.li.",
        highlights: [
            "Key Takeaway: Building strong AI products requires prioritizing real business problems over hype",
            "Technology alone is not enough — understanding customer workflows and delivering measurable value is vital",
            "Actionable insights on Go-To-Market (GTM) strategy, enterprise trust, and customer retention for AI products",
        ],
        techStack: ["Enterprise AI", "T-Hub", "Google for Startups", "Go-To-Market", "Product Strategy"],
        link: "https://t-hub.co/",
        icon: "Shield",
    },
    {
        id: 8,
        title: "Autonomous AI Agent + Automation Workflow with n8n & Telegram",
        category: "Achievement",
        role: "AI Agent & Automation Architect",
        period: "2026",
        organization: "Personal AI Research",
        badge: "Agentic Automation",
        summary: "Built my first AI Agent + Automation workflow using n8n and turned it into an autonomous Telegram Personal Assistant Bot. No heavy coding — just smart autonomous workflows.",
        highlights: [
            "Capabilities: Summarizes PDFs, images, and text automatically on command",
            "Conversational intelligence: Chats like a personal assistant and handles real-time queries",
            "Workflow orchestration: Runs fully automated multi-step agent tasks",
            "Pioneering the shift where devs don't just write code — we design autonomous agents that make decisions",
        ],
        techStack: ["n8n", "AI Agents", "LLMs", "Telegram API", "Workflow Automation", "Python"],
        link: "https://github.com/techabbayi",
        icon: "Cpu",
    },
    {
        id: 9,
        title: "Diksuchi AI Webinar – 'Build Your First Website With AI (Zero Coding)'",
        category: "Achievement",
        role: "Webinar Lead & Creator",
        period: "2026",
        organization: "Diksuchi EdTech • YouTube",
        badge: "Live Masterclass",
        summary: "Broadcasted Day 1 of the Diksuchi AI Webinar live on YouTube: 'Build Your First Website With AI (Zero Coding)', enabling non-technical learners and students to build functional web applications.",
        highlights: [
            "Day 1 Webinar: 'Build Your First Website With AI (Zero Coding)' now streaming on YouTube",
            "Practical step-by-step guidance on zero-code development using AI tools",
            "Empowering students and creators to build and publish web solutions with zero barriers",
        ],
        techStack: ["AI Web Building", "Zero Coding", "YouTube Live", "EdTech Training", "Public Education"],
        link: "https://www.youtube.com/@DiksuchiEdTech",
        icon: "Video",
    },
];

// Writing/Thoughts
export const writings = [
    {
        id: 1,
        title: "Why Privacy Matters in the Digital Age",
        excerpt: "In a world where data is currency, protecting our privacy isn't just about security—it's about preserving our fundamental rights and freedoms.",
        category: "Privacy",
        tags: ["DigitalRights", "Security", "Freedom"],
        date: "January 2024",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "The Power of Open Source",
        excerpt: "Open source isn't just about free software. It's about collaboration, transparency, and building technology that serves everyone.",
        category: "Open Source",
        tags: ["Collaboration", "Software", "Community"],
        date: "December 2023",
        readTime: "4 min read",
    },
    {
        id: 3,
        title: "Code as Activism",
        excerpt: "Every line of code we write is a choice. We can build systems that empower people or systems that exploit them. The choice is ours.",
        category: "Activism",
        tags: ["Ethics", "Society", "Code"],
        date: "November 2023",
        readTime: "6 min read",
    },
];

export const creatorProjects = [
    {
        title: "Terminal Echoes",
        description: "A digital audio experience exploring the sounds of hardware and obsolete computing machines.",
        type: "Sound Design",
        icon: "Mic",
    },
    {
        title: "Coded Verses",
        description: "An experimental poetry collection generated through recursive algorithms and pattern recognition.",
        type: "Generative Art",
        icon: "Code2",
    },
    {
        title: "The Clean Grid",
        description: "A minimalist photography series capturing the intersection of brutalist architecture and digital interfaces.",
        type: "Visual Storytelling",
        icon: "Camera",
    },
    {
        title: "Logic Flows",
        description: "High-definition video essays documenting the history of logic gates and binary systems.",
        type: "Motion Design",
        icon: "Play",
    },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CERTIFICATES & CREDENTIALS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export interface CertificateItem {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    link: string;
    category?: string;
    description?: string;
}

export const certificates: CertificateItem[] = [
    {
        id: 1,
        title: "AI for Marketing Workshop",
        issuer: "The Economic Times",
        date: "2026",
        credentialId: "ET-AIM-2026",
        link: "#",
        category: "AI & Growth",
        description: "Creating AI-powered marketing creatives (Google Flow, Gemini & Omni), building AI Agents with HeyGen & ElevenLabs, and designing automated marketing campaign systems.",
    },
    {
        id: 2,
        title: "Certificate of Appreciation – Har Ghar Tiranga 2026 🇮🇳",
        issuer: "Ministry of Culture, Government of India",
        date: "2026",
        credentialId: "HGT-GOI-2026",
        link: "#",
        category: "National Honor",
        description: "Honored with a Certificate of Appreciation for successfully participating in Har Ghar Tiranga 2026 dedicated to the spirit of Vande Mataram.",
    },
    {
        id: 3,
        title: "Cyber Safety Pledge 2026 – Cyber-Safe India",
        issuer: "Ministry of Home Affairs (MHA) & I4C / MyGov",
        date: "2026",
        credentialId: "MHA-I4C-CSP-2026",
        link: "#",
        category: "Cybersecurity",
        description: "Official pledge with the Indian Cyber Crime Coordination Centre (I4C) reaffirming safe online practices, threat awareness, and student cybersecurity advocacy.",
    },
    {
        id: 4,
        title: "Zero to AI Tester: End-to-End Automation with Kane AI",
        issuer: "TestMu AI by GeeksforGeeks",
        date: "March 2026",
        credentialId: "GFG-KANE-AI-2026",
        link: "#",
        category: "QA & Testing",
        description: "Comprehensive hands-on training in end-to-end automation testing, modern QA workflows, and Kane AI-driven testing tooling.",
    },
    {
        id: 5,
        title: "YUVA AI For All",
        issuer: "Tata Consultancy Services (TCS) iON & IndiaAI Mission",
        date: "2026",
        credentialId: "TCS-ION-INDIAAI-2026",
        link: "#",
        category: "Artificial Intelligence",
        description: "Foundational AI competencies and understanding of AI's cross-industry transformation under the Government of India's IndiaAI Mission.",
    },
    {
        id: 6,
        title: "Claude Code in Action",
        issuer: "Anthropic / Claude",
        date: "2026",
        credentialId: "CLAUDE-CODING-2026",
        link: "#",
        category: "Developer Tools",
        description: "Mastery in AI-collaborative software engineering: using Claude to write, debug, refactor, and architect production systems with high speed.",
    },
    {
        id: 7,
        title: "Technology Virtual Experience Program",
        issuer: "Deloitte Australia (via Forage)",
        date: "2026",
        credentialId: "DELOITTE-AU-2026",
        link: "#",
        category: "Enterprise Systems",
        description: "Engineered code to unify multiple telemetry streams into a single structured schema; authored formal software proposal for a secure factory-monitoring intranet.",
    },
    {
        id: 8,
        title: "AI Skills House Program — Coursera & Google",
        issuer: "Indian Institute of Creative Technologies (IICT)",
        date: "2026",
        credentialId: "IICT-COURSERA-GOOGLE-2026",
        link: "#",
        category: "AI & Productivity",
        description: "Dual certifications: 'Introduction to AI' and 'Maximize Productivity with AI Tools' in collaboration with Google and Coursera.",
    },
    {
        id: 9,
        title: "The Quiet Power Quiz — Conscious Leadership",
        issuer: "Mahindra Group (#SheIsOnTheRise)",
        date: "2026",
        credentialId: "MAHINDRA-LEAD-2026",
        link: "#",
        category: "Leadership",
        description: "Conscious leadership assessment emphasizing empathetic decisions, creating space for teams, shared credit, and supporting others to rise.",
    },
    {
        id: 10,
        title: "AI Sashakt Badge — AI Responsibility Pledge",
        issuer: "IndiaAI Mission, MeitY & Intel India",
        date: "2026",
        credentialId: "INDIA-AI-SASHAKT-2026",
        link: "#",
        category: "Responsible AI",
        description: "Awarded under the India AI Impact Summit 2026 for taking the national pledge toward safe, ethical, and human-centric AI innovation.",
    },
    {
        id: 11,
        title: "Send Your Name with Artemis II Flight Manifest",
        issuer: "NASA (National Aeronautics and Space Administration)",
        date: "2026",
        credentialId: "NASA-ARTEMIS-II-MANIFEST",
        link: "#",
        category: "Aerospace",
        description: "Official registration in NASA's Artemis II flight manifest, traveling aboard the Orion spacecraft on the first crewed lunar mission of the 21st century.",
    },
    {
        id: 12,
        title: "AI4Andhra Police National Hackathon",
        issuer: "Andhra Pradesh Police Dept & 4Sight AI",
        date: "2026",
        credentialId: "AP-POLICE-AI4A-2026",
        link: "#",
        category: "Civic AI & Security",
        description: "36-hour national hackathon by AP Police & 4Sight AI; developed GenAI news-feed intelligence (vernacular & English) for law enforcement with Team Tech SyndiKate.",
    },
    {
        id: 13,
        title: "Code Vipassana – Season 10: AI Agents",
        issuer: "Code Vipassana (Google Cloud Ecosystem)",
        date: "2026",
        credentialId: "CV-S10-AGENTS-2026",
        link: "#",
        category: "Cloud & AI Agents",
        description: "Intensive hands-on training in Data-Driven AI Agents, serverless runtimes, cloud databases, open-source agent frameworks, and Google Cloud AI tools.",
    },
    {
        id: 14,
        title: "Complete WordPress Masterclass & Web Engineering",
        issuer: "WordPress Academy / Training",
        date: "2025",
        credentialId: "WP-DEV-2025",
        link: "#",
        category: "Web Development",
        description: "Full-stack WordPress architecture: custom themes, dynamic blogs, ecommerce systems, localhost-to-live migrations, and security & backup protocols.",
    },
    {
        id: 15,
        title: "UI/UX Design with Figma and Adobe XD",
        issuer: "Udemy (Marcus Menti, Zechariah Tech)",
        date: "2025",
        credentialId: "UDEMY-UIUX-2025",
        link: "#",
        category: "UI/UX Design",
        description: "UI/UX design principles, high-fidelity Figma prototyping, wireframing & mockups in Adobe XD, usability testing, and empathetic interface design.",
    },
    {
        id: 16,
        title: "Introduction to Ethical Hacking",
        issuer: "LinkedIn Learning",
        date: "2025",
        credentialId: "LINKEDIN-ETHICAL-HACK-2025",
        link: "#",
        category: "Cybersecurity",
        description: "Cybersecurity foundations, ethical hacking methodologies, vulnerability assessment, penetration testing techniques, and responsible defense.",
    },
    {
        id: 17,
        title: "Network Security Certificate",
        issuer: "Great Learning",
        date: "2024",
        credentialId: "GL-NS-2024",
        link: "#",
        category: "Network Defense",
        description: "Network security protocols, traffic analysis, access control systems, and enterprise threat mitigation.",
    },
    {
        id: 18,
        title: "Cybersecurity Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "2023",
        credentialId: "IBM-CF-2023",
        link: "#",
        category: "Cybersecurity",
        description: "Fundamental cybersecurity protocols, encryption standards, threat modeling, and incident response.",
    },
];

export const about = {
    bio: "I'm a programmer with a deep focus on security, privacy, and building tools that empower people. I believe technology should serve humanity, not the other way around. My work spans software development, cybersecurity, and digital activism—always with the goal of making the internet a safer, more open place for everyone.",
    highlights: [
        "Building secure, privacy-focused applications",
        "Passionate about digital rights and internet freedom",
        "Active contributor to open-source security tools",
        "Advocate for ethical technology and user empowerment",
    ],
};
