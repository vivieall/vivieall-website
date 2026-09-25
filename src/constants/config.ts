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
    headline: string;
    p: string[];
    cv: string;
    cvUrl: string;
    badges: string[];
    metrics: {
      value: string;
      label: string;
    }[];
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
    headline: "Tech Lead | Senior Software Engineer | MBA",
    p: [
      "a Tech Lead and Senior Software Engineer with an MBA.",
      "I build audiovisual media, digital content products and fullstack platforms with a business mindset and creative touch.",
    ],
    cv: "Download my resume here.",
    cvUrl:
      "https://drive.google.com/file/d/1ydblwznZ0GlKXJdGRtvsLJXliNJpT4ir/view?usp=drive_link",
    badges: ["Audiovisual Media & Content", "AI-assisted workflows", "Bogota, Colombia"],
    metrics: [
      { value: "7", label: "Years building media products" },
      { value: "2", label: "Current senior roles" },
      { value: "C1", label: "English level" },
    ],
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
      h2: "Product-minded engineering leader.",
      content: `Lead Software Engineer with nearly 7 years of experience building scalable, consumer-facing digital products and leading cross-functional technical initiatives. I specialize in React, TypeScript, Next.js, Go, AWS, high-concurrency systems, data pipelines and cloud-based product development for audiovisual media, streaming-adjacent workflows, content platforms, travel and interactive audience products. I combine hands-on engineering with an MBA in Technological Innovation, AI-assisted development workflows and strong stakeholder alignment.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Leadership and delivery.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Selected impact",
      h2: "Media product systems.",
      content: `A focused look at the product areas I lead and build: live media engagement, audiovisual content workflows, high-concurrency backends, CMS platforms, booking experiences, data pipelines and AI-assisted engineering workflows.`,
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
    headline: "Tech Lead | Senior Software Engineer | MBA",
    p: [
      "Soy Tech Lead y Senior Software Engineer con un MBA.",
      "Construyo productos audiovisuales, plataformas de contenido digital y soluciones fullstack con vision de negocio y toque creativo.",
    ],
    cv: "Descarga mi curriculum aqui.",
    cvUrl:
      "https://drive.google.com/file/d/1ydblwznZ0GlKXJdGRtvsLJXliNJpT4ir/view?usp=drive_link",
    badges: ["Audiovisual Media & Content", "AI-assisted workflows", "Bogota, Colombia"],
    metrics: [
      { value: "7", label: "Años creando productos media" },
      { value: "2", label: "Roles senior actuales" },
      { value: "C1", label: "Nivel de ingles" },
    ],
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
      h2: "Liderazgo tecnico orientado a producto.",
      content: `Lead Software Engineer con casi 7 años de experiencia construyendo productos digitales escalables y liderando iniciativas tecnicas cross-functional. Me especializo en React, TypeScript, Next.js, Go, AWS, sistemas de alta concurrencia, pipelines de datos y desarrollo cloud para media audiovisual, flujos cercanos a streaming, plataformas de contenido, travel y productos interactivos. Combino ejecucion tecnica, MBA en Innovacion Tecnologica, flujos de AI-assisted development y alineamiento con stakeholders.`,
    },
    experience: {
      p: "Mi experiencia",
      h2: "Liderazgo y delivery.",
    },
    feedbacks: {
      p: "Lo que otros dicen",
      h2: "Testimonios.",
    },
    works: {
      p: "Impacto seleccionado",
      h2: "Sistemas para media products.",
      content: `Una mirada enfocada a las areas de producto que lidero y construyo: engagement en vivo, flujos de contenido audiovisual, backends de alta concurrencia, CMS, experiencias de booking, pipelines de datos y flujos de ingenieria asistidos por IA.`,
    },
  },
};
