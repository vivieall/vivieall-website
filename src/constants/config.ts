type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    cv: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "< Viviana Angeles />",
    fullName: "Viviana Angeles",
    email: "angeleslviviana@gmail.com",
  },
  hero: {
    name: "Viviana Angeles",
    p: [" a Software Engineer with an MBA. I develop fullstack applications (web and mobile) with a business mindset and creative touch."],
    cv: "Download my resume here.",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact me.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software engineer with over five years of experience in 
      fullstack development, mentoring, and technology coaching. I excel in 
      JavaScript, TypeScript, and frameworks like React, Angular, Node.js, 
      and Next.js. My passion lies in delivering scalable and efficient solutions, 
      while maintaining a strong focus on user experience and business impact.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos. They reflect my ability to solve
    complex problems, work with various technologies, and manage projects effectively.`,
    },
  },
};

export const configEs: TConfig = {
  html: {
    title: "< Viviana Angeles />",
    fullName: "Viviana Angeles",
    email: "angeleslviviana@gmail.com",
  },
  hero: {
    name: "Viviana Angeles",
    p: ["Soy una Ingeniera de Software con un MBA. Desarrollo aplicaciones fullstack (web y móvil) con una mentalidad empresarial y un toque creativo."],
    cv: "Descarga mi currículum aquí.",
  },
  contact: {
    p: "Ponte en contacto",
    h2: "Contáctame.",
    form: {
      name: {
        span: "Tu Nombre",
        placeholder: "¿Cuál es tu nombre?",
      },
      email: { span: "Tu Correo", placeholder: "¿Cuál es tu correo?" },
      message: {
        span: "Tu Mensaje",
        placeholder: "¿Qué te gustaría decir?",
      },
    },
  },
  sections: {
    about: {
      p: "Introducción",
      h2: "Resumen.",
      content: `Soy una ingeniera de software con más de cinco años de experiencia en desarrollo fullstack, 
      mentoría y coaching tecnológico. Domino JavaScript, TypeScript, y frameworks como React, Angular, Node.js 
      y Next.js. Mi pasión radica en entregar soluciones escalables y eficientes, con un fuerte enfoque en la 
      experiencia del usuario y el impacto en el negocio.`,
    },
    experience: {
      p: "Mi experiencia",
      h2: "Experiencia laboral.",
    },
    feedbacks: {
      p: "Lo que otros dicen",
      h2: "Testimonios.",
    },
    works: {
      p: "Mi trabajo",
      h2: "Proyectos.",
      content: `Los siguientes proyectos muestran mis habilidades y experiencia a través de ejemplos reales de mi trabajo. 
      Cada proyecto está brevemente descrito con enlaces a repositorios de código y demostraciones en vivo. Reflejan mi 
      capacidad para resolver problemas complejos, trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.`,
    },
  },
};