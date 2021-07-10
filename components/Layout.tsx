import React from 'react'

const Layout = ({ children }: { children: React.ReactElement[] }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Layout
