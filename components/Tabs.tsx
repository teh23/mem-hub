import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Tabs = () => {
    const currentRoute = useRouter().pathname.substring(1)



    const tabName = ['Hot', 'Latest']
    return (
        <div className="container flex-start bg-transparent md:w-6/12 h-10  flex">
            {tabName.map((item, index) => {
                return (
                    <Link key={item} href={`/${item.toLowerCase()}`} passHref>
                        <div className={`h-full w-full flex justify-center items-center text-sm  cursor-pointer box-content ${currentRoute === item.toLowerCase() || (item === 'Hot' && currentRoute === '') ? `border-b-0 bg-white text-black font-bold rounded-md` : 'text-gray-400 '}  `}>
                            <a >{item}</a>
                        </div>
                    </Link>
                )
            })}


        </div >
    )
}

export default Tabs
