'use client'

import React, { FC, FormEvent, useEffect, useRef, useState } from 'react'
// import { reqresDataType } from '../terminal/Terminal';
import { DisplayShell } from '../terminal/displayShell';
import { TypeBotReqRes } from '@/lib/utils/Types';
import { botdata, dummyBotData } from '@/lib/utils/Constants';
import { AiOutlineSend } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';

interface BotProps {
    closeBotInterface?: () => void;
}



const BotInterface: FC<BotProps> = ({ closeBotInterface = () => { } }) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const [newResponse, setNewResponse] = useState<TypeBotReqRes>({
        value: '',
        sender: 'bot'
    })
    const [userinput, setUserInput] = useState<string>()

    const [enterClicked, setEnterClicked] = useState(false)

    const [botname, setBotName] = useState('Saara')
    const [dataObject, setDataObject] = useState<TypeBotReqRes[]>([
        {
            value:`welcome to the chatbot. I'm ${botname}. I'm here on behalf of my creator Mr. c0mrad1 (sajid) to assist you. I'm like his personal assistant. Ask me anything `,
            sender: 'bot'
        }
    ])
    // const [dataTemporaryObject, setDataTemporaryObject] = useState<reqresDataType[]>([])

    const getBotResponse = (inputValue: string) => {
        const matchingData = botdata.find((data) => data.t.includes(inputValue.toLowerCase()));
        return matchingData ? matchingData.r : "Nothing found";
    };

    const getUserInput = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnterClicked(true);

        if (userinput) {

            setDataObject(prevData => [
                ...prevData,
                {
                    value: userinput,
                    sender: 'user'
                }
            ]);

            const response = await getBotResponse(userinput)
            console.log("🚀 ~ file: BotInterface.tsx:48 ~ getUserInput ~ response:", response)
         setNewResponse({
                value: response,
                sender: 'bot'
            })

     
            setDataObject(prevData => [
                ...prevData,
                {
                    value: response,
                    sender: 'bot'
                }
            ]);

            setUserInput('')
        }


    }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [dataObject]);


    return (
        <div className='w-full h-full flex items-center justify-center px-4'>
            <div className='w-full flex-col flex justify-between sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-[27rem] max-h-fit md:h-[33rem] rounded-lg z-10 bg-black border border-b-0'>
                <div className='w-full border-b p-4 bg-primarybg rounded-t-lg'>
                    <div className=' w-full flex justify-between'>
                        <button onClick={closeBotInterface} className="p-1 rounded-full border-white"><CgClose /></button>
                        <p>{botname}</p>
                    </div>
                </div>


                <div ref={containerRef} className='h-full w-full overflow-auto pb-5 pt-2'>
                    {dataObject.map((data, index) => {
                        return <div key={index} className={` w-full rounded my-1 p-1 flex ${data.sender === 'bot' ? 'justify-start pl-2' : 'justify-end pr-2'}`}>
                            <p className={`w-fit max-w-[80%] sm:max-w-[60%] border rounded-md p-2 ${data.sender === 'bot' ? 'text-left pl-3 bg-primarybg' : 'text-right pr-3 bg-gray-800'}`}>{data.value}</p>
                        </div>
                    })}
                </div>


                <div className='w-full'>
                    <form onSubmit={getUserInput} className='flex justify-between w-full border p-3 bg-primarybg rounded-b-md'>
                        <input type="text" placeholder='type here ....' className='w-full bg-primarybg outline-none' value={userinput} onChange={(e) => setUserInput(e.currentTarget.value)} />
                        <button className='text-2xl' type='submit'>
                            <AiOutlineSend />
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default BotInterface
/* 

                <div className='w-full border-b p-4'>
                    <div className=' w-full flex justify-between'>
                        <button onClick={closeBotInterface} className="h-5 w-5 rounded-full bg-red-600 border border-white"></button>
                        <p>this is bot</p>
                    </div>
                </div>
                <div className='h-full pb-5 flex flex-col justify-between'>


                    <div>

                    </div>

                    
                    <div className='w-full'>
                        <form action="" className='flex justify-between w-full'>
                            <input type="text" className='w-full' />
                            <button className=''>send</button>
                        </form>
                    </div>

                </div>

*/