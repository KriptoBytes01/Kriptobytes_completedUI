"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const careerData = [
  {
    title: "Integrity",
    image: "/integrity.png",
    description: "An expression of our courage and accountability.",
  },
  {
    title: "Diversity",
    image: "/diversity.png",
    description: "Create user-centric designs for engaging experiences.",
  },
  {
    title: "Changemakers",
    image: "/changemakers.png",
    description: "Analyze and interpret complex data for actionable insights.",
  },
  {
    title: "Impact",
    image: "/impact.png",
    description: "Ensure seamless integration and deployment of code.",
  },
  {
    title: "Social Resposibility",
    image: "/social-responsibility.png",
    description: "Lead cross-functional teams to deliver impactful products.",
  },
];

export default function CareerPurposes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? careerData.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === careerData.length - 1 ? 0 : prev + 1));
    }
  };

  const handleHeadingClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-black text-white py-10 px-6">
      {/* Main Content */}
      <div className="flex items-center justify-between gap-24 px-12 py-10 mb-8">
        {/* Left Section */}
        <div className="w-1/2">
          <h1 className="text-4xl  mb-4">{careerData[activeIndex].title}</h1>
          <p className="text-lg">{careerData[activeIndex].description}</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <Image
          height={100}
          width={100}
            src={careerData[activeIndex].image}
            alt={careerData[activeIndex].title}
            className="w-60 h-60 bg-transparent text-white"
          />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex items-start justify-start gap-4 mb-8">
        <button
          onClick={() => handleArrowClick("left")}
          className="p-3 bg-transparent hover:text-gray-300 "
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-12 h-12" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          className="p-3 bg-transparent hover:text-gray-300 "
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-12 h-12" />
        </button>
      </div>

      {/* Headings with Bottom Border */}
      <div className="flex px-6  py-4  justify-between items-center border-t border-gray-600 pt-4">
        {careerData.map((item, index) => (
          <button
            key={index}
            onClick={() => handleHeadingClick(index)}
            className={`text-2xl mt-3 px-4 font-medium pb-2 ${
              activeIndex === index ? "border-b-4 border-teal-500" : "border-b-4 border-transparent"
            }  transition-all duration-300`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
