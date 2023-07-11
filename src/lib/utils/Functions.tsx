import parse from 'html-react-parser';

// get and set unique user id on first visit
export const setUniqueUserId = async () => {
    
    const response = await fetch(FRONTEND + '/api/ip');
    const data = await response.json();
    
    let uniqueid = localStorage.getItem('uniqueid')
    if (uniqueid || !uniqueid) {
        if (uniqueid) {
            uniqueid = JSON.parse(uniqueid);
        }
        if (uniqueid === null || uniqueid === 'null' || uniqueid === 'undefined') {
            console.log('null')
            const { v4: uuidv4 } = require('uuid');
            const vvid = uuidv4(); // generates a version 4 UUID 

            localStorage.setItem(`uniqueid`, JSON.stringify(vvid));
            return vvid;
        }
        return uniqueid;
    }
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
import { FRONTEND } from './Constants';


// function to write content to file
export const writeFile = (content:string, filename:string)=> {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, filename);
  }
  