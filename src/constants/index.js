import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  arrow,
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  react,
  summiz,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
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
];

export const experiences = [
  {
    title: "Junior Web Developer",
    company_name: "Shiloh Software",
    icon: "",
    iconBg: "#accbe1",
    date: "May 2023 - Present: Contract Work",
    points: [
      "Implemented Gamipress to add gamification with Tutor LMS ",
      "Developing and maintaining Wordpress Blog, and subscription based Christian content at my client's website educateforlife.org.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/reuterShawn",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shawn-reuter/",
  },
];

export const projects = [
  {
    iconUrl: arrow,
    theme: "btn-back-blue",
    name: "Mentor Match",
    description:
      "An application to match mentors with students or other programmers eager to improve their skills with the assistance of a mentor. In development with other developers at the Software Developer Academy Pro community.",
    link: "https://github.com/Software-Developer-Academy/mentor-match",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs. Still in development.",
    link: "https://github.com/reuterShawn/ai-summarizer",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-green",
    name: "Anime Vault",
    description:
      "App that leverages NextJS server actions, and showcases an infinite scroll of different anime titles along with framer motion animations.",
    link: "https://anime-vault-git-feat-framer-motion-js-mastery-pro.vercel.app/",
  },
];
