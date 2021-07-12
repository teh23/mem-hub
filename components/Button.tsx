import React from 'react'

interface IButton
    extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > {
    children: string
}

const Button = (props: IButton) => {
    const { className, children } = props
    return (
        <button {...props} className={`rounded-md bg-gray-200 font-bold text-sm text-black px-4 py-1 ${className}`}> {children.toUpperCase()}</button >
    )
}

export default Button
