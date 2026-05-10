import { Linkedin, Mail, User, X, Zap } from "lucide-react";
import {
  athonLogo,
  discord,
  dribble,
  facebook,
  linkedInIcon,
  notionIcon,
  pinterest,
  pixelworksLogo,
  velox_ui,
  tarqa_ui,
  snapchat,
  spotify,
  vortexLogo,
  webDesignIcon,
  webDevIcon,
  graphicDesignIcon,
  seoOptIcon,
  pythonLogo,
  dockerLogo,
  reactLogo,
  trophyIcon,
  aiLogo,
  fullstackLogo,
  techLogo,
  stackIcon,
  zapIcon,
} from "@/app/assets/assets";
import { Github, Instagram } from 'lucide-react'

import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes, myStackTypes, socialBrandsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: <Linkedin size={22} />,
    link: 'https://www.linkedin.com/in/prathamrastogi'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/pratham-r'
  },
  {
    id: 3,
    title: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
      </svg>
    ),
    link: 'https://x.com/prathamxtwt'
  }
]

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Monthly API Requests",
    value: 10,
    description: "Serving production traffic for TarqaAI",
    suffix: "k+"
  },
  {
    id: 2,
    title: "LLM Providers",
    value: 7,
    description: "Integrated major AI model providers",
    suffix: "+"
  },
  {
    id: 3,
    title: "Database Latency",
    value: 30,
    description: "Reduced by index optimization",
    suffix: "% ↓"
  },
  {
    id: 4,
    title: "Students Trained",
    value: 3000,
    description: "Microsoft & AI workshops",
    suffix: "+"
  },
];

