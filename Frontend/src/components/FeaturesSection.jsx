import React from "react";
import { Star, Diamond, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Star,
      title: "Revolutionary Technology",
      description: "Groundbreaking invention that eliminates the expiration date on bottled water"
    },
    {
      icon: Diamond,
      title: "Safe & Pure",
      description: "Ensuring lifelong freshness and health through advanced purification"
    },
    {
      icon: Shield,
      title: "Sustainable Solution",
      description: "Eco-friendly approach to water preservation and distribution"
    }
  ];

  return (
    <section className="bg-[#d6dfe7] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#e4e9ed] rounded-2xl shadow-lg border border-white/30 p-4 sm:p-6 flex items-start gap-4 sm:gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-20 sm:w-18 sm:h-18    bg-blue-100 rounded-full">
                <feature.icon 
                  className="w-6 h-6 sm:w-8 sm:h-10 text-blue-600" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="text-lg sm:text-2xl font-bold text-blue-800 mb-2 sm:mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;