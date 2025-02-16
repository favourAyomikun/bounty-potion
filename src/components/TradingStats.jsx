import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkAlt, FaSyncAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GiBull } from "react-icons/gi";
const TradingStats = () => {
    return (
        <div className="flex space-x-6 p-6 bg-[#0f0f0f] rounded-2xl shadow-lg">
            <div className="bg-[#0f0f0f] text-white p-6 rounded-2xl w-80 shadow-lg">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                    <CgProfile className='text-3xl'/>
                    <div>
                        <h2 className="text-lg font-semibold">Orangie</h2>
                        <p className="text-gray-400 text-sm">6sdE9C...dD4Sca</p>
                    </div>
                </div>

                {/* Account Info */}
                <div className="mt-4 bg-[#1a1a1a] p-4 rounded-lg">
                    <div className="flex justify-between text-gray-400 text-sm">
                        <span>X Account</span>
                        <span className="text-white font-medium flex items-center">
                            @orangie <FaTwitter className="ml-1 text-blue-500" />
                        </span>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-400 text-sm">
                        <span>Last Trade</span>
                        <span className="text-white font-medium flex items-center">
                            30 min ago <GiBull className="ml-1 text-green-500" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-[#0f0f0f] text-white p-6 rounded-2xl w-full shadow-lg">
                {/* Tabs */}
                <div className="flex space-x-4 border-b border-gray-700 pb-2">
                    {["Daily", "Weekly", "Monthly", "All-Time"].map((tab, index) => (
                        <button
                            key={index}
                            className={`text-sm px-4 py-1 rounded-full ${index === 0 ? "bg-[#6b6b6b] text-white" : "text-gray-400"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                    <div className="flex-grow"></div>
                    <span className="text-gray-400 text-xs">Last refreshed seconds ago</span>
                    <FaSyncAlt className="text-gray-400 ml-2 cursor-pointer" />
                    <FaExternalLinkAlt className="text-purple-500 ml-2 cursor-pointer" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                    {/* Left Column */}
                    <div>
                        <div className="flex justify-between text-gray-400">
                            <span>Tokens</span>
                            <span className="text-white">104</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>Win Rate</span>
                            <span className="text-green-400">74%</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>Trades</span>
                            <span>
                                <span className="text-green-400">201</span> /
                                <span className="text-red-400">321</span>
                            </span>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div>
                        <div className="flex justify-between text-gray-400">
                            <span>Average Buy</span>
                            <span className="text-white">10.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>Average Entry</span>
                            <span className="text-white">$212K</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>Average Hold</span>
                            <span className="text-white">32 m</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="flex justify-between text-gray-400">
                            <span>Total Invested</span>
                            <span className="text-white">100.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>ROI</span>
                            <span className="text-green-400">+304%</span>
                        </div>
                        <div className="flex justify-between text-gray-400 mt-2">
                            <span>Realized PNL</span>
                            <span className="text-green-400">+301.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingStats