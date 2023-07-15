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


export type FriendData = {
  name: string;
  institution: string;
  firstimpressions: string;
  bestmemory: string;
  id: string;
};

