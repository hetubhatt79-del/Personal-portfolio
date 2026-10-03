export interface Skill {
  id: string;
  name: string;
  category: 'Programming' | 'Web Development' | 'Tools & Methods' | 'AI & Future';
  level: 'Beginner' | 'Learning' | 'Exploring' | 'Currently Exploring';
  levelColor: string;
  description: string;
  tags: string[];
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Programming' | 'Web Development' | 'Developer Tools' | 'AI & Design';
  status: 'Regularly Used' | 'Currently Learning';
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: 'Active Project' | 'Practice Project' | 'In Progress' | 'Planned';
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export interface Milestone {
  id: string;
  stage: string;
  title: string;
  description: string;
  period: string;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  skillsGained: string[];
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: string;
}

export interface RadarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  status: string;
  type: 'terminal' | 'visual' | 'nodes';
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    role: string;
    stage: string;
    classYear: string;
    collegeStage: string;
    tagline: string;
    shortBio: string;
    fullBio: string[];
    education: {
      degree: string;
      major: string;
      institutionNote: string;
      seniorSecondary: string;
      location: string;
    };
    interests: string[];
    availability: string;
    email: string;
    avatar?: string;
    social: {
      github: string;
      linkedin: string;
      instagram: string;
    };
  };
  skills: Skill[];
  techStack: TechItem[];
  projects: Project[];
  journey: Milestone[];
  hobbies: Hobby[];
  currentlyExploring: RadarItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hetu Bhatt",
    monogram: "HB",
    role: "BTech CSE Core Student | Aspiring Software Developer",
    stage: "First-Year Engineering Student",
    classYear: "Class of 2029/2030",
    collegeStage: "BTech CSE Core • 1st Year",
    tagline: "Learning Today. Building Tomorrow.",
    shortBio: "An aspiring developer exploring code, technology, and creative ways to solve real-world problems.",
    avatar: "/profile.jpg",
    fullBio: [
      "I am a first-year Computer Science and Engineering student driven by genuine curiosity for how software transforms ideas into reality.",
      "Having completed my senior secondary education from RBSE in Banswada, Rajasthan, I have stepped into the world of engineering to build solid foundations in computational logic, systems programming, and modern software development.",
      "Right now, I spend my time mastering the fundamentals of C programming, experimenting with web technologies, and discovering modern developer workflows. I believe in steady, disciplined growth — learning core principles today to build impactful software tomorrow."
    ],
    education: {
      degree: "Bachelor of Technology (BTech)",
      major: "Computer Science and Engineering (Core)",
      institutionNote: "First-Year Engineering Student",
      seniorSecondary: "Senior Secondary (RBSE)",
      location: "Banswada, Rajasthan"
    },
    interests: [
      "Software Development",
      "Artificial Intelligence & ML Basics",
      "Core Computer Science & Logic",
      "Modern Web Technologies"
    ],
    availability: "Open to learning, collaboration & student tech initiatives",
    email: "hetubhatt79@gmail.com",
    social: {
      github: "https://github.com/hetubhatt79-del",
      linkedin: "https://www.linkedin.com/in/hetu-bhatt-547633425?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/hetubhatt_placeholder"
    }
  },

  skills: [
    {
      id: "c-lang",
      name: "C Programming",
      category: "Programming",
      level: "Beginner",
      levelColor: "border-violet-500/40 text-violet-400 bg-violet-500/10",
      description: "Writing console programs, understanding loops, conditional control flow, functions, and fundamental memory basics.",
      tags: ["Variables & Types", "Control Structures", "Functions", "Basic Pointers"]
    },
    {
      id: "html5",
      name: "HTML",
      category: "Web Development",
      level: "Beginner",
      levelColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      description: "Structuring clean, semantic web documents with proper tags, forms, media, and accessible element hierarchy.",
      tags: ["Semantic HTML", "Document Structure", "Forms & Inputs", "Accessibility Basics"]
    },
    {
      id: "css3",
      name: "CSS",
      category: "Web Development",
      level: "Beginner",
      levelColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      description: "Styling web interfaces with color theory, typography, Box Model, Flexbox, and CSS Grid foundations.",
      tags: ["Box Model", "Flexbox", "CSS Grid", "Gradients & Transitions"]
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Web Development",
      level: "Currently Exploring",
      levelColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      description: "Exploring variables, functions, event listeners, and DOM manipulation to make static pages interactive.",
      tags: ["Variables (let/const)", "Functions", "DOM Events", "Array Methods"]
    },
    {
      id: "problem-solving",
      name: "Problem Solving",
      category: "Programming",
      level: "Learning",
      levelColor: "border-violet-500/40 text-violet-400 bg-violet-500/10",
      description: "Breaking complex questions into logical steps, writing pseudo-code, and tackling algorithmic puzzles.",
      tags: ["Algorithmic Logic", "Flowcharts", "Dry Running", "Code Tracing"]
    },
    {
      id: "git-github",
      name: "Git & GitHub",
      category: "Tools & Methods",
      level: "Exploring",
      levelColor: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      description: "Exploring version control essentials: git repositories, commit histories, branching, and pushing code to GitHub.",
      tags: ["git init/clone", "Commits", "Push & Pull", "Repository Management"]
    },
    {
      id: "responsive-design",
      name: "Responsive Web Design",
      category: "Web Development",
      level: "Learning",
      levelColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      description: "Creating fluid mobile-friendly layouts using CSS media queries, flexible viewports, and modern UI practices.",
      tags: ["Media Queries", "Mobile-First", "Fluid Typography", "Adaptive Layouts"]
    },
    {
      id: "ai-prompting",
      name: "AI Tools & Prompt Engineering",
      category: "AI & Future",
      level: "Exploring",
      levelColor: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      description: "Using modern AI developer assistants, code explanation tools, and prompt crafting to accelerate learning.",
      tags: ["Prompt Crafting", "Code Debugging with AI", "Tool Exploration", "AI Workflows"]
    }
  ],

  techStack: [
    {
      id: "c",
      name: "C Language",
      category: "Programming",
      status: "Regularly Used",
      icon: "Code2",
      description: "Primary college language for computer science fundamentals, logic building, and low-level understanding."
    },
    {
      id: "html5-tech",
      name: "HTML5",
      category: "Web Development",
      status: "Regularly Used",
      icon: "FileCode",
      description: "Standard markup language used to build semantic structures for modern web applications."
    },
    {
      id: "css3-tech",
      name: "CSS3",
      category: "Web Development",
      status: "Regularly Used",
      icon: "Palette",
      description: "Styling system used for layout, typography, glassmorphism accents, and smooth transitions."
    },
    {
      id: "js-tech",
      name: "JavaScript",
      category: "Programming",
      status: "Currently Learning",
      icon: "Zap",
      description: "The language of the web, currently being learned to add client-side dynamic behaviour."
    },
    {
      id: "git-tech",
      name: "Git",
      category: "Developer Tools",
      status: "Currently Learning",
      icon: "GitBranch",
      description: "Distributed version control system to track file revisions and manage source code safely."
    },
    {
      id: "github-tech",
      name: "GitHub",
      category: "Developer Tools",
      status: "Currently Learning",
      icon: "Github",
      description: "Cloud hosting service for Git repositories, project collaboration, and open-source exploration."
    },
    {
      id: "vscode-tech",
      name: "Visual Studio Code",
      category: "Developer Tools",
      status: "Regularly Used",
      icon: "Terminal",
      description: "Primary IDE configured with modern developer extensions, themes, and integrated terminal."
    },
    {
      id: "figma-tech",
      name: "Figma",
      category: "AI & Design",
      status: "Currently Learning",
      icon: "Layers",
      description: "Modern design tool explored to inspect UI components, layouts, and visual design assets."
    },
    {
      id: "ai-tools-tech",
      name: "AI Developer Tools",
      category: "AI & Design",
      status: "Regularly Used",
      icon: "Bot",
      description: "Leveraging generative AI and LLM assistants for concept clarification, syntax guidance, and study assistance."
    }
  ],

  projects: [
    {
      id: "portfolio-site",
      title: "Personal Portfolio Website",
      tagline: "A modern, dark-futuristic digital portfolio showcasing my technical journey.",
      description: "Designed and built from scratch as a first-year student to establish my online presence. Features a cyberpunk developer aesthetic, clean semantic markup, custom CSS animations, and fully responsive layout.",
      status: "Active Project",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      githubUrl: "https://github.com/hetubhatt79-del/personal-portfolio",
      demoUrl: "#",
      highlights: [
        "Minimal cyberpunk & dark futuristic UI with neon cyan & electric violet accents",
        "Mobile-first responsive architecture with smooth navigation",
        "Integrated interactive particle background and accessible controls"
      ]
    },
    {
      id: "c-practice-repo",
      title: "C Programming Practice Lab",
      tagline: "A structured repository of foundational C programs and algorithmic exercises.",
      description: "Hands-on implementation of core computational problems created during my first semester. Includes arithmetic algorithms, pattern generators, array manipulations, matrix calculations, and basic pointer drills.",
      status: "Practice Project",
      technologies: ["C99", "GCC", "VS Code", "Terminal"],
      githubUrl: "https://github.com/hetubhatt79-del/c-programming-practice",
      highlights: [
        "Categorized modules: Basics, Loops, Arrays, Strings, and Functions",
        "Includes documented comments explaining the logic step-by-step",
        "Regularly updated alongside college coursework"
      ]
    },
    {
      id: "mini-web-experiments",
      title: "Mini Web Experiments",
      tagline: "A sandbox collection of interactive HTML, CSS, and early JavaScript experiments.",
      description: "Curated collection of small frontend prototypes testing creative layouts, custom hover effects, CSS keyframe animations, and beginner DOM manipulation scripts.",
      status: "In Progress",
      technologies: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Flexbox", "Grid"],
      githubUrl: "https://github.com/hetubhatt79-del/mini-web-experiments",
      highlights: [
        "Explores glassmorphism cards, animated buttons, and responsive forms",
        "Hands-on practice applying CSS variables and semantic HTML tags",
        "Testing interactive UI micro-interactions"
      ]
    },
    {
      id: "dsa-tracker",
      title: "Problem Solving & Logic Hub",
      tagline: "Planned milestone to track algorithmic questions, flowcharts, and logic solutions.",
      description: "An upcoming organized repository to document solutions to introductory data structure and algorithm challenges as I advance through my CSE curriculum.",
      status: "Planned",
      technologies: ["C", "Algorithm Design", "Time Complexity Analysis"],
      githubUrl: "https://github.com/hetubhatt79-del/dsa-logic-hub",
      highlights: [
        "Focus on fundamental recursion, sorting, and searching mechanisms",
        "Step-by-step problem breakdown notes",
        "Planned for upcoming academic semesters"
      ]
    }
  ],

  journey: [
    {
      id: "step-1",
      stage: "Milestone 01",
      title: "Senior Secondary to Engineering",
      period: "Early 2024 / Admission",
      description: "Graduated senior secondary from RBSE in Banswada, Rajasthan, with strong mathematical inclination. Successfully embarked on the BTech Computer Science & Engineering degree.",
      status: "Completed",
      skillsGained: ["Academic Discipline", "Mathematical Foundations", "Engineering Mindset"]
    },
    {
      id: "step-2",
      stage: "Milestone 02",
      title: "Programming Fundamentals & C",
      period: "First Semester",
      description: "Dived into core programming using C. Learned how memory, variables, conditionals, loops, and modular functions execute at the machine level.",
      status: "Completed",
      skillsGained: ["C Language Syntax", "Algorithm Flowcharts", "Debugging & Terminal Compilation"]
    },
    {
      id: "step-3",
      stage: "Milestone 03",
      title: "Exploring Web Development",
      period: "Current Focus",
      description: "Began journey into frontend engineering. Building clean HTML structures, mastering CSS layouts (Flexbox & Grid), and experimenting with interactive scripts.",
      status: "In Progress",
      skillsGained: ["Semantic HTML", "Modern CSS & Flexbox", "Responsive Design Principles"]
    },
    {
      id: "step-4",
      stage: "Milestone 04",
      title: "Building the First Portfolio",
      period: "Current Focus",
      description: "Synthesizing learning by constructing a personal developer brand and portfolio. Practicing Git version control and documenting technical growth.",
      status: "In Progress",
      skillsGained: ["Version Control (Git)", "Component Architecture", "Design System Thinking"]
    },
    {
      id: "step-5",
      stage: "Milestone 05",
      title: "Advancing into DSA & Full-Stack",
      period: "Upcoming Semesters",
      description: "Targeting deeper data structures & algorithms (stacks, queues, trees, graphs) and progressing towards full-stack application development.",
      status: "Upcoming",
      skillsGained: ["Data Structures & Algorithms", "JavaScript Deep Dive", "Backend Foundations"]
    }
  ],

  hobbies: [
    {
      id: "hobby-1",
      title: "Exploring New Technology",
      description: "Following tech announcements, hardware breakthroughs, emerging dev tools, and open-source releases.",
      iconName: "Compass",
      accent: "from-violet-500/20 to-purple-500/10"
    },
    {
      id: "hobby-2",
      title: "Learning About AI",
      description: "Curious about how neural networks, generative models, and LLMs work, and how they can empower software builders.",
      iconName: "Cpu",
      accent: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: "hobby-3",
      title: "Coding & Experimenting",
      description: "Testing out small code snippets, solving logic exercises, and turning blank editors into working mini programs.",
      iconName: "Code",
      accent: "from-emerald-500/20 to-teal-500/10"
    },
    {
      id: "hobby-4",
      title: "Discovering Digital Tools",
      description: "Finding productivity enhancers, elegant CLI tools, keyboard shortcuts, and modern IDE workflows.",
      iconName: "Wrench",
      accent: "from-pink-500/20 to-rose-500/10"
    },
    {
      id: "hobby-5",
      title: "Listening to Music",
      description: "Immersing in ambient, lo-fi, and synthwave soundtracks while thinking through code and study sessions.",
      iconName: "Headphones",
      accent: "from-amber-500/20 to-orange-500/10"
    },
    {
      id: "hobby-6",
      title: "Learning New Skills",
      description: "Engaging in continuous self-study, reading documentation, watching tech walkthroughs, and expanding horizons.",
      iconName: "Sparkles",
      accent: "from-violet-500/20 to-cyan-500/10"
    }
  ],

  currentlyExploring: [
    {
      id: "radar-1",
      title: "Programming Fundamentals",
      subtitle: "C Language & Computational Logic",
      description: "Focusing on memory representations, pointer arithmetic fundamentals, algorithmic problem decomposition, and structured programming paradigms.",
      topics: ["Pointers & Addresses", "Array Traversal", "Recursive Thinking", "Algorithmic Efficiency"],
      status: "Active Daily Focus",
      type: "terminal"
    },
    {
      id: "radar-2",
      title: "Modern Web Development",
      subtitle: "Responsive UI & Interactive Layouts",
      description: "Exploring CSS modern layouts (Grid/Flexbox), component hierarchies, DOM manipulation in JavaScript, and developer-friendly design systems.",
      topics: ["Modern CSS Architecture", "Flexbox & Grid", "DOM Scripting", "Accessibility (a11y)"],
      status: "Active Exploration",
      type: "visual"
    },
    {
      id: "radar-3",
      title: "AI & Emerging Technology",
      subtitle: "Prompt Engineering & Intelligent Tools",
      description: "Investigating how modern AI assistants, developer co-pilots, and prompt design can accelerate learning, code comprehension, and problem solving.",
      topics: ["Prompt Engineering", "AI-assisted Debugging", "Developer Productivity", "Machine Learning Basics"],
      status: "Continuous Discovery",
      type: "nodes"
    }
  ]
};
