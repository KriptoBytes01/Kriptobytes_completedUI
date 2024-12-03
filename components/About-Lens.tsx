"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Section {
  title: string;
  description: string;
}

export default function Lens() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleSections((prev) => prev.filter((item) => item !== index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const sections: Section[] = [
    {
      title: "People, Process, and Technology",
      description:
        "We believe that creating a viable product or service requires a balanced operational strategy. Everything from leadership to digital transformation, organizational talent, and management practices must be integrated for effective development.",
    },
    {
      title: "Certifications",
      description:
        "KriptoBytes is committed to delivering excellence by adhering to quality standards. We are ISO 9001:2008 certified for Quality and Data Security.",
    },
    {
      title: "Partnerships",
      description:
        "Partnerships are a critical part of our go-to-market strategy. We take great care in selecting partners who complement our core competencies.",
    },
    {
      title: "Infrastructure",
      description:
        "We have the best-in-class, secured, and reliable IT infrastructure to take your business to the next level.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/lens-bg.png')" }}
    >
      <div className="text-center py-10 px-6">
        <h1 className="lg:text-5xl mt-8 lg:mb-8  text-white text-3xl ">
          Reimagining the Future with an Integrated Lens
        </h1>
      </div>

      <div className="container mx-auto lg:px-28 lg:mt-10 flex flex-col lg:flex-row items-start gap-28">
        {/* Left Image */}
        <div className="lg:w-2/3 sticky top-20 hidden lg:block">
          <Image
            src="/lens-img.png"
            alt="Lens"
            width={500}
            height={500}
            className="w-[500px] h-[500px] object-cover"
            priority
          />
        </div>

        {/* Right Sections */}
        <div className="lg:w-2/3 lg:ml-20 mb-8 grid lg:grid-cols-1 sm:grid-cols-2 gap-4 px-10 py-4">
          {sections.map((section, index) => (
            <div
            key={index}
            data-index={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className={`p-4 bg-transparent border-2 border-gray-500 lg:border-none transform transition-transform duration-500 ease-out ${
              visibleSections.includes(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">
              {section.title}
            </h2>
            <p className="text-sm text-gray-500">{section.description}</p>
            <div className="lg:border-gray-600 w-40 mt-6 lg:border-b-2"></div>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}
