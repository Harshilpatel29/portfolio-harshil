import { title } from "framer-motion/client";
import {
  mobile,
  backend,
  brainybeam,
  oasisinfobyte,
  web,
  javascript,
  html,
  css,
  java,
  express,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  blog,
  nexora,
  ecommerce,
  rishabhSoftware,
  munimlogo,
  bootstrap
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer (Basic)",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Rishabh Software ",
    icon: rishabhSoftware,
    iconBg: "#383E56",
    date: "Jan 2024 - July 2024",
    points: [
      "During my six-month internship at Rishabh Software, I gained hands-on experience in React.js, JavaScript, and modern UI development. I contributed to a Study Notion–like platform where I worked on dashboards, authentication flows, course modules, and profile management. This experience helped me strengthen my understanding of state management, API integration, reusable code patterns, and real-world software development workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Munim Software",
    icon: munimlogo,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "At Munim Software, a product-based company focused on GST and accounting solutions, I work as a Software Engineer. I contribute to building and improving key product features, including real-time GST workflows, dashboard operations, and API-driven data processing. I work with React.js, Hooks, and performance optimization techniques to enhance product reliability, usability, and overall architecture.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EcommerceMart",
    description:
      "A modern e-commerce platform built with React and Tailwind. Includes product listing, real-time stock updates, and a smooth cart workflow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "html5",
        color: "orange-text-gradient",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "reactrouter",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Harshilpatel29/ecommerce-app",
  },
  {
    name: "Nexora",
    description:
      "A MERN-stack language-exchange app with secure authentication, real-time chat using WebSockets, and a clean dashboard experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node/express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nexora,
    source_code_link: "https://github.com/Harshilpatel29/nexora",
  },
];

export { services, technologies, experiences, testimonials, projects };