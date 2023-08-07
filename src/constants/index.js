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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cohere,
    mlh, baadday, corgi
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
      title: "Varsity Athlete",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
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
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "MLH",
      icon: mlh,
      iconBg: "#E6DEDD", // #383E56 dark
      date: "June 2023 - September 2023",
      points: [
        "Contributed to open-source projects of various companies using Python, Javascript, HTML/CSS and Typescript",
        "Collaborated in a pod of 10 SWE fellows to share and develop insight on project blockers and map out project MVPs and task priorities to be delegated amongst the team",

      ],
    },
    {
      title: "Code Prompt Engineer",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2023",
      points: [
        "Scraped, reformatted, and trained Cohere’s RAG model with over 600,000 emails with Python and Regex",
        "Lead the planning and execution of the code review pipeline to improve the chat model’s code output quality",
        "Developed the front end and implemented backed data fetching using React.js and Typescript in a full-stack web application designed for accepting and rejecting annotations; completed in one week and pitched to the CTO of Cohere",
        "Collaborated in a team to ideate topics and write a Code Annotation Style Guide to ensure that all Data Quality Specialists company-wide annotate code consistently and up to standard",
      ],
    },
    {
      title: "Data Quality Specialist",
      company_name: "Cohere",
      icon: cohere,
      iconBg: "#E6DEDD",
      date: "May 2023",
      points: [
        "Produced high-quality machine learning data by labelling, ranking, auditing, and correcting data",
        "Highlighted interface optimizations on behaff of the team to ensure annotation efficiency and quality",
        "Annotated data for various Cohere LLMs to ensure model growth and imporvements according to the company style guide",
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
      name: "co:RGI",
      description:
      "Cohere Review Generation Interface (co:RGI) is an annotation reviewing application inspired by Tinder. Made for Cohere employees to review data on the go.",
      tags: [
        {
          name: "typescript",
          color: "white-text-gradient",
        },
        {
          name: "react.js",
          color: "white-text-gradient",
        },
        {
          name: "python",
          color: "white-text-gradient",
        },
      ],
      image: corgi,
      source_code_link: "https://main--silly-brigadeiros-2cb3c2.netlify.app/",
    },
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
      source_code_link: "https://github.com/sarah888/MoodAF",
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
      source_code_link: "https://github.com/sarah888/20-Past-4",
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
      source_code_link: "https://github.com/sarah888/Baad-Day",
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