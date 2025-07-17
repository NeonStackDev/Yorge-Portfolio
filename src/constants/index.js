import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  monster,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  resume,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
  {
    title: "React native Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.jS",
    icon: reactjs,
  },
  {
    name: "Next.jS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node.jS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Monster + CareerBuilder",
    company_website: "https://www.linkedin.com/company/monster/about/",
    icon: monster,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "We enhanced our employer recruitment portal with job posting, applicant tracking, multi-user access, and subscription models.",
      "We integrated AI agents for job posting, candidate insights, and job seeker matching to reduce the workload of recruiters by 80%.",
      "We aimed to reduce the workload of recruiters by 50% by automatically scheduling interviews with AI interview agents.",
      "We leveraged monitoring tools such as AWS (Lambda, SQS, SNS, S3, KDS, DynamoDB, Elasticsearch) and Splunk.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Crmnext",
    company_website: "https://www.businessnext.com/crm",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2024",
    points: [
      "Developing Flow and Layout Designers for HDFC, PNB, IOB and Utkarsh Bank",
      "Improved team efficiency by 50% through implementing a monorepo architecture and reusable design system",
      "Eliminate manual configuration tasks with integrated GenAI models that automate flow generation from user prompts",
      "Improved code stability and reduced bugs by achieving 80% code coverage with integrated unit tests",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2023",
    points: [
      "Develop and maintain web and mobile applications using React.js, React-native, and other related technologies.",
      "Work with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implement responsive design and ensure cross-browser compatibility.",
      "Participate in code reviews and provide constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Newgen Software",
    company_website: "https://newgensoft.com/home-india/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2021",
    points: [
      "Developed groundbreaking banking products for Singapore businesses to improve transaction management.",
      "Developed dynamic dashboards for efficient transaction management, improving productivity by 30%.",
      "Reduced page loading time by 20% and built responsively to optimize front-end performance.",
      "Developed transaction report generator to reduce report generation time by 50% and improve data analysis.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Skillrisers",
    company_website: "https://www.skillrisers.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jul 2020",
    points: [
      "Contributed to the development of the test engine application to enable users to seamlessly create and run tests.",
      "Builds three essential modules - Teacher, Student, and Administrator - to provide comprehensive functionality for all user roles.",
      "Works effectively with the development team, actively participates in code reviews, and resolves technical issues.",
      "Demonstrated excellent problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Self-employed",
    company_website: "https://proximus.surge.sh/index.html",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Jan 2021",
    points: [
      "Leaded the development of a fully responsive website for a college coding club.",
      "Leaded coding sessions and actively shared knowledge and insights to enhance members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies including JavaScript and React.js.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];

const personalInfo = {
  name: "Yorge Francia",
  fullName: "Yorge Francia",
  email: "",
  mobile: "",
  telegram : '',
  role: "Senior Software Developer",
  about: `I am an experienced software developer with extensive experience in TypeScript and JavaScript, and expertise in frameworks like React.js, Next.js, React-naitve, and Node.js.
I  work closely with customers to develop efficient, scalable, and user-friendly solutions that solve real-world problems.
Let's make your ideas a reality!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume: resume,
  socialProfiles: {
    github: {
      title: "github",
      link: "https://github.com/NeonStackDev",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
