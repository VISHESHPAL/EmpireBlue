import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    location: "Delhi",
    initials: "RK",
    feedback:
      "As a restaurant owner, I need reliable water suppliers. Newtro-X has been exceptional - consistent quality, great pricing, and excellent customer service. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Hotel Manager",
    location: "Mumbai",
    initials: "PS",
    feedback:
      "Newtro-X’s service is excellent! The water quality is outstanding and their team is very professional. I can always count on them.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil Mehta",
    role: "Café Owner",
    location: "Jaipur",
    initials: "AM",
    feedback:
      "Fantastic experience! Their purification solutions are eco-friendly and sustainable. Definitely a reliable partner.",
    rating: 4,
  },
  {
    id: 4,
    name: "Neha Verma",
    role: "Gym Owner",
    location: "Pune",
    initials: "NV",
    feedback:
      "Excellent customer service and top-quality water solutions. My clients have noticed the difference too!",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="w-full bg-[#e4e9ed] py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-bold text-blue-900">
          What Our <span className="text-teal-500">Customers</span> Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto text-2xl">
          Don’t just take our word for it. Here’s what our valued customers have
          to say about their experience with Newtro-X.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="max-w-4xl mx-auto"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#d6dfe7]  shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex mb-4">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 italic mb-6 max-w-2xl text-xl">
                "{item.feedback}"
              </p>

              {/* Avatar */}
              <div className="w-18 h-18 flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-lg mb-3">
                {item.initials}
              </div>
              <h4 className="font-bold text-2xl text-blue-900">{item.name}</h4>
              <p className="text-gray-600 text-sm">
                {item.role} • {item.location}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-blue-900">4.9/5</h3>
          <p className="text-gray-600 text-sm">Average Rating</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-blue-900">98%</h3>
          <p className="text-gray-600 text-sm">Satisfaction Rate</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-blue-900">10K+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
