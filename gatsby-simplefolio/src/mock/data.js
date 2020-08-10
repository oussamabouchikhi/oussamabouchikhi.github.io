import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'hello, my name is',
  name: 'Oussama Bouchikhi',
  subtitle: 'I am a Fullstack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smart-brain mac 2.png',
    title: 'CRWN Clothing',
    info: 'React app',
    info2: 'fullstack',
    url: 'malabis.herokuapp.com/',
    repo: 'https://github.com/oussamabouchikhi/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn-clothing mac 2.png',
    title: 'Smart Brain',
    info: 'Face detection app built using React',
    info2: 'Clarifai api',
    url: 'smartterbrain.herokuapp.com/',
    repo: 'https://github.com/oussamabouchikhi/smartbrain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'oussamabouchikhi700@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://twitter.com//oussth3boss',
    },
    {
      id: nanoid(),
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/oussamabouchikhi',
    },
    {
      id: nanoid(),
      name: 'Upwork',
      url: 'https://www.upwork.com/o/profiles/users/~01f42213ee8a3771ac/',
    },
    {
      id: nanoid(),
      name: 'Fiverr',
      url: 'https://www.fiverr.com/oussama700',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oussama-bouchikhi-49a0b6193/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/oussamabouchikhi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
