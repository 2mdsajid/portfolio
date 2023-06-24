import { ReactElement } from "react";

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
    name: "Stack 1",
    desc: "Description for Stack 1 limitedfor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limited to 25 words",
    date: "2002 Dec 25" // Original date format
  },
  {
    image: "react",
    name: "Stack 2",
    desc: "Description for Stack 2 limited tofor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limited 25 words",
    date: "2010 Nov 12" // Original date format
  },
  {
    image: "tailwindcss",
    name: "Stack 3",
    desc: "Description for Stack 3 limited to 2for Stack 1 limitedfor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limitedfor Stack 1 limited5 words",
    date: "2021 Aug 31" // Original date format
  }
];


export const dummyProjects: TypeProject[] = [
  {
    image: "/bg/bg-1.png",
    name: "Project 1",
    desc: "This is the description for Project is the description for Project is theis the description for Project  is the description for Project i1.",
    websitelink: "https://www.project1.com",
    techstacks: ['React', 'Nextjs', 'tailwindcss', 'Typescript', 'Express'],
    githublink: "https://github.com/project1",

  },
  {
    image: "/bg/bg-2.png",
    name: "Project 2",
    desc: "This is the description for Project is the description for Project is theis the description for Project  is the description for Project i1.",
    websitelink: "https://www.project2.com",
    techstacks: ['React', 'Nextjs', 'tailwindcss', 'Typescript', 'Express'],
    githublink: "https://github.com/project2",
  },
  {
    image: "/bg/bg-3.png",
    name: "Project 3",
    desc: "This is the description for Project is the description for Project is theis the description for Project  is the description for Project i1.",
    websitelink: "https://www.project3.com",
    techstacks: ['React', 'Nextjs', 'tailwindcss', 'Typescript', 'Express'],
    githublink: "https://github.com/project3",
  },
  // Add more dummy projects as needed
];

