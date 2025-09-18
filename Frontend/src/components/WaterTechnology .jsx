import React from 'react';
import watergirl from '../assets/watergirl.png';

const WaterTechnology = () => {
  return (
    <div className="bg-[#d6dfe7] min-h-screen py-16 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-12">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
          {/* Tag */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-blue-400 font-medium text-sm bg-blue-200 px-4 py-3 rounded-full">Water Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="text-[#14237f]">Revolutionizing</span>{' '}
            <span className="text-[#3486a4]">Water</span>
            <br />
            <span className="text-[#14237f]">Technology</span>
          </h1>

          {/* Description */}
          <p className="text-black text-xl  leading-relaxed mb-8 px-4 md:px-0">
            We're pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#14237f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg w-full sm:w-auto">
              Explore Technology
            </button>
            <button className="border-2 border-[#14237f] text-[#14237f] px-6 py-3 rounded-lg font-semibold hover:bg-[#14237f] hover:text-white transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/3 mt-12 md:mt-0">
          <div className="bg-white rounded-3xl p-8 shadow-xl h-96 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-6 right-6 w-8 h-8 bg-blue-100 rounded-full"></div>
            <div className="absolute bottom-10 left-6 w-6 h-6 bg-green-100 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-200 rounded-full"></div>
            
            {/* Main content area for your image */}
            <div className="flex items-center justify-center h-full">
              <img src={watergirl} alt="watergirl" className="max-h-full max-w-full" />
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute bottom-6 right-8 flex gap-1">
              <div className="w-2 h-6 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-4 bg-blue-300 rounded-full"></div>
              <div className="w-2 h-5 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default WaterTechnology;