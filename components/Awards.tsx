"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Awards() {
  const slides = [
    {
      heading: "Award 1",
      description: "Description for award 1",
      img: "/award1.png",
    },
    {
      heading: "Award 2",
      description: "Description for award 2",
      img: "/award2.png",
    },
    {
      heading: "Award 3",
      description: "Description for award 3",
      img: "/award3.png",
    },
    {
      heading: "Award 4",
      description: "Description for award 4",
      img: "/award4.png",
    },
    {
      heading: "Award 5",
      description: "Description for award 5",
      img: "/award5.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsAnimating(false);
    }, 600); // Match animation duration
  };

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  return (
    <div
      className="h-full w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/awards-bg.png')",
      }}
    >
      {/* Heading */}
      <div className="text-center py-16">
        <h1 className="lg:text-5xl text-3xl text-white">Awards and Recognition</h1>
      </div>

      {/* Slider */}
      <div className="relative h-1/3 mx-auto max-w-5xl bg-opacity-70 shadow-lg overflow-hidden">
        <div
          className={`flex h-1/3 transition-transform duration-500 ease-in-out ${
            isAnimating ? "transform" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col md:flex-row items-center justify-between px-6 py-8 text-white"
            >
              {/* Slide Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold">{slide.heading}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>

              {/* Slide Image */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <Image
                  src={slide.img}
                  alt={slide.heading}
                  width={400}
                  height={300}
                  className="shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mb-6 mt-6 pb-4 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-teal-500" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
