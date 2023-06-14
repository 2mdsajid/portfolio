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

  export type FriendCard =
  {
    image:string;
    name:string;
    dobmon:string;
    dobyr:string;
    firstimpressions:string;
    bestmemory:string;
    gallery?:string[];
  }

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
  
  