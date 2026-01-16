// Profile Image
import profile_photo from "./profile_photo/photo.png";

// Technologies Logo
import html_logo from "./tech_logo/html.png";
import css_logo from "./tech_logo/css.png";
import js_logo from "./tech_logo/javascript.png";
import react_logo from "./tech_logo/reactjs.png";
import redux_logo from "./tech_logo/redux.png";
import next_logo from "./tech_logo/nextjs.png";
import tailwind_logo from "./tech_logo/tailwindcss.png";
import materialui_logo from "./tech_logo/materialui.png";
import bootstrap_logo from "./tech_logo/bootstrap.png";
import node_logo from "./tech_logo/nodejs.png";
import express_logo from "./tech_logo/express.png";
import mysql_logo from "./tech_logo/mysql.png";
import mongodb_logo from "./tech_logo/mongodb.png";
import firebase_logo from "./tech_logo/firebase.png";
import python_logo from "./tech_logo/python.png";
import git_logo from "./tech_logo/git.png";
import github_logo from "./tech_logo/github.png";
import vscode_logo from "./tech_logo/vscode.png";
import postman_logo from "./tech_logo/postman.png";
import mc_logo from "./tech_logo/mc.png";
import vercel_logo from "./tech_logo/vercel.png";
import netlify_logo from "./tech_logo/netlify.png";
import figma_logo from "./tech_logo/figma.png";
import zluck_logo from "./company_logo/Zluck.png";
import codtech_logo from "./company_logo/CodTech.jpg";

// Projects Image
import vidtube from "./projects_screenshot/vidtube.png";
import netflix from "./projects_screenshot/netflix.png";
import tictactoe from "./projects_screenshot/tictactoe.png";
import calculator from "./projects_screenshot/calculator.png";
import skillup from "./projects_screenshot/skillup.png";

// School & College Logo
import dchs_logo from "./education_logo/school1.png";
import ttv_logo from "./education_logo/school2.png";
import pse_logo from "./education_logo/college.png";

import resume from "./shivam_resume.pdf";

export const Resume = {
  resume: resume,
};

export const menuItems = [
  { id: "home", label: "Home", path: "/" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "project", label: "Project", path: "/project" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
];

export const Profile = {
  image: profile_photo,
};

export const skillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html_logo },
      { name: "CSS", logo: css_logo },
      { name: "JavaScript", logo: js_logo },
      { name: "React JS", logo: react_logo },
      { name: "Redux", logo: redux_logo },
      { name: "Next JS", logo: next_logo },
      { name: "Tailwind CSS", logo: tailwind_logo },
      { name: "Material UI", logo: materialui_logo },
      { name: "Bootstrap", logo: bootstrap_logo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: node_logo },
      { name: "Express JS", logo: express_logo },
      { name: "MySQL", logo: mysql_logo },
      { name: "MongoDB", logo: mongodb_logo },
      { name: "Firebase", logo: firebase_logo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: python_logo },
      { name: "JavaScript", logo: js_logo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git_logo },
      { name: "GitHub", logo: github_logo },
      { name: "VS Code", logo: vscode_logo },
      { name: "Postman", logo: postman_logo },
      { name: "Compass", logo: mc_logo },
      { name: "Vercel", logo: vercel_logo },
      { name: "Netlify", logo: netlify_logo },
      { name: "Figma", logo: figma_logo },
    ],
  },
];

