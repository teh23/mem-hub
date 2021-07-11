import React from 'react'

const Layout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="container min-h-screen bg-black bg-opacity-90">
            {children}
        </div>
    )
}

export default Layout
