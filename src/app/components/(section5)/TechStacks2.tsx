import React from 'react'
import StyledIcon from './StyledIcon'

const TechStacks2 = () => {
    return (
        <div className='w-full h-full my-10'>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <StyledIcon icon='nextjs' />
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <StyledIcon icon='react' />
                <StyledIcon icon='javascript' />
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <StyledIcon icon='html' />
                <StyledIcon icon='css' />
                <StyledIcon icon='typescript' />
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <StyledIcon icon='nodejs' />
                {/* <StyledIcon icon='python' /> */}
                <StyledIcon icon='tailwind' />

                

            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <StyledIcon icon='mongodb' />
            </div>
        </div>
    )
}

export default TechStacks2
