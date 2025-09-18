import React from "react";
import drop from "../assets/drop.png"; // your middle water-drop image

const WaterCrisisCard = () => {
  return (
    <div className="w-full bg-[#d6dfe7]  py-16 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto bg-[#e4e9ed] rounded-2xl shadow-lg border border-white overflow-hidden">
        {/* ===== Center drop image as background ===== */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* soft circular background */}
          <div className="w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"></div>
          {/* water drop */}
          <img 
            src={drop} 
            alt="Water drop" 
            className="absolute w-64 h-64 object-contain opacity-20"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 sm:p-12 lg:p-16">
          {/* ===== Left text on top of image ===== */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c8f] leading-tight">
              Current Situation
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Approximately 2.2 billion people do not have access to safe drinking
              water and 3.5 billion people do not have access to clean drinking
              water. This problem is increasing due to the rapidly increasing
              population. Poor water management has further aggravated the crisis.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The top countries facing severe water crisis include Lebanon,
              Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
            </p>
          </div>

          {/* ===== Right text on top of image ===== */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1c8f] leading-tight">
              Health Impact of <br />Contaminated Water
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every 33 seconds a person dies from heart disease across the world
              and around 26,300 people die from cancer every day.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Contaminated water releases harmful bacteria and micro plastics
              which lead to health problems like cancer and also cause high blood
              pressure and heart problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterCrisisCard;