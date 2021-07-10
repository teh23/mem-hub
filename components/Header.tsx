import { useState } from 'react'
import Logo from './Header/Logo'
import Image from 'next/image'
import Hamburger from './Header/Hamburger'
import Overlay from './Overlay'
import Menu from './Menu'



const Header = () => {
    const [hidden, setHidden] = useState(true)
    const list = ['About me', 'Next', 'Test', 'Dodaj', 'Cos nowego']
    return (
        <header className="relative flex h-10 justify-between items-center text-white p-2 pr-4 pl-4 bg-gray-800 font-normal">
            <Logo />

            <Hamburger hidden={hidden} setHidden={setHidden} />

            <Menu hidden={hidden} setHidden={setHidden} menuItems={list} />




        </header >
    )
}

export default Header
