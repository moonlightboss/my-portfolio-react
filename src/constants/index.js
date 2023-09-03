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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    jobit,
    threejs,
  } from "../assets";
  import sunweb from "../assets/company/sunweb.png"
  import peredelano from "../assets/company/peredelano.jpg"
  import cryptonomicon from "../assets/cryptonomicon.png"
  import shopapp from "../assets/shopapp.png"
  import weatherapp from "../assets/weatherapp.png"
  
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
      title: "Vue Developer",
      icon: mobile,
    },
    {
      title: "Nuxt Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Vue Developer",
      company_name: "SunWeb55",
      icon: sunweb,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - May 2023",
      points: [
        "Developing and maintaining web applications using Vue and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Nuxt 3 developer",
      company_name: "PERDELANO CONF",
      icon: peredelano,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using Nuxt and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "I help the community with development tips",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Cryptonomicon",
      description:
        "Web-platform that allows users to easily access and monitor the prices of various cryptocurrencies. With a user-friendly interface, users can effortlessly view real-time and historical price data for different digital coins.",
      tags: [
        {
          name: "vue3",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cryptonomicon,
      source_code_link: "https://github.com/moonlightboss/crpt",
    },
    {
      name: "Simple Weather app",
      description:
        "The weather app is an intuitive web application that allows users to stay informed about current weather conditions and forecasts. With a clean and user-friendly interface, it provides users with accurate and up-to-date weather information for any location in the world",
      tags: [
        {
          name: "Vue3",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/moonlightboss/weatherapp",
    },
    {
      name: "Shop App",
      description:
        "The shoe store web application is a user-friendly platform that offers a wide selection of footwear for customers to browse and purchase. With an intuitive interface and a diverse collection of shoes for different styles and occasions, the app provides a seamless shopping experience for shoe enthusiasts.",
      tags: [
        {
          name: "vue3",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shopapp,
      source_code_link: "https://github.com/moonlightboss/shopapp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };