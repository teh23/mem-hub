import React from 'react'

interface IButtonBorder
    extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
    > {

}

const ButtonBorder = (props: IButtonBorder) => {
    const { className, children } = props
    return (
        <button {...props} className={`border rounded-lg py-1 px-10 ${className}`}> {children}</button >
    )
}

export default ButtonBorder
