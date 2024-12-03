"use client";

import { useState } from "react";
import Image from "next/image";

export default function FutureDesignSection() {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const boxes = [
    { title: "Vision", description: "To earn lifetime loyalty of our customers by consistently delivering the highest quality software services which offer excellent value to their business." },
    { title: "Mission", description: "To enable businesses to leverage the power of digital innovation – by envisioning & building disruptive software products, services & experiences which drive growth, differentiation & real economic value." },
    { title: "Culture and Values", description: "Core values laid by our visionaries form the bedrock of our culture and it clearly defines the roadmap as we serve our stakeholders. Our culture reflects our brand ethos and helps us operate with ethics, integrity, trust, and dignity with our partners, affiliates, customers, and employees." },
    { title: "CSR", description: "Under the aegis of NeoSmile FOUNDATION, we actively contribute toward the development of humankind and the society we live in. The objective is to build a better and sustainable livelihood for everyone because there’s no Planet B." },
  ];

  return (
    <div className="bg-gray-100">
      {/* Outer Box */}
      <div className="relative bg-zinc-900 text-white py-20 shadow-md">
        <h2 className="lg:text-5xl text-3xl px-8 text-center mb-16 mt-14 ">
          Designing the Future for Value and Impact
        </h2>

        {/* Background Image */}
        <div className="relative mb-16">
          <Image
            src="/futuredesign-bg.png"
            alt="Designing the future"
            width={1200}
            height={800}
            className="w-full h-[500px] object-cover"
          />

        
          <div className="absolute inset-0 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="relative group hover:bg-black py-6 px-4  hover:bg-opacity-70 p-6  cursor-pointer  hover:scale-105 transition-transform duration-300"
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                >
                  {/* Heading */}
                  <h3
                    className={`text-2xl  text-white ${
                      hoveredBox === index ? "mb-2" : ""
                    } transition-all duration-300`}
                  >
                    {box.title}
                  </h3>

                  {/* Paragraph (visible only on hover) */}
                  {hoveredBox === index && (
                    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {box.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
