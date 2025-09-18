import { FaLinkedin, FaTwitter } from "react-icons/fa";
import expert from "../assets/expert.jpeg";

const ExpertTeam = () => {
  return (
    <section className="w-full px-6 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-blue-900">
          Meet Our <span className="text-teal-500">Expert</span> Team
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center max-w-6xl mx-auto gap-12 md:gap-20">
        {/* Left: Image + Name */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="rounded-2xl overflow-hidden shadow-lg  sm:w-72">
            <img
              src={expert}
              alt="Founder"
              className="w-full h-auto object-cover  border-white border-8 rounded-3xl"
            />
          </div>
          <div className="bg-white shadow-md rounded-xl -mt-6 px-6 py-3 text-center w-64 sm:w-68">
            <h3 className="text-lg md:text-xl font-bold text-blue-900">
              Dr. Gagan Mahalwanshi
            </h3>
            <p className="text-gray-600 text-sm md:text-base">Founder & CEO</p>
          </div>
        </div>

        {/* Right: About Section */}
        <div className="w-full md:w-2/3 max-w-xl text-center md:text-left">
          <h4 className="text-xl md:text-2xl font-semibold text-blue-900 mb-4">
            About the Founder
          </h4>
          <p className="text-gray-700 leading-relaxed mb-6 text-base  md:text-lg">
            With over 15 years of experience in the water industry,
            Dr. Gagan Mahalwanshi has pioneered revolutionary water
            purification technologies. His vision for Newtro-X is to
            create water solutions that are both sustainable and
            beneficial for health.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 text-3xl md:text-4xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-sky-500 hover:text-sky-700 text-3xl md:text-4xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ExpertTeam;
