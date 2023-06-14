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
