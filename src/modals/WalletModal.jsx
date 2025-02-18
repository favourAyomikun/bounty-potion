import React, { Fragment } from 'react';
import { Dialog, DialogTitle, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

const WalletModal = ({ isOpen, onClose, onConnect }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="bg-[#1E1E2E] rounded-lg p-6 max-w-md w-full mx-4">
                <DialogTitle
                  as="h3"
                  className="text-sm md:text-lg font-medium leading-6 text-white mb-2"
                >
                  Connect Your Wallet
                </DialogTitle>

                <div className="bg-[#25223D] border border-[#464558] rounded-lg p-4 mb-4 cursor-pointer text-sm md:text-base">
                  <p className="text-gray-300">
                    Please connect your wallet to access this feature.
                  </p>
                </div>

                <button
                  onClick={onConnect}
                  className="w-full bg-[#AA00FF] hover:bg-[#8800CC] text-white font-bold py-3 px-4 rounded-[20px] transition-colors cursor-pointer text-sm md:text-base"
                >
                  Connect Wallet
                </button>

                <button
                  onClick={onClose}
                  className="w-full mt-2 bg-transparent hover:bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-[20px] transition-colors cursor-pointer text-sm md:text-baser"
                >
                  Cancel
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WalletModal;