import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaSyncAlt } from "react-icons/fa";
import { GiBull } from "react-icons/gi";
import { PiShareFill } from 'react-icons/pi';

const TradingStats = () => {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily');

    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 min-h-[15rem] p-4">
            {/* Profile Section */}
            <div className="w-full lg:w-[45%]">
                <div className="text-white p-4 lg:p-6">
                    {/* Profile Header */}
                    <div className="flex items-center space-x-4">
                        <CgProfile className="text-3xl lg:text-4xl" />
                        <div>
                            <h2 className="text-lg font-semibold">Orangie</h2>
                            <p className="text-gray-400 text-sm truncate">6sdE9C...dD4Sca</p>
                        </div>
                    </div>

                    {/* Account Info */}
                    <div className="flex flex-col mt-4 border border-[#23242C] bg-[#11121B] p-4 shadow-md">
                        <div className="flex flex-row items-center justify-between text-gray-400 text-sm border-b border-[#23242C] pb-2">
                            <span className="text-white font-semibold">X Account</span>
                            <div className="mt-1 sm:mt-0">
                                <span className="text-white font-medium flex items-center">@orangie</span>
                                <small>279k followers</small>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2 text-gray-400 text-sm">
                            <span className="text-white font-semibold">Last Trade</span>
                            <span className="text-white font-medium flex items-center">
                                30 min ago <GiBull className="ml-1 text-green-500" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="text-white p-4 lg:p-6 w-full">
                {/* Tabs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                        {['Daily', 'Weekly', 'Monthly', 'All-Time'].map((timeFrame) => (
                            <button
                                key={timeFrame}
                                className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTimeFrame === timeFrame
                                        ? 'bg-[#25223D] border-[#464558] text-white'
                                        : 'text-[#858585]'
                                    }`}
                                onClick={() => setSelectedTimeFrame(timeFrame)}
                            >
                                {timeFrame}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <span className="text-gray-400 text-xs whitespace-nowrap">Last refreshed seconds ago</span>
                        <FaSyncAlt className="text-gray-400 cursor-pointer" />
                        <PiShareFill className="text-[#AA00FF] hover:text-[#7d5094] cursor-pointer text-xl" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-sm border border-[#23242C] bg-[#11121B] p-4">
                    {/* Left Column */}
                    <div className="sm:border-r border-[#23242C] px-2">
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className="font-semibold">Tokens</span>
                            <span>104</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className="font-semibold">Win Rate</span>
                            <span className="text-green-400">74%</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className="font-semibold">Trades</span>
                            <span>
                                <span className="text-green-400">201</span> /
                                <span className="text-red-400">321</span>
                            </span>
                        </div>
                    </div>

                    {/* Middle Column */}
                    <div className="sm:border-r border-[#23242C] px-2">
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className="font-semibold">Average Buy</span>
                            <span>10.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className="font-semibold">Average Entry</span>
                            <span>$212K</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className="font-semibold">Average Hold</span>
                            <span>32 m</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="px-2">
                        <div className="flex justify-between text-white border-b border-[#23242C] pb-2">
                            <span className="font-semibold">Total Invested</span>
                            <span>100.2 🪙</span>
                        </div>
                        <div className="flex justify-between text-white border-b border-[#23242C] py-2">
                            <span className="font-semibold">ROI</span>
                            <span className="text-green-400">+304%</span>
                        </div>
                        <div className="flex justify-between text-white pt-2">
                            <span className="font-semibold">Realized PNL</span>
                            <span className="text-green-400">+301.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingStats;