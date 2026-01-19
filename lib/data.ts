// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO DATA
// Used by both Hacker Theme and Designer Theme
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const personalInfo = {
    name: "Lokeswara Muthumula",
    role: "Programmer • Cyber Activist • Writer",
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
    role: "Programmer. Cyber Activist. Writer.",
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

export const projects = [
    {
        id: 1,
        title: "NeoShare",
        category: "Secure Communication",
        description: "Fast, secure, and easy-to-use file-sharing web app that allows users to upload files and share them using a QR code or a 4-digit access code. No sign-up required—just upload, share, and download!",
        techStack: ["Python", "Flask", "QR Code", "Security"],
        github: "https://github.com/techabbayi/NeoShare-FileSharing-with-QR",
        live: null,
        featured: true,
    },
    {
        id: 2,
        title: "NeoShieldX",
        category: "Military-Grade Cryptography",
        description: "AI-assisted file vault system combining AES-256-GCM with RSA-4096 hybrid wrapping. Supports remote wipe, auto expiry, and secure deletion. Powered by the ARC47 HexaCore Engine™.",
        techStack: ["Python", "Cryptography", "Security", "AI"],
        github: "https://github.com/techabbayi/NeoSheildX",
        live: null,
        featured: true,
    },
    {
        id: 3,
        title: "ARC – Advanced WebScan",
        category: "Security Auditing",
        description: "Automated security scanner for web applications. Identifies vulnerabilities using Flask and BeautifulSoup parsing to detect critical security flaws in target systems.",
        techStack: ["Python", "Flask", "BeautifulSoup", "Security"],
        github: "https://github.com/techabbayi/ARC-Advance-WebScan",
        live: null,
        featured: false,
    },
    {
        id: 4,
        title: "AI-Terminal CheatSheet",
        category: "Developer Efficiency",
        description: "CLI-based AI-powered developer cheat sheet system. Generates concise references for React, Python, and JavaScript directly in the terminal—no browser required.",
        techStack: ["Python", "AI", "CLI", "Shell"],
        github: "https://github.com/kalviumcommunity/AI-CLI-CheatSheet.git",
        live: null,
        featured: false,
    },
    {
        id: 5,
        title: "Folder Launcher",
        category: "Productivity Tools",
        description: "Desktop utility built with Python + Flask to instantly open frequently used folders via a modern browser-based interface, bridging OS and web workflows.",
        techStack: ["Python", "Flask", "Desktop Utility"],
        github: "https://github.com/techabbayi/Folder-Launcher-Python",
        live: null,
        featured: false,
    },
];

// Designer-specific projects (same projects, editorial presentation)
export const designProjects = [
    {
        id: 1,
        title: "NeoShare",
        category: "Secure Communication",
        intent: "Make secure file transfer as effortless as scanning a QR code.",
        process: "Engineered a dual-key system using QR codes and 4-digit passcodes for frictionless sharing without compromising integrity.",
        outcome: "A minimalist, high-speed transfer platform that eliminates the need for user accounts.",
        year: "2024",
        featured: true,
    },
    {
        id: 2,
        title: "NeoShieldX",
        category: "Military-Grade Cryptography",
        intent: "Define the next generation of personal data sovereignty.",
        process: "Integrated the ARC47 HexaCore Engine™ to manage complex encryption layers including AES-256 and RSA-4096.",
        outcome: "A future-proof vault system ready for the quantum cryptography era.",
        year: "2024",
        featured: true,
    },
    {
        id: 3,
        title: "ARC – Advanced WebScan",
        category: "Security Auditing",
        intent: "Democratize industrial-strength web security scanning.",
        process: "Utilized Flask and BeautifulSoup to build an intelligent crawler capable of identifying deep-seated XSS and SQLi patterns.",
        outcome: "An accessible yet powerful auditing tool that simplifies vulnerability management.",
        year: "2023",
        featured: false,
    },
    {
        id: 4,
        title: "AI-Terminal CheatSheet",
        category: "Developer Efficiency",
        intent: "Eliminate context-switching for developers by bringing documentation into the terminal.",
        process: "Developed a lightweight CLI that leverages LLMs to generate context-aware code snippets and cheatsheets.",
        outcome: "A significant boost in developer productivity by reducing the need for external searches.",
        year: "2024",
        featured: false,
    },
    {
        id: 5,
        title: "Folder Launcher",
        category: "Productivity Tools",
        intent: "Bridge the gap between browser-based workflows and local file management.",
        process: "Created a Python + Flask backend to securely interface with the OS file system via a modern web UI.",
        outcome: "A streamlined utility that allows for instantaneous directory navigation through a browser.",
        year: "2024",
        featured: false,
    },
];

// Writing/Thoughts
export const writings = [
    {
        id: 1,
        title: "Why Privacy Matters in the Digital Age",
        excerpt: "In a world where data is currency, protecting our privacy isn't just about security—it's about preserving our fundamental rights and freedoms.",
        date: "January 2024",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "The Power of Open Source",
        excerpt: "Open source isn't just about free software. It's about collaboration, transparency, and building technology that serves everyone.",
        date: "December 2023",
        readTime: "4 min read",
    },
    {
        id: 3,
        title: "Code as Activism",
        excerpt: "Every line of code we write is a choice. We can build systems that empower people or systems that exploit them. The choice is ours.",
        date: "November 2023",
        readTime: "6 min read",
    },
];

export const certificates = [
    {
        id: 1,
        title: "Network Security Certificate",
        issuer: "Great Learning",
        date: "2024",
        credentialId: "GL-NS-2024",
        link: "#",
    },
    {
        id: 2,
        title: "Cybersecurity Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "2023",
        credentialId: "IBM-CF-2023",
        link: "#",
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
