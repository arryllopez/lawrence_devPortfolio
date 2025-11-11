import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    kaggle,
    hackhive,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nurseLogo,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    flask,
    fastapi,
    pytorch,
    huggingface,
    mysql,
    docker,
    aws,
    python, 
    java,
    spring,
    cplusplus,
    datenetlogo, 
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
   imageUrl: typescript,
   name: "TypeScript",
   type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: fastapi,
   name: "FastAPI",
   type: "Backend",
 },
 {
    imageUrl: pytorch,
    name: "PyTorch",
   type: "Machine Learning",
  },
  {
   imageUrl: huggingface,
    name: "Hugging Face",
    type: "Machine Learning / NLP",
  },
  {
   imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps / Deployment",
  },
  {
    imageUrl: aws,
   name: "AWS",
   type: "Cloud",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control / Collaboration",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Machine Learning",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
  {
    imageUrl: spring,
    name: "SpringBoot",
    type: "Framework",
  },
    {
    imageUrl: cplusplus,
    name: "C++",
    type: "Programming Language",
  },
  {
    imageUrl : javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl : kaggle,
    name: "Kaggle",
    type: "Data Science",
  }
  
];


// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
  {
    id: 1,
    iconUrl: nurseLogo,
    theme: 'btn-back-blue',
    name: "NurseGPT - Interactive Symptom Classifier",
    duration: "October 2025 - Present",
    technologies: ["Python", "FastAPI", "React", "Three.js"],
    description: `
Designing an AI-driven healthcare platform that enables users to interact with a 3D human body model to mark symptoms and receive real-time diagnostic predictions.
Fine-tuning a ClinicalBERT-based model on a structured disease–symptom dataset (4K records) to classify conditions with improved contextual accuracy.
Built a data preprocessing pipeline that reduces noise and inconsistency by 25%, improving model training stability and label reliability.
Developing a FastAPI backend to serve low-latency inference responses and a React + Three.js frontend for intuitive, anatomy-based symptom input.
Targeting a 15–20% boost in prediction accuracy through iterative model optimization and real-world testing.
    `,
    link : 'https://github.com/arryllopez/NurseGPT',
  },
  {
    id: 2,
    iconUrl: hackhive,
    theme: 'btn-back-yellow',
    name: "StudyTok (Ontario Tech - HackHive 2025)",
    duration: "February 2025",
    technologies: ["React", "Python", "TailwindCSS", "Flask"],
    description: `
Developed an AI-based flashcard app for HackHive 2025 to promote active recall through custom and AI-generated Q&A flashcards.
Designed the frontend using Next.js, React, and Tailwind CSS to create a responsive and sleek user interface.
Developed a Flask backend to record and transcribe user-spoken answers using Google Cloud Speech-to-Text API, achieving 97% transcription accuracy.
Applied fuzzy string matching to grade responses with high precision and integrated Google Gemini 2.0 API to dynamically generate Q&A flashcards.
Enhanced personalized learning experiences through adaptive question generation and feedback loops.
    `,
    link : 'https://github.com/arryllopez/StudyTok',
  },
  {
    id: 3,
    iconUrl: datenetlogo,
    theme: 'btn-back-pink',
    name: "DateNet",
    duration: "November 2024 - December 2024",
    technologies: ["HTML5", "CSS", "JavaScript", "Node.js", "Bcrypt"],
    description: `
Developed a full-stack dating web application for a final project enabling users to create profiles and match based on shared interests and study programs.
Designed a modern, user-friendly interface with HTML, CSS, and JavaScript to deliver a sleek and engaging user experience.
Leveraged a secure Node.js backend using Sequelize ORM, JWT authentication, Bcrypt password hashing, and CORS for frontend-backend communication.
Earned a top grade of 95%, reflecting strong technical skills and successful project delivery.
    `,
    link : 'https://github.com/arryllopez/DateNet',
  },
];



