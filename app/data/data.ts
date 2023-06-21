import { 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiReact,
  SiDjango,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";
import { TbBrandReactNative } from 'react-icons/tb';

const languages = [
  {
    name: "Python",
    icon: SiPython,
    description: "2 years of experience writing python code",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    description: "2 years of experience writing javascript code",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    description: "6 months experience writing typescript"
  }
]

const frameworks = [
  {
    name: "Django",
    icon: SiDjango,
    description: "Designed and Implemented REST APIs abiding by industry norms",
  },
  {
    name: "React JS",
    icon: SiReact,
    description: "Created User Interface that display data from custom APIs and commercial APIs"
  },
  {
    name: 'Next JS',
    icon: SiNextdotjs,
    description: 'Developed React Application using NextJS front end framework'
  },
  {
    name: 'React Native',
    icon: TbBrandReactNative,
    description: 'Developed Mobile Application using React Native framework'
  },
  {
    name: 'Express JS',
    icon: SiExpress,
    description: 'Designed and Implemented Rest APIs in Express JS'
  }
]

const education = [
  {
    institution: "Strathmore University",
    year: 2023,
    location: "Nairobi - Kenya.",
    certification: "Bachelor Degree in Business Information Technology, Second Class Honors - Upper Division",
    description: "Completed Bachelor's Degree in Business Information Technology, I was awarded with a Second Class honors, Upper Division. Specialized in Business Intelligence. I particulary excelled in System Design and Development and Database Management Units.",
    link: "https://openbadgefactory.com/v1/assertion/f083e55c15acb37f05ef5317181cc01bdfd124be",
  },
  // {
  //   institution: "France Université Numérique",
  //   year: 2023,
  //   location: "Nairobi - Kenya",
  //   certification: "Machine Learning in Python",
  //   description: "Gained knowledge on the steps taked to design and implement predictive modelling pipelines using Sciki-learn",
  //   link: "https://www.coursera.org/account/accomplishments/specialization/certificate/TXKFHR7FA567",
  // },
  // {
  //   institution: 'Coursera - Duke University',
  //   year: 2021,
  //   certification: "Data Analysis with R",
  //   location: "Nairobi - Kenya",
  //   description: "Analysed and visualized data in R, created reproducible data analysis with R and gained conceptual understanding of statistical inference."
  // },
  {
    institution: "Strathmore University",
    year: 2021,
    location: "Nairobi - Kenya.",
    certification: "Diploma in Business Information Technology",
    description: "Completed Diploma in Business Information Technology, I was awarded a Second Class Honors, Upper Division."

  },
]

const projects = [
  
  {
    name: "Shop Price Scraper",
    image: '/images/projects/django-graphql-celery.png',
    description: 'The application Scrapes Popular Products from an ecommerce website in Kenya and provides access to this data \
      a graphal API',
    website_link: "https://django-app-gdbj.onrender.com/graphql",
    github_link: "https://github.com/Sean-Miningah/shopScraper",
    concepts: [
      'Python', 'Django', 'Grapql', 'Docker', 'Celery'
    ]
  },
  {
    name: "Airbnb",
    image: "/images/projects/bnbClone.png",
    description: "Full stack application mimics airbnb functionalities when booking an apartment.",
    website_link: "https://app-clone-y3y4-ia517ydoy-sean-miningah.vercel.app/",
    github_link: "https://github.com/Sean-Miningah/airbnb-clone",
    concepts:[
      "NextJS","Prisma","Axios","TypeScript", "MongoDB"
    ]
  },
  {
    name: "Finanseer",
    image: "/images/projects/finanseer.png",
    description: "Finance Dashboard for tracking expenses through visualised Graphs.",
    website_link: "https://finance-dashboard-7faot454h-sean-miningah.vercel.app/",
    github_link: "https://github.com/Sean-Miningah/FinanceDashboard-Client",
    concepts: [
      'ReactJS', "ExpressJS", "MongoDB", "Axios", "JavaScript"
    ]
  }
]

const experience = [
  
  {
    position_title : "Backend Engineering Intern",
    company: "Lyft",
    year: "June 2023",
    location: "Remote",
    description: "Enganing in projects that require understanding in software architecture \
    , refactoring, unit testing and test-driven-development."
  },
  {
    position_title: "Data Analytics Executive",
    company: "Strathmore Business Club",
    year: "2022-2023",
    location: "Nairobi - Kenya.",
    description: "Leveraged data analytics to identify areas of improvement and \
      develop actionable plans to address those needs.",
  },
  {
    position_title : "Internship",
    company: "Pesaflow Limited",
    year: "2023",
    location: "Nairobi - Kenya.",
    description: "Implemented a quality assurance process that included retrieve \
    manipulating and presenting customer feedback data."
  },
]

export { languages, frameworks, education, projects, experience};