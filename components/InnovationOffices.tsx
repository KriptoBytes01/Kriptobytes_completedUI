"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const images = [
  {
    id: 1,
    src: "/office-img1.png",
    alt: "Image 1",
    location: "Rabale, Mumbai",
    description:
      "Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701",
  },
  {
    id: 2,
    src: "/office-img2.png",
    alt: "Image 2",
    location: "Bengaluru, Karnataka",
    description:
      "Global Tech Park, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103",
  },
  {
    id: 3,
    src: "/office-img3.png",
    alt: "Image 3",
    location: "Hyderabad, Telangana",
    description:
      "Cyber Towers, Hitech City, Madhapur, Hyderabad, Telangana 500081",
  },
  {
    id: 4,
    src: "/office-img4.png",
    alt: "Image 4",
    location: "Pune, Maharashtra",
    description: "EON IT Park, Kharadi, Pune, Maharashtra 411014",
  },
  {
    id: 5,
    src: "/office-img5.png",
    alt: "Image 5",
    location: "Chennai, Tamil Nadu",
    description:
      "Tidel Park, Rajiv Gandhi Salai, Taramani, Chennai, Tamil Nadu 600113",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Header Section */}
      <div className="text-center px-6 py-8">
        <h1 className="text-5xl mb-4">Explore Our Locations</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Discover how we are growing and creating an impact at various global
          locations.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between px-6 lg:px-16 py-8 gap-8">
        {/* Left Section */}
        <div className="lg:w-1/3 justify-center  flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="bg-transparent p-6">
            <h2 className="text-4xl text-zinc-400 mb-4">
              {images[currentIndex].location}
            </h2>
            <p className="text-sm text-zinc-500">{images[currentIndex].description}</p>
            <hr className="border-t-2 border-teal-600 mt-4" />
          </div>
        </div>

        {/* Right Section (Slider) */}
        <div className="lg:w-2/3 relative">
          <div className="relative overflow-hidden flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              className={`absolute top-1/2 left-4 z-10 transform -translate-y-1/2  p-3 ${
                currentIndex === 0
                  ? "bg-transparent cursor-not-allowed"
                  : "text-gray-800 hover:text-gray-700"
              }`}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-white w-10 h-10" />
            </button>

            {/* Image Slider */}
            <div
              className="w-full flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image) => (
                <div
                  key={image.id}
                  className="min-w-full flex justify-center items-center"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              disabled={currentIndex === images.length - 1}
              className={`absolute top-1/2 right-4 z-10 transform -translate-y-1/2 rounded-full p-3 ${
                currentIndex === images.length - 1
                  ? "bg-transparent cursor-not-allowed"
                  : "text-gray-800 hover:text-gray-700"
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-white w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
