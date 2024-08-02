import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  Udemyclone,
  weather,
  todolist,
  tripadvisor,
  plant,
  subscription,
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
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
    name: "git",
    icon: git,
  },
];

const projects = [
 
  {
    name: "Tripadvicer",
    description:
      "The project features a clean and responsive design that mimics the layout and functionality of the popular travel review site. Users can navigate through various travel categories, view destination information, and browse user reviews. ",
    tags: [
      {
        name: "html",
        color: "violet-text-gradient",
      },
          {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: tripadvisor,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/Tripadvicer",
  },
  {
    name: "Subscription",
    description:
      "Designed and implemented a subscription form using HTML and CSS. It features a clean, responsive design with validation for input fields and user-friendly error handling. This project showcases my ability to create well-structured forms and apply effective styling techniques.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
          {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: subscription,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/subscription",
  },
  {
    name: "Greenden",
    description:
      "The project includes responsive design for a seamless experience across devices and dynamic content updates through JavaScript. This project showcases my skills in frontend development, user experience design, and JavaScript functionality.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/greenden",
  },
  {
    name: "Todolist",
    description:
      "Created a dynamic Todo List application using HTML, CSS, and React.js. The application allows users to add, edit, delete, and mark tasks as complete. The interface is user-friendly and features a clean design with responsive layouts. The project highlights my skills in frontend development, state management, and user interaction handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/Todolist",
  },
  {
    name: "Weather-app",
    description:
      "Built a responsive weather report app using HTML, CSS, and React.js. Users can search for real-time weather data by city and conditions via a weather API. The app features a user-friendly interface, error handling, and is fully responsive across devices. This project highlights my frontend development, API integration, and responsive design skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/Weather-app",
  },
  {
    name: "udemy Clone",
    description:
      "Developed a fully functional Udemy clone website usiDeveloped a fully functional clone of the Udemy platform, focusing on delivering a seamless and interactive user experience. The project demonstrates proficiency in front-end technologies and showcases the ability to build a complex web application from scratch",  
      tags: [    
          {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: Udemyclone,
    source_code_link: "https://github.com/BuvaneshwariPeriyasamy/udemy-react",
  },
];

export { services, technologies, projects };
