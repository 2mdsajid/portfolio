import parse from 'html-react-parser';


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

import fs from 'fs';
import path from 'path';
import { saveAs } from 'file-saver';


// function to write content to file
export const writeFile = (content:string, filename:string)=> {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, filename);
  }
  