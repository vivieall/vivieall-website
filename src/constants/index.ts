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
  reactjs,
  tailwind,
  nextjs,
  nodejs,
  git,
  figma,
  docker,
  mongodb,
  carrent,
  jobit,
  tripguide,
  angular,
  vuejs,
  astro,
  sass,
  unity,
  henry,
  iconoi,
  ikbo,
  laboratoria,
  hilton,
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
    title: "Technical Leadership",
    icon: creator,
  },
  {
    title: "Senior Frontend Architecture",
    icon: web,
  },
  {
    title: "High-Concurrency Backend",
    icon: backend,
  },
  {
    title: "Media & Digital Products",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
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
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Astro",
    icon: astro,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Canal RCN Television",
    icon: rcn,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Lead high-traffic live media products for voting, contests and prediction modules across major broadcast and digital audience campaigns.",
      "Scaled backend components for peak audience traffic, including migration of critical services from Node.js to Go for stronger throughput and resilience.",
      "Built consumer-facing experiences with Next.js and React, improving SEO, performance and audience engagement across audiovisual content-driven web properties.",
      "Implemented custom Strapi and Payload CMS workflows with SSO, role-based access control and modern SSR/RSC delivery for editorial and audiovisual content operations.",
      "Automated quality and analytics workflows with Playwright, Testify, SonarQube, Python, AWS Glue, Athena and S3.",
    ],
  },
  {
    title: "Senior Web UI Engineer / Technical Lead",
    companyName: "Hilton Worldwide",
    icon: hilton,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Design and develop scalable booking experiences for Hilton Resorts Web using React, TypeScript and GraphQL inside an Nx monorepo.",
      "Build reusable UI architecture patterns with a strong focus on WCAG accessibility, performance, maintainability and responsive booking flows.",
      "Provide technical leadership for the contractor engineering team through code reviews, engineering standards and implementation decisions.",
      "Implement Conductrics A/B testing experiments to optimize conversion-focused customer journeys.",
    ],
  },
  {
    title: "Full Stack Instructor",
    companyName: "Henry Tech",
    icon: henry,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Nov 2024",
    points: [
      "Trained students in React, Next.js, Node.js, Express, MongoDB and SQL with production-ready software engineering practices.",
      "Mentored students through code reviews, REST APIs, TypeORM, Docker and problem-solving for professional software development roles.",
    ],
  },
  {
    title: "Software Development Engineer",
    companyName: "ICONOI S.A.",
    icon: iconoi,
    iconBg: "#383E56",
    date: "Sep 2022 - Sep 2024",
    points: [
      "Developed production applications for international clients with Angular, TypeScript, Java Spring Boot, Grails, Groovy and GraphQL.",
      "Contributed to an Inter-American Development Bank platform for educational resource management across LATAM.",
      "Produced SRS documentation, UML diagrams and BPMN process models to align stakeholders and support architecture decisions.",
      "Supported modernization initiatives across legacy systems, reducing maintenance risk and improving long-term scalability.",
    ],
  },
  {
    title: "JavaScript Coach",
    companyName: "Laboratoria",
    icon: laboratoria,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Jun 2024",
    points: [
      "Delivered hands-on training across JavaScript, HTML, CSS, React, Angular, Node.js, Jest, Java and Spring Boot.",
      "Mentored students through projects, code reviews, technical problem-solving and autonomous learning in remote environments.",
    ],
  },
  {
    title: "Mid-Level Software Developer",
    companyName: "IKBO S.A.",
    icon: ikbo,
    iconBg: "#383E56",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Developed a React Native mobile application for harvest and flower distribution management.",
      "Built and maintained web applications using Vue.js, React and Laravel/PHP, contributing to UX improvements and reliable delivery.",
    ],
  },
  {
    title: "Analyst Developer",
    companyName: "SUNAT",
    icon: sunat,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Mar 2022",
    points: [
      "Developed internal digital solutions with Microsoft Power Platform, Vue.js, JavaScript and Java Spring Boot.",
      "Performed data analysis and reporting with PL/SQL, Oracle, Excel macros and complex queries.",
      "Designed wireframes, prototypes and documentation to support decision-making and cross-functional delivery.",
    ],
  },
  {
    title: "Web UI Developer Intern",
    companyName: "Welcome English",
    icon: welcome,
    iconBg: "#383E56",
    date: "Dec 2019 - Mar 2020",
    points: [
      "Built responsive web pages with HTML5, CSS, Bootstrap and JavaScript.",
      "Created multimedia assets with Adobe XD, Illustrator, Photoshop and Premiere Pro to improve usability and visual consistency.",
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
    name: "Live Media & Audience Engagement Platforms",
    description:
      "Voting, contests and prediction modules for high-traffic broadcast and digital campaigns, combining intuitive UX, resilient services and real-time audience operations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "go",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://lacasadelosfamososcolombia.canalrcn.com/",
  },
  {
    name: "Hilton Resorts Booking Experience",
    description:
      "Accessible, responsive and conversion-focused booking flows built with React, TypeScript, GraphQL, Nx and Conductrics experimentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "a11y",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink:
      "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=BNADUDT&arrivalDate=2026-03-27&departureDate=2026-03-28&room1NumAdults=1",
  },
  {
    name: "Audiovisual CMS, Data & AI Workflows",
    description:
      "Custom Strapi and Payload CMS, AWS Glue/Athena/S3 data pipelines, automated testing and AI-assisted workflows for audiovisual content delivery.",
    tags: [
      {
        name: "strapi",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://strapi.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };
