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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    carrent,
    jobit,
    tripguide,
    threejs,
    cohere,
    baadday, 
    go, looker, java, python
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
      title: "Product Manager",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Linamar Scholar",
      icon: backend,
    },
    {
      title: "Varsity Athlete",
      icon: creator,
    },
  ];
  
  const technologies = [

      {
        name: "Python",
        icon: python,
        type: "Language"
      },
      {
        name: "Java",
        icon: java,
        type: "Language"
      },
      {
        name: "HTML 5",
        icon: html,
        type: "Language"
      },
      {
        name: "CSS 3",
        icon: css,
        type: "Language"
      },
  
      {
        name: "JavaScript",
        icon: javascript,
        type: "Language"
      },
      {
        name: "TypeScript",
        icon: typescript,
        type: "Language"
      },
      {
        name: "Go",
        icon: go,
        type: "Language"
      },
      {
        name: "React JS",
        icon: reactjs,
        type: "Framework"
      },
      {
        name: "Linear",
        icon: redux,
        type: "Design"
      },
      // {
      //   name: "Tailwind CSS",
      //   icon: tailwind,
      //   type: "Framework"
      // },
      {
        name: "Node JS",
        icon: nodejs,
        type: "Framework"
      },
      // {
      //   name: "MongoDB",
      //   icon: mongodb,
      //   type: "Framework"
      // },
      // {
      //   name: "Three JS",
      //   icon: threejs,
      //   type: "Framework"
      // },
      {
        name: "Git",
        icon: git,
        type: "Framework"
      },
      {
        name: "Figma",
        icon: figma,
        type: "Design"
      },
      // {
      //   name: "docker",
      //   icon: docker,
      //   type: "Framework"
      // },
      {
        name: "Looker",
        icon: looker,
        type: "Design"
      },
  
    ];  
  const experiences = [
    {
      title: "Engineering Program Manager, RAG & Safety",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "May 2024 - Aug 2024",
      points: [
        "Organized a week-long offsite for the Model Safety Team to strategize product vision and roadmap, collaborating with cross-functional partners to gather feedback and define action items for engineers",
        "Analyzed market trends and user research to identify inefficiencies in API key distribution, resulting in a new distribution system that improved request fulfillment times for over 200 engineers",
        "Led a documentation template project to address inconsistencies by conducting interviews amongst leadership and creating user-friendly templates, achieving high adoption rates across teams",
      ],
    },
    {
      title: "Project Manager, Data & Evaulation",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "August 2023 - May 2024",
      points: [
        "Served as a liaison between over 200 Data Quality Specialists and Cohere’s engineering team to finetune the production of  a convenient internal data annotation platform for Data Quality Specialists and their managers",
        "Spearheaded a sprint to fulfill Oracle’s P0 request by synthetically generating over 1000 prompts and relaying instructions to over 30 Copywriters, resulting in a timely completion to to satisfy all stakeholders",
        "Collaborated in a team of 5 to author a Code Annotation Style Guide to ensure that external vendors like Scale AI and Invisible Technologies provide quality data and code annotations to improve chat model training data",
        "Inaugurated a Vendor Evaluation Pipeline to identify low-performing data vendor annotators to ensure quality incoming data batches are up to standard, resulting in a 25% improvement over two weeks",
      ],
    },
    {
      title: "Production Engineer Fellow",
      company_name: "Meta - MLH Fellowship ",
      icon: meta,
      iconBg: "#E6DEDD", // #383E56 dark
      date: "June 2023- September 2023",
      points: [
        "Developed and deployed an open-source portfolio website with Python, Flask, Jinja, MySQL, Nginx, Docker and unittest to ensure easy and flexible redeployment of code for future collaborators",
        "Automated testing and deployment workflows using CI/CD, resulting in an improved troubleshooting process",
        "Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana to optimize computer processing and memory usage for repository collaborators",
        "Completed 12 weeks of curriculum-based learning on core Production Engineering topics alongside Meta Engineers"
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2023",
      points: [
        "Managed 27 engineers to establish a Code Review Pipeline and improved its efficiency by developing scripts to fold over 1500 hours worth of training data and mitigating blockers with data vendors, yielding a 6% model improvement in code generation",
        "Scraped and parsed over 600,000 emails using Python to train Cohere’s Retrieval Augmented Generation model for application at corporate clients through Cohere’s chatbot assistant for enterprises, Coral",
        "Developed the front end and implemented back end data fetching using React.js and Typescript in an internal full-stack application designed to expidite the data quality sifting process; completed in one week and pitched to Cohere’s CTO",
        "Learned Golang onsite to troubleshoot request errors in Cohere’s APIs; efforts resulted in relevant data extraction for the Platforms Team to further optimize popular endpoints like Co.Generate and Co.Summarize" ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sarah is data-driven, ambitious, and quick-witted. She is a true leader, and exceeded all expectations during her time at Cohere, where she led the development of several key initiatives. Sarah handles all challenges with grace and positivity. I’m confident Sarah will excel and uplevel *any* team at *every* organization, and I look forward to the day we can work together again.",
      name: "Ellie Evans",
      designation: "First Product Manager",
      company: "Cohere",
      image: "https://media.licdn.com/dms/image/D5603AQF0IKJ4QV_pug/profile-displayphoto-shrink_800_800/0/1677532737024?e=1700697600&v=beta&t=7KRrrmga3pTe5MPEmlYG3qutvJcBjheSF4SoNaK89hk",
    },
    {
      testimonial:
        "Sarah is structured, thoughtful and considerate in her approach to every project she tackles, navigating challenging technical topics with a positive mindset and a drive to find solutions. Despite the ambiguity of a program management role in a modeling organization, Sarah has excelled by asking relevant questions, proactively communicating and being extremely hands on (and always volunteering to do more)! I am very excited to see what Sarah does next - she's an asset to any organization.",
      name: "Naomi White",
      designation: "Senior Modelling Program Manager",
      company: "Cohere",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHT82jj8avzUQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1676579337698?e=1731542400&v=beta&t=VwEx4CLNesvrRwuDpJp2X9R3ieAGaelO6be0BTI8SM0",
    },
    {
      testimonial:
        "I worked with Sarah during her internship as an Engineering Program Manager at Cohere. I was constantly impressed by her dedication in every task that she undertook. She was great at finding creative solutions to the problems presented to her and I saw her apply her Machine Learning knowledge to a project she completed for the Cohere RAG and Safety Teams. She is great at communication and problem solving. She also excels at getting technical tasks and projects across the finish line, at quality. I would love to work with Sarah again in a heartbeat and wish her all the very best in her career!",
      name: "Isha Satyakam",
      designation: "Senior Engineering Program Manager",
      company: "Cohere",
      image: "https://media.licdn.com/dms/image/v2/C5603AQF_h1K2P8hbgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1632420799412?e=1731542400&v=beta&t=BWiNTHQmxPc54dB3mqPmkXtVG4cMMJYDpHKb4X7PqYc",
    },
 
  ];
  
  const projects = [
    // {
    //   name: "co:RGI",
    //   description:
    //   "Cohere Review Generation Interface (co:RGI) is an annotation reviewing application inspired by Tinder. Made for Cohere employees to review data on the go.",
    //   tags: [
    //     {
    //       name: "typescript",
    //       color: "white-text-gradient",
    //     },
    //     {
    //       name: "react.js",
    //       color: "white-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "white-text-gradient",
    //     },
    //   ],
    //   // image: corgi,
    //   // source_code_link: "https://main--silly-brigadeiros-2cb3c2.netlify.app/",
    // },

    {
      name: "Google Sheets",
      description:
      "A Google Sheets product review focused on how to optimize function discovery for increased user productivity.",
      tags: [
        {
          name: "product",
          color: "white-text-gradient",
        },
        {
          name: "figma",
          color: "white-text-gradient",
        },
        {
          name: "user research",
          color: "white-text-gradient",
        },
      ],
      image: docker,
      source_code_link: "https://drive.google.com/drive/folders/10qauJljt3fB-KtPUWVO5Bg_s2KPMpR_6?usp=sharing",
    },
    {
      name: "Learning in Colour",
      description:
        "Learning in Colour is a web application for racialized students to connect with racialized professionals wireframed on Figma.",
      tags: [
        {
          name: "product",
          color: "white-text-gradient",
        },
        {
          name: "design thinking",
          color: "white-text-gradient",
        },
        {
          name: "figma",
          color: "white-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.linkedin.com/in/sarahpeihuang/overlay/1635514696527/single-media-viewer/?profileId=ACoAADEyqPUBkoQgMFEcP1s3Aa4ZyqkPG3lG4Js",
    },
    {
      name: "20 Past 4",
      description:
        "20 Past 4 is an interactive game that empowers youth with the knowledge they need to make informed choices surrounding substance use in daily situations.",
      tags: [
        {
          name: "python",
          color: "white-text-gradient",
        },
        {
          name: "cohereAPI",
          color: "white-text-gradient",
        },
        {
          name: "pygame",
          color: "white-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sarahpeihuang/20-Past-4",
    },
    {
      name: "MoodAF",
      description:
      "Mood Analytics & Feedback (MoodAF) is a journaling application that provides a safe space for individuals to share their thoughts with professionals and the community.",
      tags: [
        {
          name: "python",
          color: "white-text-gradient",
        },
        {
          name: "cohereAPI",
          color: "white-text-gradient",
        },
        {
          name: "djangoDB",
          color: "white-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sarahpeihuang/MoodAF",
    },
    {
      name: "Baad Day",
      description:
        "Baad Day is an interactive game that brings awareness to overlooked youth struggles, such as oversleeping, unhealthy diet, negative affirmations, and substance abuse. ",
      tags: [
        {
          name: "javascript",
          color: "white-text-gradient",
        },
        {
          name: "html",
          color: "white-text-gradient",
        },
        {
          name: "css",
          color: "white-text-gradient",
        },
      ],
      image: baadday,
      source_code_link: "https://github.com/sarahpeihuang/Baad-Day",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };