export default function GlobalPresence() {
    // Data for top boxes
    const boxData = [
      {
        heading: "50+",
        description: "Countries"
      },
      {
        heading: "25+",
        description: "Years of excellence"
      },
      {
        heading: "4000+",
        description: "Talent Pool"
      },
      {
        heading: "1500+",
        description: "Clients"
      }
    ];
    const buttonData = [
        { name: "India" },
        { name: "Asia Pacific" },
        { name: "South Africa" },
        { name: "Middle East" },
        { name: "Europe" },
        { name: "Nort America" },
        { name: "South America" },
      ];
    
  
    return (
      <>
        <div className="bg-zinc-800">
          {/* 4 Boxes on Top with Borders */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 mb-12 border-b-2 border-gray-300">
  {boxData.map((box, index) => (
    <div
      key={index}
      className="bg-transparent border border-t-transparent border-gray-300 flex flex-col justify-between p-6"
    >
      <div className="text-white flex flex-col items-center py-10 px-4 mb-4">
        <h3 className="text-3xl font-bold">{box.heading}</h3>
        <p className="text-lg mt-4">{box.description}</p>
      </div>
    </div>
  ))}
</div>


         <div className="p-28">
         <h1 className="mt-4  text-gray-200 text-5xl mb-16">Our Global Presence</h1>
  
  
        <div className="flex flex-wrap gap-8 mb-12">
            <button className="bg-white px-6 py-4 rounded-3xl text-sm text-black hover:text-white transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:translate-x-2">All</button>
          {buttonData.map((button, index) => (
            <button
              key={index}
              className="border-2  border-gray-400 bg-transparent text-gray-300 text-sm px-6 py-2 rounded-3xl transition-all duration-300 hover:bg-teal-500 hover:border-teal-500 hover:translate-x-2"
            >
              {button.name}
            </button>
          ))}
        </div>

  {/* Left-side Box with Text */}
  <div className="flex flex-col  sm:flex-row gap-8">
    <div className=" mt-4 bg-transparent border-2 border-gray-400 px-10 py-14 w-fit">
      <h1 className="text-8xl font-bold text-gray-200 ">21</h1>
      <h2 className="text-3xl mb-4 text-gray-200 underline border-b-red-600">Offices</h2>
      <p className="text-gray-300 mb-6  text-2xl text-balance">
      Across 10+ Territories with <br /> 4000+ Global Workforce
      </p>
    </div>

    {/* Right Box with Image */}
    <div className="sm:w-1/2 bg-cover bg-center h-80 sm:h-full">
      <div
        className="w-full h-full bg-[url('/globe-img.png')] bg-no-repeat bg-cover  rounded-lg"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
    </div>
  </div>
         </div>
        </div>
      </>
    );
  }
  