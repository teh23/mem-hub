import React from 'react'

const Overlay = ({ setHidden, hidden, className }: {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    hidden: boolean,
    className?: string
}) => {
    return (
        <div className={`absolute w-screen h-screen left-0 top-0 opacity-30 bg-black ${hidden ? 'hidden' : ''} ${className}`} onClick={() => { setHidden(!hidden) }}></div>
    )
}

export default Overlay
