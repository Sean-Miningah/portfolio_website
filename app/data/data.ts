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
  {
    institution: "France Université Numérique",
    year: 2023,
    location: "Nairobi - Kenya",
    certification: "Machine Learning in Python",
    description: "Gained knowledge on the steps taked to design and implement predictive modelling pipelines using Sciki-learn",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/TXKFHR7FA567",
  },
  {
    institution: 'Coursera - Duke University',
    year: 2021,
    certification: "Data Analysis with R",
    location: "Nairobi - Kenya",
    description: "Analysed and visualized data in R, created reproducible data analysis with R and gained conceptual understanding of statistical inference."
  },
  {
    institution: "Strathmore University",
    year: 2021,
    location: "Nairobi - Kenya.",
    certification: "Diploma in Business Information Technology",
    description: "Completed Diploma in Business Information Technology, I was awarded a Second Class Honors, Upper Division."

  },
]

export { languages, frameworks, education};