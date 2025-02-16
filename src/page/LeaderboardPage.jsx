import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { traders } from '../data/traders';
import Header from '../components/Header';
import { MdOutlineArrowDropDown, MdOutlineSettingsInputComponent } from 'react-icons/md';

const Leaderboardpage = () => {
  // state to track selected filters
  const [selectedTab, setSelectedTab] = useState('Traders')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily')


  return (
    <div className="bg-[#060611] min-h-screen text-white p-6">
      {/* Header */}
      <Header />

      {/* First section */}
      <div className="flex items-center justify-between mt-20 mb-6">
        <div className="flex items-center gap-20">
          {/* Tab Navigation */}
          <div className="flex items-center space-x-4">
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTab === 'Traders' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTab('Traders')}
            >
              Traders
            </button>
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTab === 'Groups' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTab('Groups')}
            >
              Groups
            </button>
          </div>

          {/* Time Frame Selection */}
          <div className="flex items-center space-x-4">
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTimeFrame === 'Daily' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTimeFrame('Daily')}
            >
              Daily
            </button>
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTimeFrame === 'Weekly' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTimeFrame('Weekly')}
            >
              Weekly
            </button>
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTimeFrame === 'Monthly' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTimeFrame('Monthly')}
            >
              Monthly
            </button>
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${
                selectedTimeFrame === 'All-Time' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
              }`}
              onClick={() => setSelectedTimeFrame('All-Time')}
            >
              All-Time
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
          <div className="relative flex items-center justify-center bg-[#25223D] border border-[#464558] px-4 py-2 rounded-[20px]">
            <MdOutlineSettingsInputComponent className="text-lg cursor-pointer" />
            <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#AA00FF] rounded-full text-[10px] font-medium">
              2
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table(Third section) */}
      <div className="overflow-x-auto p-2"> {/* Added padding to the wrapper */}
        <table className="w-full">
          <thead className="bg-[#25223D] text-gray-400 text-[13.9px]">
            <tr>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">Rank</th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">Trader</th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Followers
                  <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Tokens
                  <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Win Rate
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
                  Avg Buy
                  <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Avg Entry
                  <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Avg Hold
                  <MdOutlineArrowDropDown className="text-xl text-[#AA00FF]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">
                <div className="flex justify-center items-center gap-1">
                  Realized PNL
                  <MdOutlineArrowDropDown className="text-xl text-[#CCAD59]" />
                </div>
              </th>
              <th className="pb-4 px-4 font-bold text-[13.9px] text-white align-middle">Share</th>
            </tr>
          </thead>
          <tbody>
            {traders.map((trader, index) => (
              <tr key={index} className="border-t border-[#23242C] bg-[#11121B] text-center">
                <td className="py-4 px-4 align-middle">{trader.rank}</td>
                <td className="py-4 px-4 align-middle">
                  <div className="flex justify-center items-center space-x-2">
                    <img src="/api/placeholder/32/32" alt="Avatar" className="rounded-full h-8 w-8" />
                    <div>
                      <div className="font-medium">{trader.name}</div>
                      <div className="text-gray-400 text-sm">{trader.handle}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 align-middle">{trader.followers}</td>
                <td className="py-4 px-4 align-middle">{trader.tokens}</td>
                <td className="py-4 px-4 align-middle text-green-500">{trader.winRate}</td>
                <td className="py-4 px-4 align-middle">{trader.trades}</td>
                <td className="py-4 px-4 align-middle">{trader.avgBuy}</td>
                <td className="py-4 px-4 align-middle">{trader.avgEntry}</td>
                <td className="py-4 px-4 align-middle">{trader.avgHold}</td>
                <td className="py-4 px-4 align-middle text-green-500">{trader.pnl}</td>
                <td className="py-4 px-4 align-middle">
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