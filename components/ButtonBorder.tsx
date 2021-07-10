import React from 'react'

const ButtonBorder = ({ className, text, ...props }: { className?: String, text: String }) => {

    return (
        <button className={`border rounded-lg py-1 px-10 ${className}`}>{text.toUpperCase()}</button>
    )
}

export default ButtonBorder
