import React, { useState } from 'react'
import Logo from './Header/Logo'
import Image from 'next/image'
import Hamburger from './Header/Hamburger'
import Overlay from './Overlay'
import Menu from './Menu'
import Tabs from './Tabs'



const Header = ({ children }: { children: React.ReactElement }) => {
    const [hidden, setHidden] = useState(true)
    const list = ['About me', 'Next', 'Test', 'Dodaj', 'Cos nowego']
    return (
        <>
            <header className=" h-full  text-white  bg-black bg-opacity-80 font-normal">
                <div className="container px-4 py-2 flex justify-between items-center">
                    <Logo />

                    <Hamburger hidden={hidden} setHidden={setHidden} />

                    <Menu hidden={hidden} setHidden={setHidden} menuItems={list} />
                </div>
                <Tabs />
            </header >
            {children}
        </>
    )
}

export default Header
