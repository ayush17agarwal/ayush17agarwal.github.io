export const profile = {
  name: "Ayush Agarwal",
  role: "Forward Deployed Engineer at Rippling",
  location: "New York, NY",
  email: "ayush.b.agarwal@gmail.com",
  linkedin: "https://www.linkedin.com/in/ayush-b-agarwal",
  github: "https://github.com/ayush17agarwal",
  tagline:
    "I build software that ends up in the hands of real customers — from healthcare AI at AWS to deployment infrastructure spanning a global cloud.",
};

export type ExperienceRole = {
  title: string;
  period: string;
  description?: string;
  bullets?: string[];
  skills?: string[];
};

export type ExperienceEntry = {
  company: string;
  location?: string;
  totalPeriod?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Rippling",
    location: "New York, United States · Hybrid",
    roles: [
      {
        title: "Forward Deployed Engineer",
        period: "Mar 2026 – Present",
      },
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    location: "Seattle, Washington, United States",
    totalPeriod: "Aug 2023 – Mar 2026 · 2 yrs 8 mos",
    roles: [
      {
        title: "Software Development Engineer II",
        period: "Jan 2026 – Mar 2026",
      },
      {
        title: "Software Development Engineer — HealthCare AI @ AWS HealthLake",
        period: "Sep 2024 – Jan 2026",
        skills: ["Healthcare", "Engineering"],
      },
      {
        title: "Software Development Engineer — Amazon Software Builder Experience (ASBX)",
        period: "Aug 2023 – Sep 2024",
        bullets: [
          "Engineered scalable CI/CD infrastructure for Native AWS (NAWS), supporting reliable deployments across Amazon's global infrastructure.",
          "Delivered features extending CI/CD systems to 4 new AWS regions and across 3 different partition boundaries, expanding deployment reach at scale.",
        ],
        skills: ["Java", "AWS CloudFormation"],
      },
    ],
  },
  {
    company: "University of Illinois Urbana-Champaign",
    location: "Urbana-Champaign Area",
    roles: [
      {
        title: "Course Assistant — CS 100 CA/ELA",
        period: "Aug 2021 – Dec 2022",
        description:
          "Taught ~25 freshmen in Computer Science across 2 semesters, covering opportunities within the university and careers in CS. Cultivated original lesson plans, fostered discussions about mental health, and talked through careers in software engineering.",
        skills: ["Communication", "Leadership"],
      },
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    location: "Seattle, Washington, United States",
    roles: [
      {
        title: "Software Developer Intern",
        period: "May 2022 – Aug 2022",
        description:
          "Worked on the Amazon HealthLake service with the Health AI team, building a new advanced search parameter for AWS HealthLake's FHIR API that helped thousands of customers get more out of HealthLake. Learned and used AWS services including S3, DynamoDB, SageMaker, and Coral.",
        skills: ["Amazon Web Services (AWS)", "Java"],
      },
    ],
  },
  {
    company: "FIS",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "May 2020 – Dec 2020",
        skills: ["Programming"],
      },
    ],
  },
  {
    company: "Fermilab",
    location: "Batavia, Illinois, United States",
    roles: [
      {
        title: "Research Student",
        period: "Aug 2017 – Jun 2019",
        description:
          "Researched the existence of Preons — hypothesized particles smaller than an electron or proton — with physicists at Fermilab and CERN. Created and analyzed Monte Carlo models using Bayesian and Frequentist methods, working in C++ with the ROOT data analysis framework.",
        skills: ["Programming"],
      },
    ],
  },
  {
    company: "Worldpay",
    location: "Massachusetts",
    roles: [
      {
        title: "Software Developer Intern",
        period: "Jun 2018 – Aug 2018",
        description:
          "Built SDKs in Java, Python, Ruby, and PHP for clients building eCommerce platforms, and documented starting guides for the team's GitHub Pages site.",
        skills: ["Programming"],
      },
    ],
  },
];

export type EducationEntry = {
  school: string;
  credential: string;
  period: string;
  location?: string;
  details?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "University of Illinois Urbana-Champaign",
    credential: "Bachelor of Science, Computer Science",
    period: "Aug 2019 – May 2023",
    details: [
      "Association for Computing Machinery (ACM), HackIllinois, Neurotech @ UIUC",
    ],
  },
  {
    school: "University of Washington",
    credential: "Graduate Certificate, Machine Learning and Deep Learning",
    period: "Jan 2024 – Nov 2024",
    details: [
      "Three-course program covering machine learning and its real-world applications.",
    ],
  },
  {
    school: "Illinois Mathematics and Science Academy (IMSA)",
    credential: "Computer Science",
    period: "2016 – 2019",
    details: ["FRC Team #2022, Varsity Golf Team, Math Team, Social Entrepreneurship"],
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  tags?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Machine Learning AI Chatbot",
    period: "2024",
    description:
      "An AI chatbot built during my University of Washington Machine Learning certificate, able to answer open-ended questions using retrieval-augmented generation.",
    tags: ["OpenAI", "LangChain", "Pinecone", "PyTorch", "Streamlit"],
  },
  {
    name: "KisumuKrafts",
    period: "Oct 2016 – May 2019",
    description:
      "A student-run nonprofit I co-founded with 3 classmates at IMSA, selling jewelry and cards handmade by single mothers in Kisumu, Kenya. We wrote the business plan, pitched it to a government official from Kenya for funding, and sold our first batch locally — raising $750 that went directly back to the women who made the products.",
    tags: ["Social Entrepreneurship", "Nonprofit"],
  },
  {
    name: "This Website",
    period: "2026",
    description:
      "A ground-up rebuild of this site — from a decade-old static HTML/CSS layout to a Next.js and TypeScript codebase, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ayush17agarwal/ayush17agarwal.github.io",
  },
];

export type Volunteering = {
  role: string;
  org: string;
  period: string;
  description?: string;
};

export const volunteering: Volunteering[] = [
  {
    role: "Golf Coach",
    org: "Pinecrest Golf Club",
    period: "Jun 2020 – Aug 2021",
    description:
      "Coached children ages 4–17 in the PGA Jr. League, working on every part of the game from chipping and putting to approach shots.",
  },
  {
    role: "Volunteer",
    org: "Home of the Sparrow, Inc.",
    period: "Jan 2019 – Aug 2019",
    description:
      "Sorted donated goods — clothes, toys, shoes, furniture — at a thrift store and donation center in Algonquin, IL.",
  },
];
