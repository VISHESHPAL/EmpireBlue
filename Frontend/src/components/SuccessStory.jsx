// SuccessStory.jsx
import React from "react";
import { LucideUsers, LucideTruck, LucideBox, LucideTrendingUp, LucideAward } from "lucide-react";

const stats = [
  { id: 1, icon: <LucideUsers size={28} className="text-white" />, value: "50,000+", label: "Happy Customers", bg: "bg-blue-500" },
  { id: 2, icon: <LucideTruck size={28} className="text-white" />, value: "100,000+", label: "Orders Delivered", bg: "bg-yellow-500" },
  { id: 3, icon: <LucideBox size={28} className="text-white" />, value: "15+", label: "Products Launched", bg: "bg-green-500" },
  { id: 4, icon: <LucideTrendingUp size={28} className="text-white" />, value: "98%", label: "Satisfaction Rate", bg: "bg-purple-500" },
  { id: 5, icon: <LucideAward size={28} className="text-white" />, value: "25+", label: "Industry Awards", bg: "bg-pink-500" },
];

const SuccessStory = () => {
  return (
    <section className="bg-[#d6dfe7] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Our <span className="text-blue-400">Success</span> Story
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Trusted by thousands of customers across India, delivering pure and healthy water solutions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`p-5 rounded-full mb-5 ${stat.bg} flex items-center justify-center transition duration-500 hover:rotate-12`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-500 mt-3 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
