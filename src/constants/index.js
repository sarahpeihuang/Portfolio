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
    starflo,
    twn,
    baadday, 
    go, looker, java, python, blaze
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
      title: "Product Manager Intern",
      company_name: "The Weather Network",
      icon: twn,
      iconBg: "#E6DEDD",
      date: "Summer 2025",
      points: [
        "Grew annual ad revenue by $2M by developing a data-driven hypothesis from A/B test results from over 8.3M MAU",
       ],
    },{
      title: "Product Manager Intern",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "Summer 2024",
      points: [
        "Shipped an API Key organization product, reducing internal GPU costs 5X",
        ],
    },{
      title: "Co-Founder",
      company_name: "Starflo",
      icon: starflo,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Launched a Chrome Extension saving users ~2 seconds per function call",],
    },
    {
      title: "Project Manager, Data & Evaulation",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "August 2023 - May 2024",
      points: [
        "Managed Data Vendor Evaluations for over 5 languages, reducing senior stakeholder decision time by 15%",
        ],
    },
    {
      title: "Production Engineer Fellow",
      company_name: "Meta - MLH Fellowship ",
      icon: meta,
      iconBg: "#E6DEDD", // #383E56 dark
      date: "Summer 2023",
      points: [
        "Developed and automated testing on an open-source website to ensure flexible redeployment for future collaborators",

      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "Summer 2023",
      points: [
        "Led the development of a Code Review Pipeline, yielding a 6% model improvement in code generation",
      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sarah is data-driven, ambitious, and quick-witted. She is a true leader, and exceeded all expectations during her time at Cohere, where she led the development of several key initiatives. Sarah handles all challenges with grace and positivity. I’m confident Sarah will excel and uplevel *any* team at *every* organization, and I look forward to the day we can work together again.",
      name: "Ellie Evans",
      designation: "Product Manager",
      company: "NVIDIA",
      image: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/16901f3b44c228113070a90c1f16da54",
    },
    {
      testimonial:
        "Sarah is structured, thoughtful and considerate in her approach to every project she tackles, navigating challenging technical topics with a positive mindset and a drive to find solutions. Despite the ambiguity of a program management role in a modeling organization, Sarah has excelled by asking relevant questions, proactively communicating and being extremely hands on (and always volunteering to do more)! I am very excited to see what Sarah does next - she's an asset to any organization.",
      name: "Naomi White",
      designation: "Senior Modelling Program Manager",
      company: "Cohere",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHT82jj8avzUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676579337698?e=1756339200&v=beta&t=Igv3djqtE6mo_Zw6kgZbT1xZ9zqwvoZMgzIK3bd2ssw",
    },
    {
      testimonial:
        "I worked with Sarah during her internship as an Engineering Program Manager at Cohere. I was constantly impressed by her dedication in every task that she undertook. She was great at finding creative solutions to the problems presented to her and I saw her apply her Machine Learning knowledge to a project she completed for the Cohere RAG and Safety Teams. She is great at communication and problem solving. She also excels at getting technical tasks and projects across the finish line, at quality. I would love to work with Sarah again in a heartbeat and wish her all the very best in her career!",
      name: "Isha Satyakam",
      designation: "Staff Engineering Program Manager",
      company: "Cohere",
      image: "https://media.licdn.com/dms/image/v2/C5603AQF_h1K2P8hbgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1632420799412?e=1756339200&v=beta&t=Pte0IEKRz-MT3rHqZBJ1yA6-tr_458bHPAniJ6OkPEE",
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
      name: "Blaze",
      description:
      "A Waze accessibility product feature using real-time data to empower visually impaired users with safer, more informed travel.",
      tags: [
        {
          name: "product",
          color: "white-text-gradient",
        },
        {
          name: "strategy",
          color: "white-text-gradient",
        },
        {
          name: "go to market",
          color: "white-text-gradient",
        },
      ],
      image: blaze,
      source_code_link: "https://docs.google.com/presentation/d/1jbVqDN_-L0Gjm5TiwotQWVLfcxizc0_R/edit?usp=sharing&ouid=116678309586853861855&rtpof=true&sd=true",
    },
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
          name: "user research",
          color: "white-text-gradient",
        },
        {
          name: "figma",
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