export const homeSkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", logo: js_logo },
      { name: "React JS", logo: react_logo },
      { name: "Redux", logo: redux_logo },
      { name: "Next JS", logo: next_logo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: node_logo },
      { name: "Express JS", logo: express_logo },
      { name: "MySQL", logo: mysql_logo },
      { name: "MongoDB", logo: mongodb_logo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    type: "experiences",
    img: zluck_logo,
    role: "Frontend Developer",
    organization: "Zluck Solutions",
    date: "May 2025 - Nov 2025",
    desc: "Developed dynamic and responsive web applications using React, Redux, and Tailwind CSS. Collaborated with team members to build reusable UI components, manage application state efficiently, and ensure smooth user experiences in an agile development environment.",
    skills: ["JavaScript", "React JS", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: 1,
    type: "experiences",
    img: codtech_logo,
    role: "Frontend Intern",
    organization: "CodTech Solutions",
    date: "Feb 2025 - Apr 2025",
    desc: "Contributed as a Frontend Developer Intern, working with ReactJS, HTML, CSS, JavaScript, and Bootstrap to build responsive user interfaces. Gained basic experience with Node.js, ExpressJS, and MongoDB while collaborating in an agile team to improve performance and user experience.",
    skills: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "MySQL",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Vidtube",
    description:
      "Vidtube is a modern video streaming platform inspired by YouTube, built using React.js and YouTube Data API. Users can explore trending videos, search content, and watch videos with a smooth and responsive interface. Redux Toolkit is used for state management to ensure scalable and efficient data handling.",
    image: vidtube,
    tags: [
      "ReactJS",
      "Youtube API",
      "Redux Toolkit",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/shivam7062/Youtube",
    webapp: "https://youtube-shivam.vercel.app/",
  },
  {
    id: 0,
    title: "Skillup",
    description:
      "Skillup is a full-featured e-learning platform where users can browse and search courses, view course details, watch course videos, and purchase courses. Admins can add, update, and delete courses, making it easy to manage content. The platform is built with React.js, Node.js, Express, MongoDB, and uses Redux Toolkit for efficient state management.",

    image: skillup,
    tags: [
      "ReactJS",
      "Nodejs",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Stripe",
      "Tailwind",
    ],
    github: "https://github.com/shivam7062/courseapp",
    webapp: "https://courseapp-lilac.vercel.app",
  },
  {
    id: 1,
    title: "Netflix",
    description:
      "A full-featured Netflix clone developed using React.js, TMDB API, and Firebase Authentication. The app supports user signup, login, and logout with secure data handling, along with browsing trending movies and viewing detailed content in a responsive interface.",
    image: netflix,
    tags: [
      "ReactJS",
      "TMDB API",
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase database",
    ],
    github: "https://github.com/shivam7062/Netflix",
    webapp: "https://nextflix-shivam.vercel.app/login",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe Game",
    description:
      "An interactive Tic Tac Toe game developed with HTML, CSS & JS. Game logic implementation, and a responsive user interface. The app provides instant win/draw detection for a seamless gameplay experience.",
    image: tictactoe,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shivam7062/Tic-Tac-Toe",
    webapp: "https://tic-tac-toe-shivam.vercel.app/",
  },
  {
    id: 3,
    title: "Calculator App",
    description:
      "A functional calculator app developed with HTML, CSS, and JavaScript that supports arithmetic operations. It features a responsive design, real-time calculations, and efficient event handling for a smooth user experience.",
    image: calculator,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/shivam7062/Calculator",
    webapp: "https://calculator-shivam.vercel.app/",
  },
];

export const education = [
  {
    id: 0,
    type: "education",
    img: pse_logo,
    organization: "Pacific School of Engineering, Surat",
    date: "Sept 2021 - May 2025",
    grade: "8.32",
    desc: "I completed my B.Tech in Computer Science from PSE College, Surat. During my studies, I built a strong foundation in Data Structures, Web Development, and Database Management Systems, and worked on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - BTech (Computer Science)",
  },
  {
    id: 1,
    type: "education",
    img: ttv_logo,
    organization: "T & T.V Sarvajanik High School, Surat",
    date: "Jun 2020 - May 2021",
    grade: "71 %",
    desc: "I completed my class 12 education from T & T.V Sarvajanik High School, Surat, under the GSEB board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer.",
    degree: "GSEB(XII) - PCM with Computer",
  },
  {
    id: 2,
    type: "education",
    img: dchs_logo,
    organization: "Decent Child High School, Surat",
    date: "Jun 2018 - March 2019",
    grade: "75 %",
    desc: "I completed my class 10 education from Decent Child High School, Surat, under the GSEB board, where I studied Science, Maths with Computer.",
    degree: "GSEB(X), Science, Maths with Computer",
  },
];

export const footer_icons = [
  { icon: "github", link: "https://github.com/shivam7062" },
  { icon: "linkedin", link: "https://www.linkedin.com/in/shivam7062" },
  { icon: "instagram", link: "/" },
  {
    icon: "youtube",
    link: "https://youtube.com/@happytailsstories?si=kfePhgW8Ve9qoDQ2",
  },
];
