import React from "react";
import MyClienteleImage from "./assets/images/myclientele.jpg";
import NVNTORYImage from "./assets/images/nvntory.jpg";
import QuizAppImage from "./assets/images/quizapp.jpg";
import {
  DiSass,
  DiJavascript,
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiPostgresql,
  DiJqueryLogo,
  DiMongodb,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

const projects = [
  {
    name: "OffroadSwaps",
    repo: "",
    livelink: "",
    description:
      "Offroad Swaps is being developed as a place for all offroad enthusiats to offload their new and used parts. Too many times have I heard someone wanting to sell off their old parts to offset the cost of upgraded parts, but they don't want to deal with the larger auction style sites. ",
    secondarydescription:
      "This app is currently being developed and has a private repo. I will update as soon as I am allowed to. LAST UPDATED OCTOBER 8 2020",
    image: () => "N/A",
    stack: () => (
      <span className="card-stack">
        <DiSass /> <DiReact /> <DiMongodb /> <DiNodejsSmall />
        <SiRedux />
      </span>
    ),
  },
  {
    name: "MyClientele",
    repo: "https://github.com/thinkful-ei-orka/myclientele-f5-client",
    livelink: "https://myclientele-f5.vercel.app/",
    description:
      "With My Clientele, you can keep all your client information in one place. This includes names, locations, hours of operations, if they are currently closed, and the current general manager. You can even update the clients as this information changes.",
    secondarydescription:
      "My Clientele is ideal for the fast paced and busy lifestyle you lead, and allows you to keep up-to-date with what places are closed due to things like Covid-19 or renovations with the currently closed feature.",
    image: () => MyClienteleImage,
    stack: () => (
      <span className="card-stack">
        <DiSass /> <DiReact /> <DiPostgresql /> <DiNodejsSmall />
      </span>
    ),
  },
  {
    name: "NVNTORY",
    repo: "https://github.com/jonnyboydev/nvntory-client",
    livelink: "https://nvntory-client.binkeroni.vercel.app/",
    description:
      "NVNTORY is an alternative to expensive inventory management systems that seems to not listen to their customers. We continue to update the app with new features in order to compete with larger systems.",
    secondarydescription:
      "The app idea came about from years of being in the e-commerce industry and seeing that so many inventory management systems that were affordable for small business, were also incomplete or buggy.",
    image: () => NVNTORYImage,
    stack: () => (
      <span className="card-stack">
        <DiCss3 /> <DiNodejsSmall /> <DiPostgresql /> <DiReact />
      </span>
    ),
  },
  {
    name: "Javascript Method Quiz App",
    repo: "https://jonnyboydev.github.io/JS-Method-Quiz-App/",
    livelink: "https://github.com/jonnyboydev/JS-Method-Quiz-App",
    description:
      'A quiz app that was designed "react-fully" with dynamic HTML based on the state of the web app. The questions in the app can be updated and all data is dynamically rendered when some button is clicked.',
    secondarydescription:
      "The app is created for people who need review of Javascript Methods. It asks you questions and provides multiple choice answers. It shows if you were correct, and how many you got right. It was built to help me practice JS methods.",
    image: () => QuizAppImage,
    stack: () => (
      <span className="card-stack">
        <DiCss3 /> <DiJqueryLogo /> <DiJavascript />
      </span>
    ),
  },
];

const links = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathan-b-clark/",
  },
  {
    name: "Github",
    link: "https://github.com/jonnyboydev",
  },
  {
    name: "Contact",
    link: "mailto:jonathanbclark@outlook.com",
  },
];

export default {
  projects,
  links,
};
