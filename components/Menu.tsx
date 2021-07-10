import React from 'react'
import ButtonBorder from './ButtonBorder'
import Overlay from './Overlay'

const Menu = ({ setHidden, hidden, menuItems }: {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    hidden: boolean,
    menuItems: String[]
}) => {

    return (
        <>
            <Overlay hidden={hidden} setHidden={setHidden} />

            <nav className={`absolute inset-y-0 right-0 h-screen w-8/12 bg-opacity-90 backdrop-filter backdrop-blur-sm bg-gray-800 ${hidden ? 'hidden' : ''} `} >
                <div className="w-full h-1/12 pb-4 pt-4 flex justify-center flex-col items-center space-y-6 text-gray-400 pattern rounded-lg">

                    <div className="w-20 h-20 rounded-full bg-gray-50">

                    </div>
                    <p>Hello, username</p>
                </div>
                <ul className="flex flex-col justify-center ">
                    {menuItems.map((key, index) => {
                        return (

                            <li className="mb-2  pt-3 pb-3 pl-4  rounded-lg font-light hover:bg-gray-700 flex" key={index}>

                                {key}
                            </li>

                        )
                    })}
                </ul>
                <ButtonBorder text="log in" className={`absolute  mx-auto my-5 inset-x-0 bottom-0`} />
            </nav>

        </>
    )
}

export default Menu
