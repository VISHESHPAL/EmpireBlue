import React from "react";
import building from "../assets/building.jpeg"; // change path to your image

const AboutUs = () => {
  return (
    <section className="bg-[#d6dfe7] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-24">
        
        {/* ==== Left Text ==== */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-[#0b1c8f]">About </span>
            <span className="text-[#1fb992]">Us</span>
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Empire Blue Pvt. Ltd. Established July 2025 based in Chhindwara,
            Madhya Pradesh, is a pioneering company in the bottled water
            industry recognized as the world's first manufacturer of
            non-expiry, bacteria-free water bottles.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mb-8">
            Our mission is to revolutionize the way people consume water by
            ensuring purity, longevity, and health benefits in every drop.
          </p>

          <a
            href="https://www.empireblue.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b1c8f] hover:bg-[#09156c]
                       text-white px-8 py-4 rounded-full font-medium text-lg shadow
                       transition-colors"
          >
            Learn More
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* ==== Right Image ==== */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img
              src={building}
              alt="Empire Blue Building"
              className="w-[30rem] h-110 object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
