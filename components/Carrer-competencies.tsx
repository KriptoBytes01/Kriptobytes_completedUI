"use client";

import React, { useState } from "react";

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = [
    {
      title: "The differentiator",
      description: "The one who aspires to go above and beyond and make a difference through innovation.",
    },
    {
      title: "Work ethics",
      description: "Be a person of integrity and honesty, and participate in ethical work endeavors.",
    },
    {
      title: "Knowledge & capabilities",
      description: "Stays abreast with the latest trends and embraces advancing technologies.",
    },
    {
      title: "Team player",
      description: "Collaborates effectively with others to achieve common goals.",
    },
    {
      title: "Adaptability",
      description: "Embraces change and is open to new ideas and approaches.",
    },
    {
      title: "Communication skills",
      description: "Effectively conveys information and ideas to others.",
    },
    {
      title: "Problem-solving",
      description: "Identifies issues and develops effective solutions.",
    },
    {
      title: "Continuous learning",
      description: "Seeks opportunities for personal and professional growth.",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < content.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      className="relative w-full p-8 bg-cover h-auto bg-center"
      style={{ backgroundImage: "url('/competence-bg.png')" }}
    >
      <div className="flex flex-col sm:flex-row justify-between mt-16 py-8 px-4 items-center max-w-7xl mx-auto">
        {/* Left Side - Heading and Description */}
        <div className="w-full sm:w-1/3 sm:border-r-4 h-auto sm:h-60 px-4 py-6 border-teal-500 sm:pr-8 mb-8 sm:mb-0">
          <h2 className="text-4xl sm:text-5xl text-white text-center sm:text-left">What we look for?</h2>
          <p className="mt-4 p-4 bg-transparent text-gray-200 text-center sm:text-left">
            We map competencies and also check for compatibility, to be sure you match the values we inherit.
          </p>
        </div>

        {/* Right Side - Slider */}
        <div className="relative w-full sm:w-2/3 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {content.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 py-8 w-full sm:w-1/3 p-6 border-r border-gray-400 bg-transparent"
              >
                <h3 className="text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-lg text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrows Below the Slider */}
      <div className="flex justify-center mt-10 space-x-6">
        <div className="border border-gray-100 items-center justify-center rounded-full w-20 h-20">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 text-6xl ${
              currentIndex === 0
                ? "bg-transparent text-gray-200 cursor-not-allowed"
                : "bg-transparent text-white hover:text-gray-500"
            }`}
          >
            &lt;
          </button>
        </div>
        <div className="border border-gray-100 items-center justify-center rounded-full w-20 h-20">
          <button
            onClick={handleNext}
            disabled={currentIndex >= content.length - 3}
            className={`p-3 text-6xl ${
              currentIndex >= content.length - 3
                ? "bg-transparent text-gray-200 cursor-not-allowed"
                : "bg-transparent text-white hover:text-gray-500"
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Competencies() {
  return (
    <div>
      <Slider />
    </div>
  );
}
