import React from "react";
import heroImage from "../assets/hero.jpg"; // Update with the image path

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center p-4 md:px-8 md:py-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Make remote work</h2>
        <p className="text-gray-600 mb-6">
          Get your team in sync, no matter your location. Streamline processes, create
          team rituals, and watch productivity soar.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded">Learn more</button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={heroImage} alt="Hero" className="rounded-lg" />
      </div>
    </section>
  );
}

export default Hero;
