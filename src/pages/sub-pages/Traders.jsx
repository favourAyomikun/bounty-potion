import { MdOutlineArrowDropDown } from 'react-icons/md';
import { traders } from '../../data/traders';
import WalletModal from '../../modals/WalletModal';
import { useState } from 'react';
import { PiShareFill } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router';
import Pagination from '../../components/Pagination';

const Traders = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
    setIsWalletModalOpen(false);
  };

  const navigate = useNavigate();

  // Calculate pagination
  const totalPages = Math.ceil(traders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTraders = traders.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of table when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#25223D] text-gray-400 text-xs md:text-[13px]">
            {/* ... existing thead content ... */}
          </thead>
          <tbody className="divide-y divide-[#23242C]">
            {currentTraders.map((trader, index) => (
              <tr 
                key={index} 
                className="border-t border-[#23242C] bg-[#11121B] text-center transition-all duration-300 ease-in-out hover:bg-[#1a1b27]"
              >
                <td className="py-4 px-4 align-middle">{trader.rank}</td>
                <td onClick={() => setIsWalletModalOpen(true)} className="py-4 px-4 align-middle cursor-pointer">
                  <div className="flex justify-center items-center space-x-2">
                    <CgProfile className='text-xl' />
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
                <td className="py-4 px-4 align-middle" onClick={() => navigate('/leaderboard-dashboard')}>
                  <button className="text-[#AA00FF] hover:text-[#7d5094] cursor-pointer text-lg transition-colors duration-300 ease-in-out">
                    <PiShareFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={traders.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
    </div>
  );
};

export default Traders;