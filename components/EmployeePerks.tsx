import Image from "next/image";

export default function EmployeePerks() {
    const perks = [
      { id: 1, title: "Health Benefits", logo: "/health.png" },
      { id: 2, title: "Paid Leave", logo: "/leave.png" },
      { id: 3, title: "Work from Home", logo: "/remote.png" },
      { id: 4, title: "Flexible Hours", logo: "/flexible.png" },
      { id: 5, title: "Skill Development", logo: "/skill.png" },
      { id: 6, title: "Retirement Plans", logo: "/retirement.png" },
      { id: 7, title: "Performance Bonuses", logo: "/bonus.png" },
      { id: 8, title: "Travel Allowance", logo: "/travel.png" },
      { id: 9, title: "Team Outings", logo: "/team.png" },
      { id: 10, title: "Wellness Programs", logo: "/wellness.png" },
      { id: 11, title: "Career Growth", logo: "/career.png" },
      { id: 12, title: "Parental Leave", logo: "/parental.png" },
      { id: 13, title: "Office Perks", logo: "/office.png" },
      { id: 14, title: "Education Assistance", logo: "/education.png" },
    ];
    
    return (
      <div className="bg-black py-8">
        {/* Heading */}
        <h1 className="text-3xl mt-6  sm:text-4xl lg:text-5xl text-white text-center mb-10">
          Employee Perks (India)
        </h1>
  
        {/* Perks Grid */}
        <div className="container px-14 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-12">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="bg-neutral-900 text-neutral-400 p-10 flex flex-col items-center text-center"
            >
              <Image
              height={100}
              width={100}
                src={perk.logo}
                alt={perk.title}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-4"
              />
              <h2 className="text-sm sm:text-sm font-medium">{perk.title}</h2>
            </div>
          ))}
  
          {/* Join Us Box */}
          <div className="bg-teal-600 text-white  p-4 flex flex-col items-center justify-center hover:shadow-lg transition">
            <h2 className="text-lg sm:text-xl lg:text-2xl  mb-2">
              Join Us
            </h2>
            <div className="border-2 border-white text-center justify-center rounded-full h-14 w-14">
            <span className="text-2xl sm:text-3xl lg:text-4xl items-center font-bold">
              →
            </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  