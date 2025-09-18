import React from "react";

const milestones = [
  {
    year: "2026",
    title: "Newtro-X Project Kickoff",
    description:
      "Launch of Newtro-X, our base segment brand. Introducing the world's first non-expiry water bottle.",
  },
  {
    year: "2027",
    title: "Black Plum Premium Segment",
    description:
      "Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.",
  },
  {
    year: "2028",
    title: "Our Vehicle Care Segment Launch",
    description:
      "Introduction of DM Water (battery), Coolant, and DEF Water.",
  },
  {
    year: "2029",
    title: "Black Plum Premium Brand",
    description:
      "Premium brand with enhanced minerals and benefits. Premium glass bottle packaging, professional branding.",
  },
  {
    year: "2030",
    title: "Java-X Major Achievement",
    description:
      "Launch of our highest premium segment brand with top enhancements. Super premium glass bottle, elite branding.",
  },
];

const Milestone = () => {
  return (
    <div className="bg-[#d6dfe7] py-16 px-6 font-sans relative">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span role="img" aria-label="trophy" className="mr-2">
            🏆
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
            Our Milestones
          </span>
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          A journey of innovation, dedication, and growth. Here's how we are
          shaping the future year by year.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="hidden md:block absolute top-0 left-1/2 w-1 bg-blue-200 h-full -translate-x-1/2"></div>

        {milestones.map((item, index) => (
          <div
            key={item.year}
            className={`mb-12 flex flex-col md:flex-row items-center md:items-start ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Year */}
            <div className="flex-shrink-0 bg-blue-600 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-md z-10">
              {item.year}
            </div>

            {/* Connector line */}
            <div className="hidden md:block w-10 h-1 bg-blue-300"></div>

            {/* Content card */}
            <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2 transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating chat button */}
      <div className="fixed bottom-8 right-8 cursor-pointer z-50">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H16.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
