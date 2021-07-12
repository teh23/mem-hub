import React, { useState } from 'react'
import Logo from './Header/Logo'
import Image from 'next/image'
import Hamburger from './Header/Hamburger'
import Menu from './Menu'
import Tabs from './Tabs'
import { useEffect, useMemo } from 'react'
import useWindowDimensions from './Hooks/useWindowDimensions'
import Nav from './Nav'


const Header = ({ children }: { children: React.ReactElement }) => {
    const [hidden, setHidden] = useState(true)
    const list = ['About me', 'Next', 'Test', 'Dodaj', 'Cos nowego']


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
