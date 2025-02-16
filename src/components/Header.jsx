import React from 'react'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
const Header = () => {
    return (
        <header className="flex justify-between items-center mb-6">
            <div className="flex space-x-4 items-center gap-20 outline-none">
                <a href="/">
                    <img src="/potion_logo.jpg" alt="potion_logo" className="" />
                </a>
                <nav className="flex space-x-6 text-base outline-none">
                    <a href="/" className="text-white">Leaderboards</a>
                    <a href="https://docs.potionleaderboard.com" target='_blank' rel="noopener noreferrer"
                        className="text-white">Learn</a>
                    <a href="#" className="text-white">Prizes</a>
                </nav>
            </div>

            <div className="flex items-center space-x-6">
                <a href="#" className="text-[#858585] text-2xl">
                    <FaXTwitter />
                </a>
                <a href="#" className="text-[#858585] text-2xl">
                    <FaDiscord />
                </a>
                <a href="#" className="text-[#858585] text-3xl ml-4">
                    <CgProfile />
                </a>
            </div>
        </header>)
}

export default Header