"use client";

import { useState } from "react";

export default function WorldwideOffices() {
  const boxData = [
    { heading: "Dadar, Mumbai (Headquarters)", description: "The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028", region: "India" },
    { heading: "Parel, Mumbai", description: "Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013", region: "India" },
    { heading: "Rabale, Mumbai", description: "Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701", region: "India" },
    { heading: "Pune", description: "IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057", region: "India" },
    { heading: "Noida", description: "WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301", region: "India" },
    { heading: "Ahmedabad", description: "WestGate, True Value, Block-E, 5th Floor, Near YMCA Club, SG Road, Ahmedabad 380015 Gujarat, India.", region: "India" },
    { heading: "Indore", description: "Virtual Co-Works, 41-42, First Floor, Pu4, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010", region: "India" },
    { heading: "Bengaluru", description: "Novel MSR Building, Subbaiah Reddy Colony, Marathahalli Village, Marathahalli, Bengaluru, Karnataka - 560037", region: "India" },
    { heading: "Kolkata", description: "Technopolis Building 11th floor HCHQ+V3X, Street Number 1, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091", region: "India" },
    { heading: "Chennai", description: "Awfis Primus, 1st Floor, Door No. SP–7A, Guindy Industrial Estate, SIDCO, Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032", region: "India" },
    { heading: "Hyderabad", description: "N-Heights buildings ,AWFIS, 6th floor Siddiq Nagar, , HITEC City, Hyderabad, Telangana 500081", region: "India" },
    { heading: "Singapore", description: "52C Hume Avenue, #06-17 The Summerhill, Singapore 596230", region: "Asia Pacific" },
    { heading: "Australia", description: "152 Elizabeth Street Melbourne, VIC 3000", region: "Asia Pacific" },
    { heading: "Dubai", description: "6th Floor, Latifa Tower, Sheikh Zayed Road, Opp. Dubai World Trade Centre, Dubai, United Arab Emirates.", region: "Middle East" },
    { heading: "Sweden", description: "Gamla Brogatan 19, 111 20 Stockholm ", region: "Europe" },
    { heading: "Germany", description: "Magdalene-Schoch-Str. 5 97074 Würzburg", region: "Europe" },
    { heading: "UK", description: "21, Christopher Road, Selly Oak, Birmingham, B29 6QJ", region: "Europe" },
    { heading: "USA", description: "1207 Delaware Ave Suite 3411 Wilmington, DE 19806", region: "North America" },
    { heading: "Argentina", description: "Av. Constitucion 910 5 S. Pa, Rio Cuarto, Cordoba, Argentina", region: "South America" },
    { heading: "South Africa", description: "Fountain Grove Office Park, 5 Second Street, Hyde Park, Gauteng, 2196", region: "South Africa" },
  ];

  const buttonData = [
    { name: "All", region: "All" },
    { name: "India", region: "India" },
    { name: "Asia Pacific", region: "Asia Pacific" },
    { name: "Middle East", region: "Middle East" },
    { name: "Europe", region: "Europe" },
    { name: "North America", region: "North America" },
    { name: "South America", region: "South America" },
    { name: "South Africa", region: "South Africa" },
  ];

  const [activeRegion, setActiveRegion] = useState("All");

  const filteredBoxes = activeRegion === "All"
    ? boxData
    : boxData.filter((box) => box.region === activeRegion);

  return (
    <div className="bg-transparent text-black p-10 lg:p-20">
      {/* Left Heading and Right Box */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-16">
        <div>
          <h1 className="text-5xl mb-4 text-black">Worldwide offices</h1>
          <p className="text-black text-lg">Explore our service offerings and subsidiaries in specific geographies.</p>
        </div>
        <div className="flex flex-row gap-2 px-14 py-14 w-full sm:w-fit bg-transparent text-center">
          <div>
            <h1 className="text-8xl font-bold text-black">21</h1>
            <h2 className="text-3xl mb-4 text-black">Offices</h2>
            <div className="border-4 border-b-teal-700"></div>
          </div>
          <p className="text-xl py-4 text-balance">
            Across 10+ <br /> Territories with <br /> 4000+ Global <br /> Workforce
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mb-16 justify-center">
        {buttonData.map((button, index) => (
          <button
            key={index}
            className={`px-6 py-3 hover:bg-teal-500 hover:text-white rounded-3xl text-sm border-2 transition duration-300 ${
              activeRegion === button.region
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-transparent text-black border-black hover:border-teal-500"
            }`}
            onClick={() => setActiveRegion(button.region)}
          >
            {button.name}
          </button>
        ))}
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredBoxes.map((box, index) => (
          <div
            key={index}
            className="border-2 bg-white justify-center border-gray-400 bg-transparent flex flex-col items-center p-10 "
          >
            <h3 className="text-3xl text-center text-black">{box.heading}</h3>
            <p className="text-sm text-center text-gray-500 mt-4">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
