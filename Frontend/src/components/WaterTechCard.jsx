import React from "react";
import waterdrop from "../assets/waterdrop.png"; // your image

const WaterTechCard = () => {
  return (
    <section className="bg-[#d6dfe7] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#e4e9ed] rounded-2xl shadow-lg border border-white px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                
        {/* ===== Left image (35% width) ===== */}
        <div className="w-full md:w-[35%] flex justify-center md:justify-start">
          <img
            src={waterdrop}
            alt="Water Drop"
            className="w-56 sm:w-64 md:w-72 lg:w-80 max-w-full h-auto object-contain"
          />
        </div>

        {/* ===== Right text (65% width) ===== */}
        <div className="w-full md:w-[65%] text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1c8f] leading-tight">
            Empire Blue Pvt. Ltd.
          </h2>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Our revolutionary water technology is a groundbreaking invention that
            eliminates the expiration date on bottled water. By using a unique
            combination of innovative ingredients, we prevent reactions in
            bottled water—especially when exposed to sunlight—that produce
            microplastics and harmful bacteria.
          </p>
          <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            This addresses major health risks associated with bottled water,
            including diseases like cancer and heart disease. Our innovation not
            only maintains water purity and freshness for life, but also provides
            health benefits such as cancer prevention, heart attack protection,
            and boosted immunity. With a global reach, we aim to transform the
            water industry and provide safe drinking water to billions of people
            who currently lack access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterTechCard;