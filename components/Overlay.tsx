import React from 'react'

const Overlay = ({ setHidden, hidden }: {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>,
    hidden: boolean
}) => {
    return (
        <div className={`absolute w-screen h-screen left-0 top-0 opacity-30 bg-black ${hidden ? 'hidden' : ''}`} onClick={() => { setHidden(!hidden) }}></div>
    )
}

export default Overlay
