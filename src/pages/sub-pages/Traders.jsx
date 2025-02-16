const Traders = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold">Traders Leaderboard</h2>
        {/* Traders content here */}

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
  
  export default Traders;
  