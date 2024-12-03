"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Jobs() {
  const jobData = [
    {
      logo: "/job-logo1.png",
      heading: "JavaScript Mobile",
      description: "React Native Developer (2-8 Years)Tech Lead - Javascript Mobile (5-10 Years)",
    },
    {
      logo: "/job-logo2.png",
      heading: "UI/UX Developer",
    description: "Frontend Designer (HTML / CSS / JS) (2-8 Years)Creative Head (10-12 Years)",
    },
    {
      logo: "/job-logo3.png",
      heading: "Blockchain",
      description: "Blockchain Developer (2-8 Years)Tech Lead - Blockchain (5-10 Years)",
    },
    {
      logo: "/job-logo4.png",
      heading: "Flutter",
      description: "Flutter Developer (2-8 Years)Tech Lead - Flutter (5-10 Years)",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-16 flex flex-col gap-6"
    style={{
        backgroundImage: "url('/jobs-bg.png')",
    }}
    >
      {/* Heading */}
      <h1 className="text-5xl sm:text-3xl mb-6 lg:text-5xl  text-white text-center">
        Featured Jobs
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Box */}
        <div className="lg:w-1/3 h-2/3 bg-black flex flex-col gap-4">
          <Image
            src="/jobs-image.png"
            alt="Job Image"
            width={300}
            height={250}
            className="mx-auto"
          />
          <h2 className="text-2xl mb-4 text-gray-300 text-center">
            Android Developers
          </h2>
          <p className="text-gray-600 mb-8 text-lg text-center">
            Android Developer (2-8 Years)
            <br />
            Tech Lead - Android (5-10 Years)
          </p>
          <button className="self-center text-white flex items-center gap-2">
            View 6 open positions <FontAwesomeIcon icon={faArrowRight} className="hover:text-teal-500"/>
          </button>
        </div>

        {/* Right Boxes */}
        <div className="lg:w-2/3 grid px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {jobData.map((job, index) => (
            <div
              key={index}
              className="border border-gray-500  p-6 flex flex-col gap-2 items-start text-start"
            >
              <div className="w-16 h-16 flex items-start justify-start ">
                <Image
                  src={job.logo}
                  alt={`Logo ${index + 1}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-200">
                {job.heading}
              </h3>
              <p className="text-sm text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* See All Positions Button */}
      <div className="flex justify-end mt-6">
        <button className="text-white mx-8 border border-white px-4 py-2 flex items-center gap-2">
          See All Positions <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
