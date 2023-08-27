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
      title: "Product Manager",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Served as a liaison between over 200 Data Quality Specialists and Cohere’s engineering team to finetune the production of  a convenient internal data annotation platform for Data Quality Specialists and their managers",
        "Spearheaded a sprint to fulfill Oracle’s P0 request by synthetically generating over 1000 prompts and relaying instructions to over 30 Copywriters, resulting in a timely completion to to satisfy all stakeholders",
        "Collaborated in a team of 5 to author a Code Annotation Style Guide to ensure that external vendors like Scale AI and Invisible Technologies provide quality data and code annotations to improve chat model training data",
        "Inaugurated a Vendor Evaluation Pipeline to identify low performing data vendor annotators and communicate quality discrepancies with vendors to ensure that incoming data batches are up to data quality standards",
      ],
    },
    {
      title: "Production Engineer",
      company_name: "Meta - MLH Fellowship ",
      icon: meta,
      iconBg: "#E6DEDD", // #383E56 dark
      date: "June - September 2023",
      points: [
        "Developed and deployed an open-source portfolio website with Python, Flask, Jinja, MySQL, Nginx, Docker and unittest to ensure easy and flexible redeployment of code for future collaborators",
        "Automated testing and deployment workflows using CI/CD, resulting in an improved troubleshooting process",
        "Set up system and container monitoring, alerting, and visualization using Prometheus and Grafana to optimize computer processing and memory usage for repository collaborators",
        "Completed 12 weeks of curriculum-based learning on core Production Engineering topics alongside Meta Engineers"
      ],
    },
    {
      title: "Code Prompt Engineer",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "May - August 2023",
      points: [
        "Managed 27 engineers to establish a Code Review Pipeline and improved it’s efficiency by developing training fold and linting scripts for 1500h worth of conversations and mitigating blockers with data vendors, yielding a 6% model improvement",
        "Scraped and parsed over 600,000 emails using Python to train Cohere’s Retrieval Augmented Generation model for application at corporate clients through Cohere’s chatbot assistant for enterprises, Coral",
        "Developed the front end and implemented back end data fetching using React.js and Typescript in an internal full-stack application designed to expidite the data quality sifting process; completed in one week and pitched to Cohere’s CTO",
        "Learned Golang onsite to troubleshoot request errors in Cohere’s APIs; efforts resulted in relevant data extraction for the Platforms Team to further optimize popular endpoints like Co.Generate and Co.Summarize" ],
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
      name: "MoodAF",
      description:
      "Mood Analytics & Feedback (MoodAF) is a journaling application that provides a safe space for individuals to share their thoughts with professionals and the community.",
      tags: [
        {
          name: "djangoDB",
          color: "white-text-gradient",
        },
        {
          name: "cohereAPI",
          color: "white-text-gradient",
        },
        {
          name: "python",
          color: "white-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sarahpeihuang/MoodAF",
    },
    {
      name: "20 Past 4",
      description:
        "20 Past 4 is an interactive game that empowers youth with the knowledge they need to make informed choices surrounding substance use in daily situations.",
      tags: [
        {
          name: "cohereAPI",
          color: "white-text-gradient",
        },
        {
          name: "python",
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
    {
      name: "Learning in Colour",
      description:
        "Learning in Colour is a prototyped web application for racialized students aged 16-25 to interact with racialized professionals through forums and blogs on Figma.",
      tags: [
        {
          name: "figma",
          color: "white-text-gradient",
        },
        {
          name: "designthinking",
          color: "white-text-gradient",
        },
        {
          name: "powerpoint",
          color: "white-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.linkedin.com/in/sarahpeihuang/overlay/1635514696527/single-media-viewer/?profileId=ACoAADEyqPUBkoQgMFEcP1s3Aa4ZyqkPG3lG4Js",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };