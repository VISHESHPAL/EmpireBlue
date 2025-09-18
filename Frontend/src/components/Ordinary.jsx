import React from 'react';
import earth from '../assets/earth.png'
import heart2 from '../assets/heart2.png'
import star from '../assets/star.png'
import setting from '../assets/setting.png'
import Bacteria from '../assets/Bacteria.png'
import parak from '../assets/parak.png'

const Ordinary = () => {
  return (
    <div className="bg-[#d6dfe7] min-h-screen py-16 px-4 md:px-12 lg:px-24">
      {/* Header section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#14237f] leading-tight">
          Competitive <span className="text-[#3486a4]">Advantage</span> Beyond The Ordinary
        </h1>
      </div>

      {/* Top feature row */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-16 xl:space-x-24 mb-20">
        <div className="w-full lg:w-1/3 text-center mb-12 lg:mb-0">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
             <img src={earth} alt="earth" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">World's first non-expiry water</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            Our revolutionary water that never expires, ensuring unmatched quality and freshness for decades, making it a unique choice in the modern world today.
          </p>
        </div>
        <div className="w-full lg:w-1/3 text-center mb-12 lg:mb-0">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
               <img src={heart2} alt="heart2" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">Health benefits</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            Unique water formulation helps prevent major health risks such as cancer and heart attacks while boosting the immune system for long-term vitality and daily wellness.
          </p>
        </div>
        <div className="w-full lg:w-1/3 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl">
             <img src={star} alt="star" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">Premium mineral enrichment</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            Infused with essential minerals Newtro-X provides superior nourishment compared to regular bottled water, promoting overall health and energy all day long every day.
          </p>
        </div>
      </div>

      {/* Horizontal timeline */}
      <div className="flex items-center justify-center relative mb-20 px-8">
        <div className="absolute left-12 right-12 h-1 bg-[#14237f] z-0"></div>
        <div className="flex justify-between w-full max-w-5xl relative z-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#14237f] bg-[#d6dfe7] text-[#14237f] font-bold text-2xl">
                {num}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom feature row */}
      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-16 xl:space-x-24">
        <div className="w-full lg:w-1/3 text-center mb-12 lg:mb-0">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
               <img src={Bacteria} alt="Bacteria" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">Bacteria free</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip.
          </p>
        </div>
        <div className="w-full lg:w-1/3 text-center mb-12 lg:mb-0">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
              <img src={setting} alt="setting" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">Technology</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration.
          </p>
        </div>
        <div className="w-full lg:w-1/3 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-purple-700 rounded-full flex items-center justify-center text-white text-xl">
              <img src={parak} alt="parak" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#14237f] mb-4">Preservation</h2>
          <p className="text-sm text-gray-700 leading-relaxed px-4">
            With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurchasing cost.
          </p>
        </div>
      </div>

      {/* Blue circular element in bottom right */}
     
    </div>
  );
};

export default Ordinary;