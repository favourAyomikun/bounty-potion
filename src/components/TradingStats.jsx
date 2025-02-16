import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkAlt, FaSyncAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GiBull } from "react-icons/gi";
import { PiShareFill } from 'react-icons/pi';
const TradingStats = () => {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily')

    return (
        <div className="flex items-center space-x-6 h-[15rem]">
            <div className="text-white p-6 w-[45%]">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                    <CgProfile className='text-4xl' />
                    <div>
                        <h2 className="text-lg font-semibold">Orangie</h2>
                        <p className="text-gray-400 text-sm">6sdE9C...dD4Sca</p>
                    </div>
                </div>

                {/* AccountInfo */}
                <div className="flex flex-col justify-center mt-4 border border-[#23242C] bg-[#11121B] p-4 shadow-md h-34">
                    <div className="flex justify-between text-gray-400 text-sm border-b border-[#23242C]">
                        <span className='text-white font-semibold'>X Account</span>
                        <div>
                            <span className="text-white font-medium flex items-center">
                                @orangie
                            </span>
                            <small>279k followers</small>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-400 text-sm">
                        <span className='text-white font-semibold'>Last Trade</span>
                        <span className="text-white font-medium flex items-center">
                            30 min ago <GiBull className="ml-1 text-green-500" />
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-white p-6 w-full shadow-lg">
                {/* Tabs */}
                <div className="flex items-center space-x-4 pb-2">
                    <div className="flex items-center space-x-4">
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTimeFrame === 'Daily' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => setSelectedTimeFrame('Daily')}
                        >
                            Daily
                        </button>
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTimeFrame === 'Weekly' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => setSelectedTimeFrame('Weekly')}
                        >
                            Weekly
                        </button>
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTimeFrame === 'Monthly' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => setSelectedTimeFrame('Monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTimeFrame === 'All-Time' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => setSelectedTimeFrame('All-Time')}
                        >
                            All-Time
                        </button>
                    </div>
                    <div className="flex-grow"></div>
                    <span className="text-gray-400 text-xs">Last refreshed seconds ago</span>
                    <FaSyncAlt className="text-gray-400 ml-2 cursor-pointer" />
                    <PiShareFill className="text-[#AA00FF] hover:text-[#7d5094] cursor-pointer text-xl" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 place-content-center gap-4 mt-4 text-sm border border-[#23242C] bg-[#11121B] p-4 h-34">
                    {/* Left Column */}
                    <div className=" border-r border-[#23242C] px-2">
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className='font-semibold'>Tokens</span>
                            <span className="text-white">104</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className='font-semibold'>Win Rate</span>
                            <span className="text-green-400">74%</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className='font-semibold'>Trades</span>
                            <span>
                                <span className="text-green-400">201</span> /
                                <span className="text-red-400">321</span>
                            </span>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className=" border-r border-[#23242C] px-2">
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className='font-semibold'>Average Buy</span>
                            <span className="text-white">10.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className='font-semibold'>Average Entry</span>
                            <span className="text-white">$212K</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className='font-semibold'>Average Hold</span>
                            <span className="text-white">32 m</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className='font-semibold'>Total Invested</span>
                            <span className="text-white">100.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className='font-semibold'>ROI</span>
                            <span className="text-green-400">+304%</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className='font-semibold'>Realized PNL</span>
                            <span className="text-green-400">+301.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingStats