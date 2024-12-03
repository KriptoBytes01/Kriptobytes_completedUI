"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function JoinLeaders() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/leaders-bg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 mx-8 sm:mx-16 md:mx-28 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-6 md:p-16">
        {/* Left-side Text Content */}
        <div className="text-white max-w-lg space-y-4">
            <div className="bg-transparent mb-6 sm:mb-8 w-fit text-lg sm:text-xl p-4 border border-white">
                {"We're"} KriptoBytes
            </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold sm:font-bold">
            We #buildforbillions
          </h1>
        </div>

        {/* Right-side Box */}
        <div className="bg-black h-[350px] sm:h-[400px] md:h-[450px] w-full sm:w-[400px] md:w-[450px] border-8 p-6 sm:p-8 md:mt-0">
          <h2 className="text-white text-3xl sm:text-4xl md:text-4xl mt-8">Join the Leaders</h2>
          <p className="text-gray-300 mt-4 sm:mt-6 text-base sm:text-lg md:text-base">
            Software, Systems, Applications & Products built by NeoSOFT are used by more than a billion people on earth. We work with the best brands across the globe, helping them #buildforbillions.
            Join the team and make a difference.
          </p>
          <button className="bg-teal-500 mt-6 sm:mt-8 p-3 sm:p-4 w-fit text-white text-sm sm:text-base">
            Explore Career Opportunities
            <FontAwesomeIcon icon={faArrowRight} className="mx-2 sm:mx-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
