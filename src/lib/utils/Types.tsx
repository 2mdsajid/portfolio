import { ReactElement } from "react";
import { IconType } from "react-icons";
import { BsPhone } from "react-icons/bs";
import { FaBrain,FaWalking } from "react-icons/fa";
import { GiDiscussion, GiNoseFront,GiPublicSpeaker } from "react-icons/gi";
import {RiSpeakerLine} from 'react-icons/ri'

// export type TypeSingleBlog = {
//   _id: string;
//   title: string;
//   url: string;
//   category: string;
//   subcategory?: string;
//   author?: string;
//   intro: string;
//   introimage:string;
//   content: string;
//   review?: boolean;
//   published?: boolean;
//   keywords?: string[];
//   readtime?: string;
//   upvote?: string[];
//   downvote?: string[];
//   comments?: {
//       name?: string;
//       email?: string;
//       comment?: string;
//   }[];
//   isupdated?:{
//       state:boolean;
//       date:Date;
//   }
//   date?: Date;
//   views?: number;
//   rating?: number;
// }


export type TypeSingleBlog = {
  _id: string;
  title: string;
  url: string;
  category: string;
  subcategory?: string;
  author: string;
  intro: string;
  introimage: string;
  content: string;
  review?: boolean;
  keywords?: string[];
  published?: boolean;
  readtime: string;
  date: string;
  views: number;
  rating: number;
};

export type TypeParamProps = {
  params: {
    url: string
    uniqueid: string
  };
  searchParams: {
    query: string
  }
}

export type TypeBlogCard = {
  id: string;
  title: string;
  intro: string;
  date: string;
  url: string;
}

export type TypeServiceCard = {
  icon: ReactElement;
  title: string;
  description: string;
  modelcontent: string;
}

export type Event = {
  yr: number;
  mon: string;
  day: number;
  num: number;
  src: string;
  title: string;
  desc: string;
};

export type TypeProject = {
  image: string;
  name: string;
  desc: string;
  websitelink: string;
  techstacks: string[];
  githublink: string;
}

export type TypeStacks = {
  image: string;
  name: string;
  desc: string;
  date: string;
}

export type TypeFriendCard = {
  name: string;
  institution?: string;
  firstimpressions?: string;
  bestmemory?: string;
  id: string;
  image: string;
  dob: string;
  gallery?: string[];
};


export type TypeSocialMediaLinks = {
  facebook: string;
  instagram: string;
  twitter?: string;
  youtube?: string;
  telegram?: string;
};

export type TypeWork = {
  jobinstitution: string;
  jobrole: string;
  jobyear: string;
  jobdescription: string;
  jobimage: string;
};

export type TypeSchool = {
  schoolinstitution: string;
  schoollevel: string;
  classof: string;
  schooldescription: string;
  schoolimage: string;
};

export type TypeHtmlPageData = {
  metadescription: string;
  username: string;
  professions: string[];
  cover: string;
  about: string;
  resumefile: string;
  works: TypeWork[];
  schools: TypeSchool[];
  email: string;
  socialmedialinks: TypeSocialMediaLinks;
  address: string;
}

/*       username,
    email,
    address,
    about,
    cover,
    resumefile,
    schools,
    works,
    professions,
    socialmedialinks, */

export type TypeHtmlResData = {
  uniqueid: string;
  metadescription: string;
  username: string;
  professions: string[];
  cover: string;
  about: string;
  address: string;
  resumefile: string;
  works: TypeWork[];
  schools: TypeSchool[];
  email: string;
  socialmedialinks: TypeSocialMediaLinks;
  _id: string;
  __v: number;
};

export type TypeBotReqRes = {
  value: string;
  sender: 'bot' | 'user';
}

export type TypeTalent = {
  icon:React.ReactNode;
  title:string;
  desc:string;
}

export const dummyTalents: TypeTalent[] = [
  {
    icon: <GiNoseFront />,
    title: 'Allergic Rhinitis',
    desc:'God gave me Allergic Rhinitis. I do not blame myself for that as it is god-gifted. i have to take Lukast Plus ( a medicine for allergies ) every 3 days because on the 3rd day i get the rhinitis.'
  },
  {
    icon: <FaBrain />,
    title: 'Distractibility Disorder',
    desc:'a reduced ability to maintain attention on a specific task or stimuli due to the presence of external or internal distractions. It is exaggerated by notifications.'
  },
  {
    icon: <BsPhone />,
    title: 'Infomania',
    desc:'a condition characterized by an excessive and compulsive need to constantly consume or seek out information, particularly through digital devices and technologies.'
  },
  {
    icon: <FaWalking />,
    title: 'Dance',
    desc:'LOL! I don\'t know dancing. tbh I hate it. Last time I danced and the results were quite awkward'
  },
  {
    icon: <GiPublicSpeaker />,
    title: 'Public Speaking',
    desc:'In the name public speaking, I have given some speeches in my school.'
  },
  {
    icon: <GiDiscussion />,
    title: 'Social Skills',
    desc:'I am the INTROVERT GUY. I can not start a conversation. I can not keep one either. It\'s all Up to You.'
  },
]


export const dummyPageData: TypeHtmlPageData = {
  metadescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  username: "John Doe",
  professions: ["Web Developer", "Graphic Designer"],
  cover: "https://res.cloudinary.com/dww0rxb4q/image/upload/v1686937083/landingpagenobg_z9ay8r.png",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eleifend metus in dapibus.",
  resumefile: "https://example.com/resume.pdf",
  works: [
    {
      jobinstitution: "ABC Company",
      jobrole: "Front-end Developer",
      jobyear: "2019-2021",
      jobdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      jobimage: "https://example.com/images/work1.jpg",
    },
    {
      jobinstitution: "XYZ Agency",
      jobrole: "Graphic Designer",
      jobyear: "2018-2019",
      jobdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      jobimage: "https://example.com/images/work2.jpg",
    },
  ],
  schools: [
    {
      schoolinstitution: "ABC School",
      schoollevel: "High School",
      classof: "2015",
      schooldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      schoolimage: "https://example.com/images/school1.jpg",
    },
    {
      schoolinstitution: "XYZ College",
      schoollevel: "Bachelor's Degree",
      classof: "2019",
      schooldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      schoolimage: "https://example.com/images/school2.jpg",
    },
  ],
  email: "johndoe@example.com",
  socialmedialinks: {
    facebook: "https://facebook.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    telegram: "https://telegram.me/johndoe",
  },
  address: "123 Street, City, Country",
};


