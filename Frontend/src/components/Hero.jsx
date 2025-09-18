import React from "react";
import cans from "../assets/cans.png";
import newtroxLogo from "../assets/newtrox-logo.png";
import curve from "../assets/curve-bottom.svg";

const Hero = () => {
  return (
    <section className="relative bg-[#d6dfe7] min-h-screen overflow-hidden">
      {/* ===== Content Card ===== */}
      <div
        className="relative z-10 bg-[#e4e9ed] shadow-2xl rounded-3xl
                   mx-auto w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-6xl
                   px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-14 md:py-16 
                   flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12
                   mt-20 sm:mt-20 md:mt-24 lg:mt-30 mb-16 sm:mb-20 md:mb-24"
      >
        {/* Left: product image */}
        <div className="flex justify-center md:w-1/2 order-1 md:order-1">
          <img
            src={cans}
            alt="Water cans"
            className="w-72 sm:w-80 md:w-96 lg:w-[32rem] max-w-full h-auto"
          />
        </div>

        {/* Right: text + logo */}
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-2">
          <img
            src={newtroxLogo}
            alt="Newtro-X Logo"
            className="mx-auto md:mx-0 mb-4 sm:mb-5 w-64 sm:w-72 md:w-80 lg:w-86 max-w-full h-auto"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug">
            World's <span className="text-blue-800">First Non-Expiry</span> Water
          </h1>
          <p className="mt-4 sm:mt-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            Empire Blue Pvt. Ltd. We prioritize health, innovation, and
            sustainability. We are committed to setting new industry standards
            and providing a safe, reliable and beneficial hydration solution for
            people worldwide.
          </p>
          <button className="mt-5 sm:mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 sm:px-7 py-3 rounded-full font-medium shadow hover:bg-blue-800 transition-colors text-sm sm:text-base">
            Contact Us
            <span className="text-base sm:text-lg">→</span>
          </button>
        </div>
      </div>

      {/* ===== Bottom Curve (positioned higher) ===== */}
      <img
        src={curve}
        alt="Curve decoration"
        className="absolute bottom-2 sm:bottom-5 md:bottom-10 left-0 w-full pointer-events-none z-40"
      />
    </section>
  );
};

export default Hero;