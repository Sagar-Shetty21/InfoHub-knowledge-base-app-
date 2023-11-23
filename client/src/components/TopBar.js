import React from 'react'

const TopBar = () => {
    return (
        <div className="max-w-screen inline-flex h-24 p-8 items-end fixed">
            <img className="h-full" src="/assets/icons/i-logo.png" alt="i-logo" />
            <div className="text-2xl font-bold text-blue-500">nfo<span className="text-orange-500">Hub</span></div>
        </div>
    )
}

export default TopBar