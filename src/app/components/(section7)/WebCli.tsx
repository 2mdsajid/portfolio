
import React, { useState } from 'react'
import Terminal from '../terminal/Terminal'
import Balancer from 'react-wrap-balancer';

const WebCli = () => {

    const handleCloseTerminal = () => {
        return
        document.body.style.overflow = '' // Reset the CSS style to restore scrolling
    };

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-[27rem] md:h-[33rem] p-4 pt-0 rounded-lg '>
                <h1 className=' text-center mx-auto mb-4'>
                    <Balancer>
                        A CLI for my website. You can explore the whole website using this CLI !
                    </Balancer>
                </h1>
                <Terminal />
            </div>
        </div>
    )
}

export default WebCli
