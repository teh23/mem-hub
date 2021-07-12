import React from 'react'
import { signIn, signOut, useSession } from "next-auth/client";
import Button from './Button';
import { PlusIcon } from '@heroicons/react/solid'
const Nav = () => {
    const [session, loading] = useSession();
    return (
        <div className="flex space-x-5">
            {session && <div className="flex items-center space-x-1 cursor-pointer rounded-md px-4 py-1"><PlusIcon className=" w-4 h-4 " /> <p className="text-sm">ADD</p></div>}

            {session ?
                <Button onClick={() => signOut()} className={`mx-auto bottom-0`} >log out</Button> :
                <Button onClick={() => signIn()} className={`mx-auto bottom-0`}> log in</Button>

            }
        </div>
    )
}

export default Nav
