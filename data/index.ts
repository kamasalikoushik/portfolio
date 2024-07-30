export const navItems = [
  { name: "Home", link: "#home"},
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experiences"},
  { name: "Contact", link: "#contact" },
];

const PUBLIC_URL =
  "https://raw.githubusercontent.com/kamasalikoushik/portfolio/main/public/";
  
export const gridItems = [
  {
    id: 1,
    title: "who excels in Competitive programming",
    description: "A passionate problem solver",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible and reliable",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "IIT Bhubaneswar",
    description: "Dual Degree Computer Science Graduate from",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Want to get in touch with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zui - Transportation Management Platform",
    des: `Developed a transportation management platform with institute-based login, real-time Notification updates, and
advanced route and schedule management.Utilized Node.js, React, MongoDB, and integrated a UPI payment system for
enhanced functionality and deployed on Render website.`,
    img: PUBLIC_URL + "/landing-page.png",
    iconLists: [PUBLIC_URL + "/re.svg", PUBLIC_URL + "/node.svg", PUBLIC_URL + "mongo.png"],
    link: "https://gc-hackathon-2024.web.app/",
  },
  {
    id: 2,
    title: "Task Titan - Advanced To-Do Organizer",
    des: "Developed an enhanced task management application, revolutionizing traditional to-do lists.",
    img: PUBLIC_URL + "/p2.png",
    iconLists: [PUBLIC_URL + "/re.svg", PUBLIC_URL +"/node.svg"],
    link: "",
  },
];


export const workExperience = [
  {
    id: 1,
    title: " Backend Intern",
    desc: "Migrated over 100 WordPress posts and more than 2GB of media to the Grigora platform in just 1 minute and 12 seconds. Utilized technologies like Node.js, Amazon DynamoDB, Amazon S3, and GraphQL for seamless transitions.",
    className: "md:col-span-2",
    thumbnail: PUBLIC_URL + "/comp1.webp",
  },
  {
    id: 2,
    title: " Software and Devops Intern",
    desc: "Devised a proof-of-concept for extending the Golang controller microservice to manage host and docker services. Enhanced system control capabilities through innovative microservice management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: PUBLIC_URL + "/comp2.svg",
  },
  {
    id: 3,
    title: " Software Intern",
    desc: "Implemented an automated business rules model using Drools rule-engine for an alert-based notification system. Conducted a detailed comparative study of notification systems and rule engines, including Kafka and Amazon SQS.",
    className: "md:col-span-2",
    thumbnail: PUBLIC_URL + "/comp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: PUBLIC_URL + "/git.svg",
    link: "https://github.com/kamasali-koushik",
  },
  {
    id: 2,
    img: PUBLIC_URL + "/link.svg",
    link: "https://www.linkedin.com/in/kamasali-koushik/",
  },
];