export const dummyFriendData: TypeFriendCard[] = [
  {
    id: '1',
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    institution: 'some institution institution insttion institution',
    dob: "1990-01-01T00:00:00.000Z",
    firstimpressions: "We met at a party and instantly clicked.",
    bestmemory: "Our trip to the beach last summer was amazing!",
    gallery: [
      "https://source.unsplash.com/random/1",
      "https://source.unsplash.com/random/2",
      "https://source.unsplash.com/random/3",
      "https://source.unsplash.com/random/2",
      "https://source.unsplash.com/random/3",
      "https://source.unsplash.com/random/2",
      "https://source.unsplash.com/random/3",
    ],
  },
  {
    id: '2',
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    institution: 'some institution',
    dob: "1990-01-01T00:00:00.000Z",
    firstimpressions: "We became friends through a mutual hobby.",
    bestmemory: "Attending a concert together was so much fun!",
    gallery: [
      "https://source.unsplash.com/random/4",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
    ],
  },
  {
    id: '3',
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    institution: 'some institution,',
    dob: "1990-01-01T00:00:00.000Z",
    firstimpressions: "We became friends through a mutual hobby.",
    bestmemory: "Attending a concert together was so much fun!",
    gallery: [
      "https://source.unsplash.com/random/4",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6",
    ],
  },
  {
    "id": "4",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "John Doe",
    "institution": "Some Institution",
    "dob": "1990-01-01T00:00:00.000Z",
    "firstimpressions": "We met at a conference and instantly connected.",
    "bestmemory": "Exploring a new city together was an unforgettable experience.",
    "gallery": [
      "https://source.unsplash.com/random/1",
      "https://source.unsplash.com/random/2",
      "https://source.unsplash.com/random/3"
    ]
  },
  {
    "id": "5",
    "image": "https://randomuser.me/api/portraits/women/1.jpg",
    "name": "Emily Johnson",
    "institution": "Another Institution",
    "dob": "1992-05-15T00:00:00.000Z",
    "firstimpressions": "We were roommates in college and became close friends.",
    "bestmemory": "Traveling to a tropical paradise together was a dream come true.",
    "gallery": [
      "https://source.unsplash.com/random/4",
      "https://source.unsplash.com/random/5",
      "https://source.unsplash.com/random/6"
    ]
  },
  {
    "id": "6",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Jane Smith",
    "institution": "Some Institution",
    "dob": "1990-01-01T00:00:00.000Z",
    "firstimpressions": "We became friends through a mutual hobby.",
    "bestmemory": "Attending a concert together was so much fun!",
    "gallery": [
      "https://source.unsplash.com/random/7",
      "https://source.unsplash.com/random/8",
      "https://source.unsplash.com/random/9"
    ]
  },
  {
    "id": "7",
    "image": "/200909.jpg",
    "name": "Michael Brown",
    "institution": "Yet Another Institution",
    "dob": "1988-09-21T00:00:00.000Z",
    "firstimpressions": "We met at a workshop and bonded over shared interests.",
    "bestmemory": "Taking a road trip together created lasting memories.",
    "gallery": [
      "https://source.unsplash.com/random/10",
      "https://source.unsplash.com/random/11",
      "https://source.unsplash.com/random/12"
    ]
  },
  {
    "id": "8",
    "image": "https://randomuser.me/api/portraits/women/3.jpg",
    "name": "Sarah Davis",
    "institution": "One More Institution",
    "dob": "1994-12-10T00:00:00.000Z",
    "firstimpressions": "We met through a common friend and instantly clicked.",
    "bestmemory": "Celebrating a milestone together was a memorable experience.",
    "gallery": [
      "https://source.unsplash.com/random/13",
      "https://source.unsplash.com/random/14",
      "https://source.unsplash.com/random/15"
    ]
  },
  {
    "id": "9",
    "image": "https://randomuser.me/api/portraits/men/2.jpg",
    "name": "Michael Brown",
    "institution": "Yet Another Institution",
    "dob": "1988-09-21T00:00:00.000Z",
    "firstimpressions": "We met at a workshop and bonded over shared interests.",
    "bestmemory": "Taking a road trip together created lasting memories.",
    "gallery": [
      "https://source.unsplash.com/random/10",
      "https://source.unsplash.com/random/11",
      "https://source.unsplash.com/random/12"
    ]
  },
  {
    "id": "10",
    "image": "https://randomuser.me/api/portraits/women/3.jpg",
    "name": "Emily Johnson",
    "institution": "Creative Academy",
    "dob": "1992-05-12T00:00:00.000Z",
    "firstimpressions": "We were roommates in college and became inseparable.",
    "bestmemory": "Traveling abroad together was an unforgettable experience.",
    "gallery": [
      "https://source.unsplash.com/random/13",
      "https://source.unsplash.com/random/14",
      "https://source.unsplash.com/random/15"
    ]
  },
  {
    "id": "11",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Daniel Anderson",
    "institution": "Tech Innovators",
    "dob": "1995-12-03T00:00:00.000Z",
    "firstimpressions": "We became friends while working on a challenging project.",
    "bestmemory": "Celebrating a milestone together was a moment of triumph.",
    "gallery": [
      "https://source.unsplash.com/random/16",
      "https://source.unsplash.com/random/17",
      "https://source.unsplash.com/random/18"
    ]
  },
  {
    "id": "12",
    "image": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Olivia Davis",
    "institution": "Arts & Culture Society",
    "dob": "1990-07-28T00:00:00.000Z",
    "firstimpressions": "We met at an art exhibition and connected instantly.",
    "bestmemory": "Attending a music festival together was an unforgettable adventure.",
    "gallery": [
      "https://source.unsplash.com/random/19",
      "https://source.unsplash.com/random/20",
      "https://source.unsplash.com/random/21"
    ]
  },
  {
    "id": "13",
    "image": "https://randomuser.me/api/portraits/men/4.jpg",
    "name": "David Wilson",
    "institution": "Sports Academy",
    "dob": "1987-03-17T00:00:00.000Z",
    "firstimpressions": "We bonded over our love for a particular sport and became teammates.",
    "bestmemory": "Winning a championship together was an incredible achievement.",
    "gallery": [
      "https://source.unsplash.com/random/22",
      "https://source.unsplash.com/random/23",
      "https://source.unsplash.com/random/24"
    ]
  },
  // Add more dummy data objects as needed
];



