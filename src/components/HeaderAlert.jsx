import React, { useState } from "react";

const HeaderAlert = () => {
  const [showConnectAlert, setShowConnectAlert] = useState(true);
  const [showFeatureAlert, setShowFeatureAlert] = useState(true);

  return (
    <div className="mb-4 space-y-2">
      {/* Connect Alert */}
      {showConnectAlert && (
        <div className="bg-blue-500 text-white p-3 rounded-md flex justify-between items-center">
          <span className="text-sm md:text-base">🔔 Connect your X</span>
          <button onClick={() => setShowConnectAlert(false)} className="text-white text-base md:text-lg cursor-pointer">✖</button>
        </div>
      )}

      {/* Feature Release Alert */}
      {showFeatureAlert && (
        <div className="bg-[#AA00FF] text-white p-3 rounded-md flex justify-between items-center">
          <span className="text-sm md:text-base">✨ New feature release</span>
          <button onClick={() => setShowFeatureAlert(false)} className="text-white text-base md:text-lg cursor-pointer">✖</button>
        </div>
      )}
    </div>
  );
};

export default HeaderAlert;
