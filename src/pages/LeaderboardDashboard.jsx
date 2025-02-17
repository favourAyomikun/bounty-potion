import { useState, useMemo } from "react";
import { leaderboardData } from "../data/leaderboardData";
import Header from "../components/Header";
import TradingStats from "../components/TradingStats";
import { useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { PiShareFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";

const LeaderboardDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('Traders');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    // Sample Profile Data
    const profile = {
        name: "Orangie",
        walletAddress: "6sdE9C...dD4Sca",
        xHandle: "@orangie",
        followers: "279k",
        pnl: "+301.3", // Example PNL value
        profilePic: "https://via.placeholder.com/50", // Placeholder profile picture
    };

    // Copy wallet address to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(profile.walletAddress);
        alert("Wallet Address Copied!");
    };

    // Memoized filtered data
    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();

        if (!query) return leaderboardData;

        return leaderboardData.filter(item => {
            const tokenMatch = item.token.toLowerCase().includes(query);
            const addressMatch = item.contractAddress?.toLowerCase().includes(query);
            return tokenMatch || addressMatch;
        });
    }, [searchQuery]);

    return (
        <div className="bg-[#060611] text-white min-h-screen p-6">
            {/* Header */}
            <Header />

            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 bg-[#11121B] border border-[#23242C] rounded-lg shadow-lg w-full">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                    <CgProfile className="text-4xl sm:text-5xl" />
                </div>

                {/* Profile Info */}
                <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
                    <h2 className="text-lg font-semibold">{profile.name}</h2>

                    {/* Wallet Address with Copy to Clipboard */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-gray-400 text-sm">
                        <span className="truncate max-w-[150px] sm:max-w-none">{profile.walletAddress}</span>
                        <button onClick={copyToClipboard} className="text-gray-300 hover:text-white">
                            <FaCopy />
                        </button>
                    </div>

                    {/* X Account Handle & Followers */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-2 text-gray-400 text-sm">
                        <CgProfile className="text-lg" />
                        <span className="text-white">{profile.xHandle}</span>
                        <span>{profile.followers} followers</span>
                    </div>
                </div>

                {/* Current P&L */}
                <div className="text-green-400 text-xl font-bold mt-3 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
                    P&L: {profile.pnl}
                </div>
            </div>


            {/* Trading Stats */}
            <TradingStats />

            {/* Search & Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 mb-6">
                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 md:space-x-4">
                    <button
                        className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Traders' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                            }`}
                        onClick={() => setSelectedTab("Traders")}
                    >
                        Traders
                    </button>
                    <button
                        className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Tokens' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                            }`}
                        onClick={() => setSelectedTab("Tokens")}
                    >
                        Tokens
                    </button>
                    <button
                        className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Groups' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                            }`}
                        onClick={() => {
                            setSelectedTab("Groups");
                            navigate("/groups");
                        }}
                    >
                        Groups
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex flex-row items-center gap-3 flex-1 max-w-full md:max-w-[40%] mt-4 md:mt-0">
                    <div className="relative w-full">
                        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by token or wallet address"
                            className="w-full bg-gray-800 rounded-[20px] pl-10 pr-4 py-2 text-gray-300 border border-[#464558] focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 text-sm"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Crystal Chart Icon */}
                    <div className="relative flex items-center justify-center bg-[#25223D] border border-[#464558] px-4 py-2 rounded-[20px] cursor-pointer">
                        <MdOutlineSettingsInputComponent className="text-lg" />
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
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                Token
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                Last Trade
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                MC
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                Invested
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                Realized PNL
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                ROI
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">
                                Trades
                            </th>
                            <th className="pb-4 px-4 font-bold text-xs md:text-[13px] text-white align-middle">Share</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((data, index) => (
                                <tr key={index} className="border-t border-[#23242C] bg-[#11121B] text-center">
                                    <td className="py-4 px-4 align-middle">{data.token}</td>
                                    <td className="py-4 px-4 align-middle">{data.lastTrade}</td>
                                    <td className="py-4 px-4 align-middle">{data.mc}</td>
                                    <td className="py-4 px-4 align-middle">{data.invested}</td>
                                    <td className="py-4 px-4 align-middle text-[#59CC6C]">{data.realizedPNL}</td>
                                    <td className="py-4 px-4 align-middle text-[#59CC6C]">{data.roi}</td>
                                    <td className="py-4 px-4 align-middle">{data.trades}</td>
                                    <td className="py-4 px-4 align-middle">
                                        <PiShareFill className="text-[#AA00FF]" />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="8" className="text-center">No results found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaderboardDashboard;
