import React from 'react';
import { IoSearch } from "react-icons/io5";
import { traders } from '../data/traders';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';

const Leaderboardpage = () => {
  const tabs = ['Traders', 'Groups'];
  const timeframes = ['Daily', 'Weekly', 'Monthly', 'All-Time'];


  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 items-center">
          <img src="/api/placeholder/32/32" alt="Logo" className="h-8" />
          <nav className="flex space-x-4" >
            <a href="#" className="text-white">Leaderboards</a>
            <a href="#" className="text-white">Learn</a>
            <a href="#" className="text-white">Prizes</a>
          </nav>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-[#858585] text-2xl">
            <FaXTwitter />
          </a>
          <a href="#" className="text-[#858585] text-2xl">
            <FaDiscord />
          </a>
          <a href="#" className="text-[#858585] text-2xl">
            <CgProfile />
          </a>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${tab === 'Traders' ? 'bg-purple-600' : 'text-gray-400'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Time Frame Selection */}
      <div className="flex space-x-4 mb-6">
        {timeframes.map((time) => (
          <button
            key={time}
            className={`px-4 py-2 rounded-lg ${time === 'Daily' ? 'bg-gray-800' : 'text-gray-400'
              }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name or wallet"
          className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left pb-4">Rank</th>
              <th className="text-left pb-4">Trader</th>
              <th className="text-left pb-4">Followers</th>
              <th className="text-left pb-4">Tokens</th>
              <th className="text-left pb-4">Win Rate</th>
              <th className="text-left pb-4">Trades</th>
              <th className="text-left pb-4">Avg Buy</th>
              <th className="text-left pb-4">Avg Entry</th>
              <th className="text-left pb-4">Avg Hold</th>
              <th className="text-left pb-4">Realized PNL</th>
              <th className="text-left pb-4">Share</th>
            </tr>
          </thead>
          <tbody>
            {traders.map((trader, index) => (
              <tr key={index} className="border-t border-gray-800">
                <td className="py-4">{trader.rank}</td>
                <td className="py-4">
                  <div className="flex items-center space-x-2">
                    <img src="/api/placeholder/32/32" alt="Avatar" className="rounded-full h-8 w-8" />
                    <div>
                      <div className="font-medium">{trader.name}</div>
                      <div className="text-gray-400 text-sm">{trader.handle}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{trader.followers}</td>
                <td className="py-4">{trader.tokens}</td>
                <td className="py-4 text-green-500">{trader.winRate}</td>
                <td className="py-4">{trader.trades}</td>
                <td className="py-4">{trader.avgBuy}</td>
                <td className="py-4">{trader.avgEntry}</td>
                <td className="py-4">{trader.avgHold}</td>
                <td className="py-4 text-green-500">{trader.pnl}</td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-white">Share</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboardpage;