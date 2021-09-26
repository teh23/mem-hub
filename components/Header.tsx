import React from 'react'
import Logo from './Header/Logo'
import Nav from './Nav'


const Header = ({ children }: { children: React.ReactElement }) => {

    return (
        <>
            <header className=" h-full w-full md:w-full text-white  bg-black bg-opacity-80 font-normal">
                <div className="container m-auto px-4 py-2 flex justify-between items-center">
                    <Logo />

                    <Nav />
                </div>

            </header >

            {children}
        </>
    )
}

export default Header
