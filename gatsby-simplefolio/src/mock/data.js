import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'hi, my name is',
  name: 'Oussama Bouchikhi',
  subtitle: 'I am a Fullstack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Let me introduce my self, I am a computer science student at University of Oran 1 also a member in a scientific club called Team Open Minds, our slogan is "Learn, Code, Share" so we are open source contributers and we love to share our knowledge with others.',
  paragraphTwo:
    'My big intrests in development is mostly web dev and little bit of mobile with Flutter. I am an open source enthusiast, long life learner and I love to explore new challenging stuff',
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
    url: 'https://malabis.herokuapp.com/',
    repo: 'https://github.com/oussamabouchikhi/crwn-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'crwn-clothing mac 2.png',
    title: 'Smart Brain',
    info: 'Face detection app built using React',
    info2: 'Clarifai api',
    url: 'https://smartterbrain.herokuapp.com/',
    repo: 'https://github.com/oussamabouchikhi/smartbrain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/oussamabouchikhi/', // if no repo, the button will not show up
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
      name: 'fa fa-twitter',
      url: 'http://twitter.com/oussth3boss',
    },
    {
      id: nanoid(),
      name: 'fa fa-stack-overflow',
      url: 'https://stackoverflow.com/users/13557906/oussama-bouchikhi',
    },
    {
      id: nanoid(),
      name: 'fa fa-facebook',
      url: 'https://www.facebook.com/oussama.bouchikhi.98',
    },
    {
      id: nanoid(),
      name: 'fa fa-instagram',
      url: 'https://www.instagram.com/ousstheboss/',
    },
    {
      id: nanoid(),
      name: 'fa fa-linkedin',
      url: 'https://www.linkedin.com/in/oussama-bouchikhi-49a0b6193/',
    },
    {
      id: nanoid(),
      name: 'fa fa-github',
      url: 'https://github.com/oussamabouchikhi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
