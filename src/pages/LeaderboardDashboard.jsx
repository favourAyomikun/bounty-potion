import { useState } from "react";
import { leaderboardData } from "../data/leaderboardData";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineSettingsInputComponent } from "react-icons/md";
import { PiShareFill } from "react-icons/pi";
import TradingStats from "../components/TradingStats";

const LeaderboardDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('Traders')

    const navigate = useNavigate()

    return (
        <div className="bg-[#060611] text-white min-h-screen p-6">
            {/* Header */}
            <Header />

            {/* Trading stats */}
            <TradingStats />

            {/* First section */}
            <div className="flex items-center justify-between mt-20 mb-6">
                <div className="flex items-center gap-20">
                    {/* Tab Navigation */}
                    <div className="flex items-center space-x-4">
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Traders' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => {
                                setSelectedTab("Traders")
                            }}
                        >
                            Traders
                        </button>
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Tokens' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => {
                                setSelectedTab("Tokens")
                            }}
                        >
                            Tokens
                        </button>
                        <button
                            className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Groups' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                                }`}
                            onClick={() => {
                                setSelectedTab("Groups")
                                navigate("/groups")
                            }}
                        >
                            Groups
                        </button>
                    </div>
                </div>

                {/* Second section */}
                <div className="flex items-center gap-3 flex-1 max-w-[40%]">
                    {/* Search Bar */}
                    <div className="relative w-full">
                        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by token or contact address"
                            className="w-full bg-gray-800 rounded-[20px] pl-10 pr-4 py-2 text-gray-300 border border-[#464558] focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                        />
                    </div>

                    {/* Crystal Chart Icon */}
                    <div onClick={() => setIsWalletModalOpen(true)} className="relative flex items-center justify-center bg-[#25223D] border border-[#464558] px-4 py-2 rounded-[20px]  cursor-pointer">
                        <MdOutlineSettingsInputComponent
                            className="text-lg" />
                        <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#AA00FF] rounded-full text-[10px] font-medium">
                            2
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-[#25223D] text-gray-400 text-xs">
                        <tr>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                Token
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Last Trade
                                    <MdOutlineArrowDropDown className="text-xl text-[#B2835F]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    MC
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Invested
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Realized PNL
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    ROI
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Trades
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Holding
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Avg Buy
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Avg Sell
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                                <div className="flex justify-center items-center gap-1">
                                    Held
                                    <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                                </div>
                            </th>
                            <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((data, index) => (
                            <tr key={index} className="border-t border-[#23242C] bg-[#11121B] text-center">
                                <td className="py-4 px-4 align-middle">
                                    <div className="flex justify-center items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#25223D]"></div>
                                        {data.token}
                                    </div>
                                </td>
                                <td className="py-4 px-4 align-middle">{data.lastTrade}</td>
                                <td className="py-4 px-4 align-middle">{data.mc}</td>
                                <td className="flex flex-col py-4 px-4 align-middle">{data.invested}
                                    <small className="text-xs">$2.346</small>
                                </td>
                                <td className="py-4 px-4 align-middle text-[#59CC6C]">{data.realizedPNL}</td>
                                <td className="py-4 px-4 align-middle text-[#59CC6C]">{data.roi}</td>
                                <td className="py-4 px-4 align-middle">{data.trades}</td>
                                <td className="py-4 px-4 align-middle">{data.holding}</td>
                                <td className="py-4 px-4 align-middle">{data.avgBuy}</td>
                                <td className="py-4 px-4 align-middle">{data.avgSell}</td>
                                <td className="py-4 px-4 align-middle">{data.hold}</td>
                                <td className="py-4 px-4 align-middle">
                                    <button className="text-[#AA00FF] hover:text-[#7d5094] cursor-pointer text-lg">
                                        <PiShareFill />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default LeaderboardDashboard;
