'use client'

import { ParsedHtml } from '@/lib/utils/Functions';
// const TypewriterPrint = ({ text, reqtext }: { text: string, reqtext: string }) => {
//     const [displayText, setDisplayText] = useState("");

//     useEffect(() => {
//       let currentIndex = -1;
//       let intervalId: NodeJS.Timeout;

//       const startTyping = () => {
//         intervalId = setInterval(() => {
//           setDisplayText((prevText) => prevText + text[currentIndex]);
//           currentIndex++;
//           if (currentIndex === text.length-1) {
//             clearInterval(intervalId);
//           }
//         }, 50);
//       };

//       const resetTyping = () => {
//         setDisplayText("");
//     };

//     if (text) {
//         console.log("🚀 ~ file: displayShell.tsx:29 ~ useEffect ~ text:", text)
//         startTyping();
//         setDisplayText("");
//       } else {
//         resetTyping();
//       }

//       return () => {
//         clearInterval(intervalId);
//         resetTyping();
//       };
//     }, [reqtext]);

//     return text ? <p>{ParsedHtml(displayText)}</p> : null;
//   };


/* 
isnew ? <Typewriter
                options={{
                    strings: [response],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: "natural",
                
                }}
            /> :
*/


export const DisplayShell = ({ request, response, isnew, akey }: { request: string, response: string, isnew: boolean, akey: number }) => {
    return (
        <div key={akey} className="terminal-shell mb-2 text-sm">
            {request && <p className='text-xs under'  id="dollar">$ {request}</p>}
            {response && <p className='text-xs'> {ParsedHtml(response)}</p>}
        </div>
    )
}
