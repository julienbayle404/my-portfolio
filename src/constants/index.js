import { freeledge, you, openclassrooms } from "../assets/images";
import {
    ai,
    bank,
    contact,
    css,
    desk,
    express,
    figma,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    restaurant,
    sass,
    sofa,
    spotify,
    tailwindcss,
    wordpress
} from "../assets/icons";

export const skills = [
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
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: wordpress,
        name: "WordPress",
        type: "Content Management System",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design Tool",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Front-End Developer",
        company_name: "Freeledge",
        icon: freeledge,
        iconBg: "#333333",
        date: "October 2022 - October 2023",
        points: [
            "Developed and maintained websites using HTML / CSS / JavaScript and other related technologies.",
            "Designed and developed website mockups from scratch using Figma.",
            "Conceived and developed custom WordPress themes, managing the entire process from design to deployment. This involved crafting unique themes, integrating plugins, and ensuring responsive design for optimal user experience.",
            "Participated in code reviews and provided constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Development Student",
        company_name: "OpenClassrooms",
        icon: openclassrooms,
        iconBg: "#7451EB",
        date: "January 2022 - October 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Developer / Front-End Developer",
        company_name: "Your Company",
        icon: you,
        iconBg: "#E6F7FF",
        date: "Coming soon...",
        points: [
            "Let's work together and perhaps you'll be the next company I'll showcase in this section? :)",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/julienbayle404',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/julien-bayle/',
    }
];

export const projects = [
    {
        iconUrl: ai,
        theme: 'btn-back-red',
        name: 'GPT-3 Application',
        description: "Developed a single-page, front-end application in React, showcasing GPT-3's capabilities in a user-friendly web interface.",
        link: 'https://gpt3.julienbayle.fr',
    },
    {
        iconUrl: restaurant,
        theme: 'btn-back-green',
        name: 'Restaurant Application',
        description: 'Constructed a React-based single-page application for a restaurant. It has a classy and sober design, and is fully responsive.',
        link: 'https://restaurant.julienbayle.fr',
    },
    {
        iconUrl: bank,
        theme: 'btn-back-blue',
        name: 'Modern Bank Application',
        description: 'Made the landing page of an application for a modern bank using React, delivering a fully responsive front-end with a pleasant navigation.',
        link: 'https://modernbank.julienbayle.fr',
    },
    {
        iconUrl: spotify,
        theme: 'btn-back-pink',
        name: 'Full Stack Spotify Clone',
        description: 'Built a React-based Spotify clone, featuring a dynamic and user-friendly music streaming interface.',
        link: 'https://spotifyclone.julienbayle.fr',
    },
    {
        iconUrl: desk,
        theme: 'btn-back-black',
        name: 'Freeledge Website',
        description: 'Here is the website I made for the company I worked with. I made the website mockup and front-end, and also helped my colleague for the back-end.',
        link: 'https://freeledge.com/',
    },
    {
        iconUrl: sofa,
        theme: 'btn-back-yellow',
        name: 'E-Commerce Website "Kanap"',
        description: 'This one is a project that I did for my web development studies. Front-end was given, and I had to do the back-end part. Allows us to add different sofas to our cart and then to order them.',
        link: 'https://kanap.julienbayle.fr',
    }
];