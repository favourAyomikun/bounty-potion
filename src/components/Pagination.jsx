import React from 'react';

const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 text-sm">
      <div className="text-gray-400 mb-4 md:mb-0">
        Showing {startItem} to {endItem} of {totalItems} results
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg bg-[#25223D] border border-[#464558] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out hover:bg-[#2d2a47]"
        >
          Previous
        </button>
        
        <div className="flex space-x-1">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-lg transition-all duration-300 ease-in-out
                ${currentPage === page 
                  ? 'bg-[#AA00FF] text-white' 
                  : 'bg-[#25223D] border border-[#464558] text-white hover:bg-[#2d2a47]'
                }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg bg-[#25223D] border border-[#464558] text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out hover:bg-[#2d2a47]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;