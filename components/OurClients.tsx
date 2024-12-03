"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGoogle,
  faMicrosoft,
  faAmazon,
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default function OurClients() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Slide content with logos
  const slideContent = [
    [
      { icon: faApple, name: "Apple" },
      { icon: faGoogle, name: "Google" },
      { icon: faMicrosoft, name: "Microsoft" },
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
      { icon: faTwitter, name: "Twitter" },
      { icon: faSpotify, name: "Spotify" },
      { icon: faApple, name: "Apple" },
      { icon: faGoogle, name: "Google" },
      { icon: faMicrosoft, name: "Microsoft" },
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
    ],
    [
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
      { icon: faTwitter, name: "Twitter" },
      { icon: faSpotify, name: "Spotify" },
      { icon: faApple, name: "Apple" },
      { icon: faGoogle, name: "Google" },
      { icon: faMicrosoft, name: "Microsoft" },
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
      { icon: faTwitter, name: "Twitter" },
      { icon: faAmazon, name: "Amazon" },
      { icon: faFacebook, name: "Facebook" },
    ],
  ];

  const handlePrevious = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? slideContent.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex === slideContent.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-black text-white p-14 md:p-20 flex flex-col md:flex-row items-center md:items-centre gap-8">
      {/* Left Side - Heading and Paragraph */}
      <div className="max-w-md space-y-4 text-center justify-center md:text-left mb-4 md:mb-0">
      <hr className="border-t-2 border-gray-300 w-2/3 mb-8 md:mb-2 " />
        <h2 className="text-3xl md:text-5xl">Our Happy Clients</h2>
        <p className="text-lg md:text-xl text-gray-300">
          They trust us, and we keep giving them reasons to.
        </p>
        <button className="bg-transparent text-lg w-fit mx-auto md:mx-0 p-4 border border-white">
          View all clients
          <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
        </button>
      </div>

      {/* Right Side - Slider */}
      <div className="flex-1 text-center relative p-4 md:p-12">
        {/* Slider Controls */}
        <button onClick={handlePrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
          <FontAwesomeIcon icon={faChevronLeft} className="text-white text-2xl md:text-4xl" />
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
          <FontAwesomeIcon icon={faChevronRight} className="text-white text-2xl md:text-4xl" />
        </button>

        {/* Slide Content */}
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {slideContent[slideIndex].map((logo, index) => (
            <div key={index} className="bg-white text-black flex flex-col items-center justify-center h-20 md:h-40 w-20 md:w-40 shadow-md">
              <FontAwesomeIcon icon={logo.icon} className="text-xl md:text-2xl mb-1 md:block hidden" />
              <span className="text-xs md:text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
