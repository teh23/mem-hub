import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Tabs = () => {
    const currentRoute = useRouter().pathname.substring(1)
    const tabName = ['Hot', 'Latest']
    return (
        <div className="container w-full h-10 border-b border-gray-600 flex">
            {tabName.map((item, index) => {
                return (
                    <Link key={item} href={`/${item.toLowerCase()}`} passHref>
                        <div className={`h-full w-full flex justify-center items-center text-sm  cursor-pointer box-content ${currentRoute === item.toLowerCase() ? `text-white border-b-2` : 'text-gray-400 '}  `}>
                            <a >{item}</a>
                        </div>
                    </Link>
                )
            })}


        </div>
    )
}

export default Tabs