export const dummyData = [
  {
    image: "nodejs",
    name: "QBASIC",
    desc: "i wrote my first 'Hello World! and then played around logics, loops and callbacks and made some games, quizzes until I ended up in my +2.",
    date: "2002 Dec 25" // Original date format
  },
  {
    image: "Python",
    name: "Python",
    desc: "it was corona lockdown and i was watching some AI videos on yt and thought to learn one. I asked Roman, and he suggested me to learn Python.\nI still had my phone. No PC or Laptop",
    date: "2010 Nov 12" // Original date format
  },
  {
    image: "JavaScript",
    name: "JavaScript",
    desc: "As i was mastering the python, I found out Roman's website and thne realize I should have also one. so started HTML & CSS then moved to Javascript. Only after joining MBBS, in 2nd year i got Laptop and then made this all",
    date: "2021 Aug 31" // Original date format
  }
];


export const dummyProjects: TypeProject[] = [
  {
    image: "/projects/kafleblog.png",
    name: "Aayushma's Blog Website",
    desc: "This is the personal blog website for my friend Aayushma Kafle (@aayushm_19). She writes her personal experiences in the medical field along with tips, guidance regarding her field. ",
    websitelink: "https://aayushmakafle.com.np",
    techstacks: ['nextjs', 'tailwind', 'typescript', 'nodejs','expressjs','mongodb'],
    githublink: "https://github.com/2mdsajid/kafleblog-client2",
  },
  {
    image: "/projects/bdaycounter.png",
    name: "MCOMS Bdays Reminder",
    desc: "This is the official birthdays counter website for the students of MCOMS, Pokhara. This will send birthday reminders to the students on someone's birthday.",
    websitelink: "https://birthdays.rajbasel.com.np/",
    techstacks: ['React', 'nextjs', 'tailwind', 'typescript', 'nodejs','expressjs','mongodb'],
    githublink: "https://github.com/2mdsajid/bday-client",
  },
  {
    image: "/projects/homesplit.png",
    name: "Flat Expense Sharing",
    desc: "This site helps to track expenses by the members of a house or flat when living together. It has a dashboard and has features sush as  Add members, Invite members, Realtime etc ",
    websitelink: "https://homesplit.netlify.app/",
    techstacks: ['React', 'nextjs', 'tailwind', 'typescript', 'nodejs','expressjs','mongodb'],
    githublink: "https://github.com/2mdsajid/expense-client/tree/master",
  },
  {
    image: "/projects/rajwebsite.png",
    name: "Raj Portfolio",
    desc: "This is a simple portfolio website for my friend Raj Basel (@livingasrb007).",
    websitelink: "https://rajbasel.com.np/",
    techstacks: ['html', 'css', 'javascript'],
    githublink: "https://github.com/2mdsajid/rajbasel",
  },
  // Add more dummy projects as needed
];

