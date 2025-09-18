import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WaterCrisisCard from "./components/WaterCrisisCard";
import WaterTechCard from "./components/WaterTechCard";
import FeaturesSection from "./components/FeaturesSection";
import HealthBenefits from "./components/HealthBenefits";
import Ordinary from "./components/Ordinary";
import WaterTechnology from "./components/WaterTechnology ";
import Milestone from "./components/Milestone";
import SuccessStory from "./components/SuccessStory";
import ExpertTeam from "./components/ExpertTeam";
import LeadershipTeam from "./components/LeadershipTeam";
import TestimonialCarousel from "./components/TestimonialCarousel";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <WaterCrisisCard/>
      <WaterTechCard />
       <FeaturesSection />
       <HealthBenefits />
       <Ordinary /> 
       <WaterTechnology />
       <Milestone/>
       <SuccessStory/>
       <ExpertTeam/>
       <LeadershipTeam/>
       <TestimonialCarousel />
       <CTASection/>
       <Footer/>
      {/* Rest of your page */}
    </>
  );
}

export default App;