export const myAchievements = [
  {
    id: 0,
    title: "TarqaAI Founder",
    description: "Built and scaled a production multi-LLM gateway serving 10k+ monthly API requests with intelligent model routing.",
    icon: trophyIcon,
  },
  {
    id: 1,
    title: "Ninja Entrepreneur - Coding Ninjas",
    description: "Trained 3000+ students and boosted community engagement by 40%.",
    icon: trophyIcon,
  },
  {
    id: 2,
    title: "Microsoft Learn Student Ambassador",
    description: "Beta level ambassador facilitating workshops on Microsoft technologies.",
    icon: trophyIcon,
  },
  {
    id: 3,
    title: "Database Latency Reduction",
    description: "Reduced database latency by 30% and app crashes by 45% at Formidium through index optimization and query caching.",
    icon: trophyIcon,
  },
  {
    id: 4,
    title: "AI Agent Framework Development",
    description: "Designed agentic architecture using LangChain and PyTorch for intelligent multi-step task execution in VeloxAI.",
    icon: trophyIcon,
  },
  {
    id: 5,
    title: "API Optimization",
    description: "Reduced API response times by 40% using Redis caching and database optimizations at Chyrpe.",
    icon: trophyIcon,
  }
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "Aug 2024 - Mar 2025",
    title: "Backend & Full Stack Engineer",
    company: "Formidium",
    label: 'FinTech',
    description: "Owned backend services for internal financial platforms using Python and FastAPI. Optimized REST APIs with PostgreSQL, reducing database latency by 30%. Architected Dockerized microservices for the Vault platform.",
    link: "formidium.com",
    logo: vortexLogo
  },
  {
    id: 2,
    year: "Aug 2023 - Jan 2024",
    title: "Full Stack Developer Intern",
    company: "Chyrpe",
    label: 'Social Media',
    description: "Shipped production features using React Native, Node.js, and Firebase. Implemented Redis caching and database optimizations, reducing API response times by 40%.",
    link: "chyrpe.com",
    logo: pixelworksLogo
  },
  {
    id: 3,
    year: "Jul 2022 - Jun 2024",
    title: "Microsoft Learn Student Ambassador",
    company: "Microsoft",
    label: 'Community',
    description: "Facilitated workshops on Microsoft technologies and boosted community engagement.",
    link: "microsoft.com",
    logo: athonLogo
  }
]

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Python",
    description: "FastAPI, Microservices, AI",
    logo: pythonLogo,
    link: "https://www.python.org",
  },
  {
    id: 2,
    title: "TypeScript",
    description: "React, Next.js, Node.js",
    logo: reactLogo,
    link: "https://www.typescriptlang.org",
  },
  {
    id: 3,
    title: "Docker",
    description: "Containerization & Scaling",
    logo: dockerLogo,
    link: "https://www.docker.com",
  },
  {
    id: 4,
    title: "AWS",
    description: "Cloud Infrastructure (EC2, S3)",
    logo: stackIcon, // Generic stack icon if AWS not available
    link: "https://aws.amazon.com",
  },
  {
    id: 5,
    title: "PostgreSQL",
    description: "Database Design & Optimization",
    logo: notionIcon, // Generic placeholder
    link: "https://www.postgresql.org",
  },
]

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'AI & LLM Integration',
    description: 'Building intelligent systems using OpenAI, Claude, and Gemini APIs. Expertise in LangChain and multi-LLM gateways.',
    icon: aiLogo,
    link: '/services'
  },
  {
    id: 2,
    title: 'Backend Architecture',
    description: 'Designing scalable microservices and robust REST APIs with FastAPI and Node.js. Focus on latency and performance.',
    icon: techLogo,
    link: '/services'
  },
  {
    id: 3,
    title: 'Full Stack Development',
    description: 'Creating end-to-end applications with React, Next.js, and Python. Seamlessly connecting AI to UX.',
    icon: fullstackLogo,
    link: '/services'
  },
  {
    id: 4,
    title: 'Technical Training',
    description: 'Trained 3000+ students in Microsoft and AI technologies with a focus on community building.',
    icon: zapIcon,
    link: '/services'
  }
]

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'TarqaAI',
    description: 'Multi-LLM routing platform supporting 7+ major providers with automatic failover.',
    link: 'https://tarqaai.com',
    github: 'https://github.com/pratham-r', // Placeholder or specific repo if known
    Live: 'https://tarqaai.com',
    type: 'AI Infrastructure',
    theme: 'Dark',
    tech: 'Python (FastAPI), PostgreSQL, Redis, LangChain',
    pages: 1,
    image: tarqa_ui,
  },
  {
    id: 2,
    title: 'VeloxAI',
    description: 'AI agent automation platform interpreting natural language commands to orchestrate workflows.',
    link: 'https://veloxai.xyz',
    github: 'https://github.com/pratham-r', // Placeholder
    Live: 'https://veloxai.xyz',
    type: 'AI Agents',
    theme: 'Light',
    tech: 'Python, LangChain, PyTorch, React',
    pages: 1,
    image: velox_ui,
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Web Design',
    price: '$50',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    completedWorks: '25+',
    experience: '5+',
    totalHoursWorked: '500 hours',
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: 'Web Dev',
    price: '$60',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    completedWorks: '30+',
    experience: '6+',
    totalHoursWorked: '420 hours',
    icon: webDevIcon,
  },
  {
    id: 3,
    service: 'Graphic Design',
    price: '$40',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    completedWorks: '40+',
    experience: '8+',
    totalHoursWorked: '328 hours',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$70',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    completedWorks: '20+',
    experience: '4+',
    totalHoursWorked: '223 hours',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "What is your primary tech stack?",
    answer: "I specialize in Python-based backend systems, particularly FastAPI, and AI integration using LangChain and various LLM providers. On the frontend, I work with React, Next.js, and React Native.",
  },
  {
    question: "How do you handle LLM routing in TarqaAI?",
    answer: "I built a fault-tolerant routing layer that supports 7+ major providers (OpenAI, Claude, Gemini, etc.). It uses intelligent failover logic to ensure 99.9% uptime and optimizes for both cost and performance.",
  },
  {
    question: "What kind of AI agents do you build?",
    answer: "In VeloxAI, I'm developing agents that interpret natural language commands and orchestrate multi-step workflows. This involves intelligent task decomposition and backend action mapping using LangChain and PyTorch.",
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes, I'm open to discussing new projects, especially those involving AI automation, backend scaling, or full-stack development. Feel free to reach out via email!",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "Github",
    followers: "50+",
    url: "https://github.com/pratham-r",
    icon: linkedInIcon,
  },
  {
    platform: "LinkedIn",
    followers: "500+",
    url: "https://www.linkedin.com/in/prathamrastogi/",
    icon: linkedInIcon,
  },
];