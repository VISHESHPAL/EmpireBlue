const CTASection = () => {
  return (
    <section className="w-full bg-[#d6dfe7] py-16 px-6 flex justify-center">
      <div className="relative bg-[#e4e9ed] rounded-3xl shadow-xl max-w-6xl w-full text-center px-6 md:px-16 py-14">
        {/* Decorative dots top-left */}
        <div className="absolute top-6 left-6 flex flex-col space-y-1">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Decorative dots top-right */}
        <div className="absolute top-6 right-6 flex flex-col space-y-1">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Decorative dots bottom-left */}
        <div className="absolute bottom-6 left-6 flex flex-col space-y-1">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Decorative dots bottom-right */}
        <div className="absolute bottom-6 right-6 flex flex-col space-y-1">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
          Take the <span className="text-green-500">Next Step</span>
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
          Towards Better Health
        </h3>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empire Blue Operates in the growing health and wellness market health
          conscious individuals seeking natural solutions for disease prevention
          and immune support with increasing awareness of health risks like
          cancer and heart disease demand for mineral based supplements in
          mineral water. Ready to experience our exceptional innovative water?
          Book your first can today and discover how we can help you live your
          healthiest life.
        </p>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transform transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
