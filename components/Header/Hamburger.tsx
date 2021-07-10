import React from 'react'
import Image from 'next/image'
import hamburger from '../../public/hamburger.svg'

const Hamburger = ({ setHidden, hidden }: {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    hidden: boolean
}) => {
    return (
        <div className={`h-6 w-6 `} onClick={() => { setHidden(!hidden) }}>
            <Image src={hamburger} alt="Logo" layout="responsive"
            />
        </div>
    )
}

export default Hamburger
