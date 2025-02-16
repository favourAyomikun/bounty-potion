import { useState } from "react";
import { FaTwitter, FaSearch, FaTimes } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const LeaderboardDashboard = () => {
  const [activeTab, setActiveTab] = useState("Daily");
  const tabs = ["Daily", "Weekly", "Monthly", "All-Time"];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-500">POTION LEADERBOARD</h1>
        <div className="flex gap-4 items-center">
          <FaTwitter className="text-gray-400" size={20} />
          <div className="h-10 w-10 rounded-full bg-gray-700"></div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="bg-gray-900 p-6 rounded-xl flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-700"></div>
        <div>
          <h2 className="text-lg font-semibold">Orangie</h2>
          <p className="text-gray-400">6cdEBC...4DASc</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md transition-all ${
              activeTab === tab ? "bg-purple-500" : "bg-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search & Refresh */}
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by token or contract address"
            className="bg-transparent outline-none pl-2 text-white"
          />
        </div>
        <AiOutlineReload className="text-gray-400 cursor-pointer" size={24} />
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
