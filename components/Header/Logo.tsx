import React from 'react'
import Link from 'next/link'
const Logo = () => {
    return (
        <div className="font-extrabold  text-xl">
            <h1>
                <Link href="/">
                    <a>MEMHUB</a>
                </Link>

            </h1>
        </div>
    )
}

export default Logo
