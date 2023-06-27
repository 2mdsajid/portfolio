'use client'


import { botdata, terminaldata } from '@/lib/utils/Constants';
import { ParsedHtml } from '@/lib/utils/Functions';

import React, { FC, FormEvent, FormEventHandler, RefObject, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { DisplayShell } from './displayShell';

export type reqresDataType = {
    request: string,
    response: string
}

interface TerminalProps {
    closeTerminal?: () => void;
  }



  const Terminal: FC<TerminalProps> = ({ closeTerminal = () => {} }) => {

    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    
    const [enterClicked, setEnterClicked] = useState(false)
    const [botMode, setBotMode] = useState(false)
    
    const [currentUser, setCurrentUser] = useState('c0mrad1')
    
    const [initialRootValue, setInitialRootvalue] = useState('$ ')
    const [preRootValue, setPreRootvalue] = useState('a terminal created by sajid')
    const [inputValue, setInputValue] = useState('')
    
    const [dataObject, setDataObject] = useState<reqresDataType[]>([])
    const [dataTemporaryObject, setDataTemporaryObject] = useState<reqresDataType[]>([])
    
    const [newResponse, setNewResponse] = useState<reqresDataType>({
        request: '',
        response: ''
    })
    
    const getBotResponse = (inputValue: string) => {
        const matchingData = botdata.find((data) => data.t.includes(inputValue.toLowerCase()));
        return matchingData ? matchingData.r : "Nothing found";
    };
    
    const getResponse = (inputValue: string) => {
        const matchingData = terminaldata.find((data) => data.t.includes(inputValue.toLowerCase()));
        return matchingData ? matchingData.r : "Nothing found";
    };
    
    
    const getUserInput = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnterClicked(true);
        
        if (inputValue === "") {
            return
        }

        if (inputValue === "--cuser <name>") {
            return
        }
        
        if (inputValue === 'bot') {
            setBotMode(true);
            setPreRootvalue('bot mode initiated');
            setDataTemporaryObject([...dataObject, newResponse])
            setDataObject([])
            setEnterClicked(false);
            setInputValue('');
            setNewResponse({
                request: '',
                response: '',
            });
            
            setInitialRootvalue('C:/bot/$')
            return;
        }
        
        if (inputValue === 'clear') {
            setPreRootvalue('shell cleaared!');
            setDataTemporaryObject([])
            setDataObject([])
            setEnterClicked(false);
            setInputValue('');
            setNewResponse({
                request: '',
                response: '',
            });
            return;
        }
        
        if (inputValue === 'exit' && botMode) {
            setBotMode(false)
            setPreRootvalue('exit bot mode!')
            console.log("🚀 ~ file: Terminal.tsx:92 ~ getUserInput ~ dataTemporaryObject:", dataTemporaryObject)
            setDataObject(dataTemporaryObject)
            setDataTemporaryObject([])
            setNewResponse({
                request: '',
                response: '',
            });
            setEnterClicked(false);
            setInputValue('');
            setInitialRootvalue('$')
            
            return
        }

        const response = botMode ? getBotResponse(inputValue) : getResponse(inputValue);
        if (newResponse.request && newResponse.response) {
            setDataObject([...dataObject, newResponse]);
        }

        setNewResponse({
            request: inputValue,
            response: response,
        });

        setEnterClicked(false);
        setInputValue('');
    };


    const toggleKeyboard = () => {
        if (enterClicked) {
            return
        }
        // console.log('clicked')
        { !enterClicked && inputRef.current?.focus() }
    }


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [dataObject]);


    return (
        <div className='h-full w-full bg-black text-white border border-gray-700 rounded-xl' >
            <div className='h-10% w-full  rounded-t-xl flex justify-between items-center p-1 py-2 bg-slate-800'>
                <div className='mx-1 flex space-x-1'>
                    <button onClick={closeTerminal} className="h-5 w-5 rounded-full bg-red-600 border border-white"></button>
                    <button className="h-5 w-5 rounded-full bg-orange-600 border border-white"></button>
                    <button className="h-5 w-5 rounded-full bg-green-600 border border-white"></button>
                </div>
                <div>
                    <h1 className=''>{currentUser}</h1>
                </div>
                <div className=''>
                    <p>v~1.1</p>
                </div>
            </div>
            <div className='w-full h-[90%] overflow-y-auto p-1 border-t-0 text-xs' ref={containerRef} onClick={toggleKeyboard}>
                <p>{preRootValue}</p>

                {dataObject.length > 0 && dataObject.map((data, index) => {
                    return <div key={index}><DisplayShell akey={index} request={data.request} response={data.response} isnew={false} /></div>
                })}

                {newResponse && <DisplayShell akey={0} request={newResponse.request} response={newResponse.response} isnew={true} />}

                <form onSubmit={getUserInput}>
                    <p>{initialRootValue}<span>
                        <input
                            ref={inputRef}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                            type="text"
                            name="userinput"
                            className="w-fit text-sm bg-black text-white border border-black focus:border-black outline-none focus:bg-black"
                            autoComplete="off"
                        />

                    </span>
                    </p>
                    <button type='submit'></button>
                </form>
            </div>
        </div >
    )
}

export default Terminal

