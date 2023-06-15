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
  image:string;
  name:string;
  desc:string;
  websitelink:string;
  techstacks:string[];
  githublink:string;
  }

  export type TypeStacks ={
    image:string;
    name:string;
    desc:string;
    date:string;
  }

  export type TypeFriendCard = {
    name: string;
    institution?: string;
    firstimpressions?: string;
    bestmemory?: string;
    id?: string;
    image?: string;
    dob: string;
    gallery?: string[];
  };
  

  export const dummyFriendData: TypeFriendCard[] = [
    {
      id:'1',
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      institution:'some institution institution institution institution institution' ,
      dob: "1990-01-01T00:00:00.000Z",
      firstimpressions: "We met at a party and instantly clicked.",
      bestmemory: "Our trip to the beach last summer was amazing!",
      gallery: [
        "https://source.unsplash.com/random/1",
        "https://source.unsplash.com/random/2",
        "https://source.unsplash.com/random/3",
      ],
    },
    {
      id:'2',
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      institution:'some institution',
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
      id:'3',
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      institution:'some institution,',
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
    }
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
      techstacks:['React','Nextjs','tailwindcss','Typescript','Express'],
      githublink: "https://github.com/project1",

    },
    {
      image: "/bg/bg-2.png",
      name: "Project 2",
      desc: "This is the description for Project is the description for Project is theis the description for Project  is the description for Project i1.",
      websitelink: "https://www.project2.com",
      techstacks:['React','Nextjs','tailwindcss','Typescript','Express'],
      githublink: "https://github.com/project2",
    },
    {
      image: "/bg/bg-3.png",
      name: "Project 3",
      desc: "This is the description for Project is the description for Project is theis the description for Project  is the description for Project i1.",
      websitelink: "https://www.project3.com",
      techstacks:['React','Nextjs','tailwindcss','Typescript','Express'],
      githublink: "https://github.com/project3",
    },
    // Add more dummy projects as needed
  ];
  
  