export const navItems = [
  { name: "Hero", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    status: "Seeking New Career Opportunities",
    username: "Mohamed Ouadou",
    title: "Full Stack Developer",
    description:
      "I’m a Full Stack Developer with a strong background in electronics, computer science, and automation from Mohammed V University. My passion for continuous learning and adaptability to new technologies drive me to tackle exciting challenges and contribute to innovative projects.",
    educationDetails: [],
    className: "sm:col-span-12 md:col-span-6 lg:col-span-5 lg:row-span-2 ",
    image: "/images.png",
    cvLink: "/Ouadou.mohamed.developpeurFullStack.pdf",
    socialMediaLinks: {
      linkedin: "https://www.linkedin.com/in/mohamedouadou",
      twitter: "https://twitter.com/",
      github: "https://github.com/ouadoudev",
    },
  },
  {
    id: 2,
    title: "Experience",
    description: "+1 year",
    className:
      "sm:col-span-6 md:col-span-4 lg:col-span-2 lg:row-span-1 lg:max-h-[70px] ",
  },
  {
    id: 3,
    title: "Projects",
    description: "+5 projects",
    className:
      "sm:col-span-6 md:col-span-4 lg:col-span-2 lg:row-span-1 lg:max-h-[70px]",
  },
  {
    id: 4,
    title: "My Tech Stack",
    className:
      "sm:col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-2 lg:min-w-[330px] ",
    technologies: {
      languages: [
        { name: "JavaScript", icon: "/logo-javascript.svg" },
        { name: "TypeScript", icon: "/ts.svg" },
        { name: "PHP", icon: "/PHP.svg" },
        { name: "C", icon: "/c.svg" },
      ],
      frontend: [
        { name: "HTML5", icon: "/HTML5.svg" },
        { name: "CSS3", icon: "/CSS3.svg" },
        { name: "React", icon: "/re.svg" },
        { name: "Next.js", icon: "/next.svg" },
        { name: "Angular", icon: "/angular.svg" },
      ],
      backend: [
        { name: "Node.js", icon: "/nodejs-icon.svg" },
        { name: "Express", icon: "/icons8-express-js.svg" },
        { name: "NestJS", icon: "/nestjs.svg" },
        { name: "MongoDB", icon: "/mongodb-icon-1.svg" },
        { name: "Socket.io", icon: "/Socket.io.svg" },
      ],
      tools: [
        { name: "Redux", icon: "/redux.svg" },
        { name: "Tailwind CSS", icon: "/tail.svg" },
        { name: "Bootstrap", icon: "/Bootstrap.svg" },
        { name: "Docker", icon: "/dock.svg" },
        { name: "Jest", icon: "/Jest.svg" },
        { name: "Swagger", icon: "/Swagger.svg" },
      ],
    },
  },
  {
    id: 5,
    title: "Formation",
    className: "sm:col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1 ",
    formation: [
      {
        degree: "Full Stack Web Developer MERN",
        institution: "JobInTech",
        duration: "September 2018 - June 2022",
      },
      {
        degree: "Bachelor of Fundamental Studies",
        institution: "Université Mohammed V, Rabat",
        options: "Computer Science, Electronics, Automation",
        duration: "September 2018 - June 2022",
      },
      {
        degree: "Diploma of General University Studies",
        institution: "Université Mohammed V, Rabat",
        field: "Physical Science",
        duration: "September 2018 - June 2022",
      },
      {
        degree: "High School Diploma SPC",
        institution: "Lycée Ahmed Chawki, Salé",
        duration: "September 2018 - June 2022",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Task Management System",
    des: "Built with the MERN stack. It includes features for task creation, management, and tracking, all styled with Tailwind CSS and Shadcn UI.",
    img: "/taskmanagment.png",
    iconLists: [
      "/logo-javascript.svg",
      "/mongodb-icon-1.svg",
      "/icons8-express-js.svg",
      "/re.svg",
      ,
      "/nodejs-icon.svg",
      "/redux.svg",
      "/tail.svg",
      "/shadcn-ui-seeklogo.svg",
    ],
    link: "https://github.com/ouadoudev/MERN-Stack-Task-Management-System",
  },
  {
    id: 2,
    title: "Learning Management System",
    des: " Empower learners with personalized experiences and actionable insights, enhancing engagement and fostering success.",
    img: "/p1.svg",
    iconLists: [
      "/logo-javascript.svg",
      "/mongodb-icon-1.svg",
      "/icons8-express-js.svg",
      "/re.svg",
      "/nodejs-icon.svg",
      "/redux.svg",
      "/tail.svg",
      "/shadcn-ui-seeklogo.svg",
      "/Socket.io.svg",
    ],
    link: "https://github.com/ouadoudev/MERN-Stack-Task-Management-System",
  },
  {
    id: 3,
    title: "My Portfolio",
    des: "Showcase of my skills and projects built with Next.js, React, and Tailwind CSS. Powered by Aeternity UI for a modern and secure experience.",
    img: "/portfolio.png",
    iconLists: [
      "/ts.svg",
      "/next.svg",
      "/re.svg",
      "Three.js.svg",
      "/tail.svg",
      "/aceternity.avif",
    ],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Mohamed tackled every task with precision and efficiency. Their ability to quickly learn and adapt to new tools and frameworks was particularly impressive, making them a valuable team player.What I admire most about him is their collaborative spirit. They were always willing to lend a hand, share knowledge, and contribute to team success. Their excellent communication skills ensured that our projects ran smoothly and that everyone was on the same page.",
    name: "Mohamed Akkaoui",
    avatar:"akkaoui.jpg",
    title: "Full Stack Developer",
  },
  {
    quote:
      "I highly recommend Mohamed ouadou for a position in full-stack development. He's an expert in front-end and back-end technologies, and a dedicated and communicative collaborator. He'll bring significant value to your team.",
    name: "Anas Akil",
    avatar:"akil.jpg",
    title: "Full Stack Developer",
  },
  {
    quote:
      "What sets Mohamed apart is not just his technical prowess, but his collaborative mindset. He’s always willing to share insights, help troubleshoot issues, and contribute meaningfully to team discussions. His strong work ethic and commitment to delivering high-quality results make him an outstanding addition to any team.",
    name: "Anas Errami",
    avatar:"errami.png",
    title: "Engineering Student in Big Data & Cloud Computing",
  },
  {
    quote:
      "Beyond his technical abilities, Mohamed is distinguished by his professionalism, attention to detail, and collaborative spirit. His eagerness to learn and master new technologies highlights his potential for advanced roles in digital development.I am confident that Mohamed will continue to thrive and make significant contributions in his future endeavors. I recommend him without reservation.",
    name: "bottayna azmy",
    avatar:"boutayna.jpg",
    title: "Full Stack Developer",
  },
  {
    quote:
      "I highly recommend Mohamed Ouadou as a frontend developer. He has consistently demonstrated strong skills in building responsive, user-friendly interfaces and adapting quickly to new challenges. Their work is detailed, efficient, and they are a great team player. They would be an excellent addition to any frontend development team.",
    name: "Naïm Abdelkerim",
    avatar:"naim.png",
    title: "Software Engineer",
  }
];

export const companies = [

  {
    id: 1,
    name: "ARK-X Talent Factory",
    img: "/",
    nameImg: "/ARK-X.png",
  },
  {
    id: 2,
    name: "PRONOV",
    img: "/",
    nameImg: "/okeyo.png",
  },
  {
    id: 3,
    name: "ANEP",
    img: "/",
    nameImg: "/anep.png",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "ARK-X Talent Factory",
    description: "Developed robust web applications using JavaScript, TypeScript, and the MERN stack. Successfully created applications such as a real-time chat app,user management system, temperature display app, and restaurant management systems.",
    duration: "Jan. 10, 2024 - Jun. 10, 2024",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "PRONOV",
    description: "Contributed to the enhancement of the OKEYO application by implementing new features and functionalities  ",
    duration: "July 4, 2024 – sept 9, 2024",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    company: "ANEP",
    description: "Developed a comprehensive web-based platform designed to manage and streamline both user and administrator activities within a training management system. The platform includes two distinct environments: one for end-users to interact with and one for administrators to oversee and manage the entire system.",
    duration: "sept 23, 2024 – Present",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/ouadoudev",
  },
  {
    id: 2,
    name:"Whatsapp",
    img: "/wha.svg",
    url: "https://wa.me/qr/3I3JVA24BVM7G1",
  },
  {
    id: 3,
    name:"LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mohamedouadou",
  },
  {
    id: 4,
    name:"Instagram",
    img: "/insta.svg",
    url: "https://instagram.com/simohamedouadou",
  },
];