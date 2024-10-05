import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  angular,
  vuejs,
  astro,
  henry,
  iconoi,
  ikbo,
  laboratoria,
  rcn,
  sunat,
  welcome,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "vue",
    icon: vuejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "astro",
    icon: astro,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior Developer Engineer",
    companyName: "RCN TV",
    icon: rcn,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Leading development and integration of web applications using modern frameworks like React, Astro, Next.js, and Strapi.",
      "Collaborating with cross-functional teams to deliver high-quality products on time.",
      "Developing responsive and adaptive websites for optimized user experience across devices.",
      "Driving SEO optimization efforts to enhance web performance and visibility.",
      "Generation of E2E tests and SonarQube reports to improve code quality."
    ],
  },
  {
    title: "Fullstack Instructor",
    companyName: "HENRY",
    icon: henry,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Teaching frontend programming, including React, Next.js, and backend development with Express and Mongoose DB.",
      "Conducting workshops on NestJS, TypeORM, PostgreSQL, and Docker, empowering students to master backend development.",
      "Mentoring students in fullstack development concepts, best practices, and coding standards.",
    ],
  },
  {
    title: "Software Development Engineer",
    companyName: "ICONOI",
    icon: iconoi,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Sept 2024",
    points: [
      "Maintained and enhanced legacy applications using Grails, Groovy, and Angular.",
      "Collaborated with the J2 team at Consensus Cloud Solutions to ensure applications remained functional and adaptable.",
      "Led frontend development with Angular, focusing on intuitive and responsive UI design.",
      "Improved application robustness and scalability through backend development with Java Spring Boot.",
    ],
  },
  {
    title: "JavaScript Coach",
    companyName: "LABORATORIA",
    icon: laboratoria,
    iconBg: "#383E56",
    date: "March 2023 - June 2024",
    points: [
      "Coached female developers in JavaScript, HTML, CSS, and web development technologies.",
      "Delivered hands-on training sessions with React, Angular, and Node.js, ensuring a comprehensive learning experience.",
      "Supported backend development with Java Spring Boot and testing frameworks like Jest and JUnit.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "ICONOI",
    icon: iconoi,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Jan 2023",
    points: [
      "Led the creation and improvement of user stories and use cases to align technical requirements with user needs.",
      "Developed and maintained applications using Java Spring Boot and Angular.",
      "Utilized testing frameworks such as JUnit and JMeter to ensure reliability and performance.",
      "Developed UML diagrams for the analysis and design phase"
    ],
  },
  {
    title: "Fullstack Developer Jr.",
    companyName: "IKBO",
    icon: ikbo,
    iconBg: "#383E56",
    date: "Jan 2022 - Sept 2022",
    points: [
      "Led the development of mobile applications using React Native.",
      "Developed web applications leveraging React, Vue.js and PHP for the flower industry.",
      "Collaborated on backend and frontend optimization to improve user experience.",
    ],
  },
  {
    title: "Programmer Analyst",
    companyName: "SUNAT",
    icon: sunat,
    iconBg: "#E6DEDD",
    date: "March 2020 - March 2022",
    points: [
      "Specialized in low-code application development using Microsoft PowerApps and Power Automate.",
      "Developed robust web applications with Vue.js and Java Spring Boot.",
      "Led UI/UX design with Balsamiq and Adobe XD, enhancing user experience.",
      "Developed data analytics solutions with PL/SQL Oracle and Excel macros.",
    ],
  },
  {
    title: "Web Developer Intern",
    companyName: "WELCOME ENGLISH",
    icon: welcome,
    iconBg: "#383E56",
    date: "Dec 2019 - March 2020",
    points: [
      "Developed web pages using CSS, HTML5, Bootstrap, and React.",
      "Created multimedia designs using Adobe Suite tools such as Photoshop, Illustrator, and Premiere Pro.",
      "Provided IT support, addressing technical issues and troubleshooting website problems.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
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
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "",
    description: "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
