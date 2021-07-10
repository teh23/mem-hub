import React from 'react'
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

                            <li className="mb-2  pt-3 pb-3 pl-2  rounded-lg font-light hover:bg-gray-700 flex" key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-10 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                {key}
                            </li>

                        )
                    })}
                </ul>
            </nav>

        </>
    )
}

export default Menu
