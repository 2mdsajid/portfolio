import parse from 'html-react-parser';

// get and set unique user id on first visit
export const setUniqueUserId = async (path:string) => {
    
    // const response = await fetch(FRONTEND + '/api/ip');
    // const data = await response.json();
    
    // let uniqueid = localStorage.getItem('uniqueid')
    // if (uniqueid || !uniqueid) {
    //     if (uniqueid) {
    //         uniqueid = JSON.parse(uniqueid);
    //     }
    //     if (uniqueid === null || uniqueid === 'null' || uniqueid === 'undefined') {
    //         console.log('null')
    //         const { v4: uuidv4 } = require('uuid');
    //         const vvid = uuidv4(); // generates a version 4 UUID 

    //         localStorage.setItem(`uniqueid`, JSON.stringify(vvid));
    //         return vvid;
    //     }
    //     return uniqueid;
    // }

    
}

// shuffle
export function shuffleArray(array: Array<TypeFriendCard>) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

/* PARSING HTML----------------------------- */
export const ParsedHtml = (str: string) => {
    let newstr = str;
    let parsedHtml = null;
    if (newstr) {
        parsedHtml = parse(newstr);
    }
    return parsedHtml;
};

// iso string format
export const IsoFOrmat = (date: string) => {
    const datee = new Date(date);
    return datee.toISOString();
}

import { saveAs } from 'file-saver';
import { BACKEND, FRONTEND } from './Constants';
import { TypeFriendCard } from './Types';


// function to write content to file
export const writeFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, filename);
}


export function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
  }

 export function getRandomGender() {
    const genders = ['men', 'women'];
    const randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
  }
  