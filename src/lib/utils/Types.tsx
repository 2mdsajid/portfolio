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
  
  