import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import Header from '../components/Header';
import { Routes, Route, useNavigate } from "react-router";
import { MdOutlineSettingsInputComponent } from 'react-icons/md';
import Groups from '../pages/sub-pages/Groups'
import Traders from '../pages/sub-pages/Traders'

const Leaderboardpage = () => {
  // state to track selected filters
  const [selectedTab, setSelectedTab] = useState('Traders')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily')

  const navigate = useNavigate()


  return (
    <div className="bg-[#060611] min-h-screen text-white p-6" style={{ fontFamily: "Sora" }}>
      {/* Header */}
      <Header />

      {/* First section */}
      <div className="flex items-center justify-between mt-20 mb-6">
        <div className="flex items-center gap-20">
          {/* Tab Navigation */}
          <div className="flex items-center space-x-4">
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Traders' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                }`}
              onClick={() => navigate("/")}
            >
              Traders
            </button>
            <button
              className={`text-sm px-4 py-2 rounded-[20px] cursor-pointer ${selectedTab === 'Groups' ? 'bg-[#25223D] border-[#464558] text-white' : 'text-[#858585]'
                }`}
              onClick={() => navigate("/groups")}
            >
              Groups
            </button>
          </div>

          {/* Time Frame Selection */}
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

      {/* Nested Routes for Traders & Groups */}
      <Routes>
        {/* Default route for /leaderboard(homepage) should show Traderspage */}
        <Route index element={<Traders />} />
        <Route path="groups" element={<Groups />} />
      </Routes>
    </div>
  );
};

export default Leaderboardpage;