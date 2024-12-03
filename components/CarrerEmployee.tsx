"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface SliderItem {
  id: number; // Adding an ID for each box
  title: string;
  description: string;
  image: string;
}

const sliderData: SliderItem[] = [
  { id: 1, title: "Flaunt Your Talent", description: "Description 1", image: "/employee1.png" },
  { id: 2, title: "Fueling Sportsmanship", description: "Description 2", image: "/employee2.png" },
  { id: 3, title: "Employee collaboration", description: "Description 3", image: "/employee3.png" },
  { id: 4, title: "Festival celebration", description: "Description 4", image: "/employee4.png" },
  { id: 5, title: "Helping hands", description: "Description 5", image: "/employee5.png" },
  { id: 6, title: "Connecting people", description: "Description 6", image: "/employee6.png" },
];

export default function CareerEmployee(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "right" && currentIndex < sliderData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const backgroundImageStyle = {
    backgroundImage: "url('/employee-bg.png')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-white"
      style={backgroundImageStyle}
    >
      {/* Heading and Paragraph */}
      <div className="flex flex-col py-10 items-center justify-center h-1/2 text-center px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl mt-6 sm:text-4xl lg:text-5xl text-gray-200 font-bold mb-4">
          Employee First, Employee Always
        </h1>
        <p className="text-sm sm:text-sm text-gray-400 mb-6 lg:text-xl max-w-3xl">
          Building experiences that are happier, engaging, and meaningful
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative flex items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderData.map((item) => (
              <div
                key={item.id}
                id={`box-${item.id}`} // Assigning an ID to each box
                className="w-full sm:w-1/3 px-4 shrink-0" // Ensure only one item is visible on small screens
              >
                <div className="bg-zinc-900 p-8 flex flex-col items-start text-start h-96 w-96">
                  <h2 className="text-2xl sm:text-3xl mb-4">{item.title}</h2>
                  <p className="text-base sm:text-lg mb-4">{item.description}</p>
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.title}
                    className="w-16 sm:w-16 lg:w-16 h-16 sm:h-16 lg:h-16"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Border */}
      <div className="my-8">
        <hr className="border-gray-700" />
      </div>

      {/* Large Arrows */}
      <div className="absolute right-4 bottom-8 flex gap-4">
        <button
          onClick={() => handleArrowClick("left")}
          disabled={currentIndex === 0}
          className={`p-4 bg-transparent hover:text-gray-500 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-12 h-12" />
        </button>
        <button
          onClick={() => handleArrowClick("right")}
          disabled={currentIndex === sliderData.length - 1}
          className={`p-4 bg-transparent hover:text-gray-500 ${
            currentIndex === sliderData.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}
