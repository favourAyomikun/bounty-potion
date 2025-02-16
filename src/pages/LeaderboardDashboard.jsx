import { useState } from "react";
import { FaTwitter, FaSearch, FaTimes } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { leaderboardData } from "../data/leaderboardData";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

const LeaderboardDashboard = () => {
    const [activeTab, setActiveTab] = useState("Daily");
    const [selectedTab, setSelectedTab] = useState('Traders')
    const tabs = ["Daily", "Weekly", "Monthly", "All-Time"];

    const navigate = useNavigate()

    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen p-6">
            {/* Header */}
            <Header />

            {/* User Profile Section */}
            <div className="bg-gray-900 p-6 rounded-xl flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                <div>
                    <h2 className="text-lg font-semibold">Orangie</h2>
                    <p className="text-gray-400">6cdEBC...4DASc</p>
                </div>
            </div>

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
                            placeholder="Search by name or wallet"
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
            <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-800 text-gray-300">
                            <th className="p-3">Token</th>
                            <th className="p-3">Last Trade</th>
                            <th className="p-3">MC</th>
                            <th className="p-3">Invested</th>
                            <th className="p-3">Realized PNL</th>
                            <th className="p-3">ROI</th>
                            <th className="p-3">Trades</th>
                            <th className="p-3">Holding</th>
                            <th className="p-3">Avg Sell</th>
                            <th className="p-3">Avg Buy</th>
                            <th className="p-3">Hold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((data, index) => (
                            <tr key={index} className="border-b border-gray-700">
                                <td className="p-3 flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                                    {data.token}
                                </td>
                                <td className="p-3">{data.lastTrade}</td>
                                <td className="p-3">{data.mc}</td>
                                <td className="p-3">{data.invested}</td>
                                <td className="p-3 text-green-400">{data.realizedPNL}</td>
                                <td className="p-3 text-green-400">{data.roi}</td>
                                <td className="p-3">{data.trades}</td>
                                <td className="p-3">{data.holding}</td>
                                <td className="p-3">{data.avgSell}</td>
                                <td className="p-3">{data.avgBuy}</td>
                                <td className="p-3">{data.hold}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardDashboard;
