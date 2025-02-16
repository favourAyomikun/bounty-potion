import React from 'react'
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20 outline-none">
                <a href="/">
                    <img src="/potion_logo.jpg" alt="potion_logo" className="w-24 md:w-auto" />
                </a>
                <nav className="flex flex-wrap gap-2 md:space-x-6 text-base outline-none">
                    <a href="/" className="text-white">Leaderboards</a>
                    <a href="https://docs.potionleaderboard.com" target='_blank' rel="noopener noreferrer" className="text-white">Learn</a>
                    <a href="#" className="text-white">Prizes</a>
                </nav>
            </div>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
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
        </header>
    )
}

export default Header