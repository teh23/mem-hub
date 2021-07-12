import React from 'react'
import Tabs from './Tabs'

const Main = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <div className="space-y-4 mt-4 md:space-x-4 md:space-y-0 container mx-auto rounded-md flex-col flex md:flex-row justify-between">
            <div className="bg-black bg-opacity-50 px-5 py-3 md:p-5 rounded-md  flex-grow text-white max-h-15">tags</div>
            <div className="bg-black text-white bg-opacity-50 p-5 rounded-md space-y-20 flex-grow">
                <Tabs />{children}</div>
            <div className="flex-grow rounded-md invisible  hidden md:block"></div>

        </div>
    )
}

export default Main
