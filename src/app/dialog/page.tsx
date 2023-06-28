import React from 'react'
import DialogBox from '../components/reused/DialogBox'
import BotInterface from '../components/chatbot/BotInterface'

const page = () => {
    return (
        <>
            <div className='border'>

                <p className='border'>hello there</p>
                <p>lop</p>
            </div>
            <DialogBox>
                <BotInterface />
            </DialogBox>
        </>
    )
}

export default page
