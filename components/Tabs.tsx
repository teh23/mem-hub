import React from 'react'

const Tabs = () => {
    const tabName = ['Hot', 'Latest']
    return (
        <div className="container w-full h-10 border-b border-gray-600 flex">
            {tabName.map((item, index) => {
                return (
                    <div key={item} className="h-full w-full flex justify-center items-center hover:border-b-2 hover:text-white text-sm text-gray-400 box-content">
                        <p>{item}</p>
                    </div>
                )
            })}


        </div>
    )
}

export default Tabs
