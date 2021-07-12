import React from 'react'

const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className=" flex flex-col justify-start min-h-screen bg-black bg-opacity-90 m-0">
            {children}
        </div>
    )
}

export default Layout
