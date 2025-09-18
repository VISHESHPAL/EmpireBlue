import React from "react";
import vitamin from "../assets/vitamin.png";
import heart from "../assets/heart.png";
import patti from "../assets/patti.png";
import capsule from "../assets/capsule.png";
import lungs from "../assets/lungs.png";
import brain from "../assets/brain.png";

const HealthBenefits = () => {
  return (
    <div className="min-h-screen bg-[#d6dfe7] flex items-center justify-center p-4">
      {/* Main Card Container */}
      <div className="bg-[#e4e9ed] rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-7xl w-full mx-auto relative overflow-hidden">
        {/* Top Curve Background - Adjust path as necessary */}
        <div
          className="absolute -top-24 md:-top-32 lg:-top-40 left-0 w-full h-48 md:h-64 lg:h-80 bg-cover bg-no-repeat z-0 opacity-70"
          style={{
            backgroundImage: "url('/path/to/your/top-curve-image.png')",
          }}
        ></div>

        {/* Header Section */}
        <div className="relative z-10 text-center pt-8 md:pt-16 lg:pt-20 pb-10 md:pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a237e] drop-shadow-sm">
            Health Benefits
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium text-gray-800">
            Discover the key nutrients and their powerful effects on your health
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16 mt-8">
          {/* Left Column - Nutrient Benefits */}
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex items-center space-x-5">
              <div className="text-right">
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                  Anthoxanthin
                </h2>
                <p className="text-md md:text-lg text-gray-600">Healthy Bone</p>
                <p className="mt-2 text-sm text-gray-700 max-w-[180px] md:max-w-[220px] leading-relaxed">
                  Antioxidant properties beneficial for cancer treatment and
                  heart health. Improves blood flow and reduces oxidative
                  stress.
                </p>
              </div>
              <img
                src={vitamin}
                alt="Anthoxanthin"
                className="w-14 h-14 md:w-16 md:h-16 transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex items-center space-x-5">
              <div className="text-right">
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                  Carotenoids
                </h2>
                <p className="text-md md:text-lg text-gray-600">
                  Immunity Booster
                </p>
                <p className="mt-2 text-sm text-gray-700 max-w-[180px] md:max-w-[220px] leading-relaxed">
                  Essential for vitamin A production supporting immune health.
                  Reduces inflammation and promotes eye health while aiding hair
                  growth.
                </p>
              </div>
              <img
                src={capsule}
                alt="Carotenoids"
                className="w-14 h-14 md:w-16 md:h-16 transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Center Image - Lungs */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full flex items-center justify-center shadow-inner p-4">
              <img
                src={lungs}
                alt="Lungs"
                className="w-40 h-40 md:w-56 md:h-56 animate-pulse"
              />
            </div>
          </div>

          {/* Right Column - Nutrient Benefits */}
          <div className="flex flex-col space-y-10 md:space-y-16">
            <div className="flex items-center space-x-5">
              <img
                src={patti}
                alt="Chlorophyll"
                className="w-14 h-14 md:w-16 md:h-16 transform hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                  Chlorophyll
                </h2>
                <p className="text-md md:text-lg text-gray-600">Healthy Lungs</p>
                <p className="mt-2 text-sm text-gray-700 max-w-[180px] md:max-w-[220px] leading-relaxed">
                  Strengthens the immune system and helps block cancer-causing
                  chemicals. Aids in weight loss and lowers cholesterol levels.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <img
                src={heart}
                alt="Lycopene"
                className="w-14 h-14 md:w-16 md:h-16 transform hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                  Lycopene
                </h2>
                <p className="text-md md:text-lg text-gray-600">Healthy Heart</p>
                <p className="mt-2 text-sm text-gray-700 max-w-[180px] md:max-w-[220px] leading-relaxed">
                  Powerful antioxidant that reduces oxidative damage and
                  inflammation. Protects against various cancers and supports
                  heart health.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Anthocyanin */}
        <div className="relative z-10 mt-10 md:mt-10 text-center pb-8">
          <img
            src={brain}
            alt="Brain"
            className="mx-auto w-20 h-20 md:w-24 md:h-24 mb-4 transform hover:scale-110 transition-transform duration-300"
          />
          <h2 className="text-xl md:text-2xl font-bold text-blue-700">
            Anthocyanin
          </h2>
          <p className="text-md md:text-lg text-gray-600">Healthy Brains</p>
          <p className="mt-2 text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
            Lowers blood pressure and reduces the risk of heart disease. Protects
            brain function and may slow cancer growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthBenefits;