import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'shayanAlam', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shayan Alam',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a Final Year Software Engineering UnderGrad based in Greater Noida.
  I have great intrest in DSA and System Design along with computer science fundamentals.
  `,
  paragraphTwo: `I am skilled in various Frontend, Backend as well as Cloud Technologies.
  My tech stack includes but is not limited to - HTML, CSS, JavaScript, React, Node.js, Express,
  PostgreSQL, MongoDB and Azure.
  `,
  paragraphThree: 'Attatched below is my resume for further details...',
  resume:
    'https://docs.google.com/document/d/1hnoNXuM0zQUyQokC7liW07Itbc2gB2Joa_IFGwclQSY/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Sorting Algorithm Visualizer',
    info: `◆ Built a web application in React to visualize sorting algorithms.
    ◆ Implemented Merge Sort, Bubble Sort, Insertion Sort algorithm.
    ◆ Managed the state of the app using Hooks API.
    ◆ Made the app responsive using CSS Flexbox and React-Bootstrap.
    `,
    info2: '',
    url: 'https://shayan343.github.io/sorting-visualizer/',
    repo: 'https://github.com/shayan343/sorting-visualizer/tree/master/sorting-visualizer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'URL shortener',
    info: `◆ A scalable backend service to shorten long URLs .
    ◆ Developed using NodeJS, Express, Sequelize and PostgreSQL.
    ◆ Capability to generate more than 1 Trillion unique short URLs.
    ◆ Designed REST-style API endpoints for posting, fetching and
    redirection of URLs.
    `,
    info2: '',
    url: 'https://github.com/shayan343/url-shortener',
    repo: 'https://github.com/shayan343/url-shortener', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://www.linkedin.com/in/shayan343',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shayan343/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
