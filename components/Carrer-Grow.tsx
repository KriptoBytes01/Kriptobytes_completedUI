export default function CareerGrow() {
  return (
    <div
      className="flex flex-col px-10 md:flex-row items-center justify-between bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage: "url('/grow-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "35rem", 
      }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/3 text-white mb-8 md:mb-0 px-4">
        <h1 className="text-4xl mb-6 md:text-5xl font-bold">
          {`Here's`} how we have grown!
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Great vision with great people. It matters a lot to us!
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div className="bg-transparent border border-gray-400 py-8 px-6 flex flex-col justify-center items-center shadow-md">
          <h3 className="text-base text-white font-medium">Last Quarter</h3>
          <h2 className="text-5xl md:text-4xl font-bold text-white mt-4">
            1170+
          </h2>
          <p className="text-gray-200 mt-4 text-center">
            got trained in new technologies
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-transparent border border-gray-400 py-8 px-6 flex flex-col justify-center items-center shadow-md">
          <h3 className="text-base text-white font-medium">Last Quarter</h3>
          <h2 className="text-5xl md:text-4xl font-bold text-white mt-4">
            59+
          </h2>
          <p className="text-gray-200 mt-4 text-center">
            traveled to global locations
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-transparent border border-gray-400 py-8 px-6 flex flex-col justify-center items-center  shadow-md">
          <h3 className="text-base text-white font-medium">Last Quarter</h3>
          <h2 className="text-5xl md:text-4xl font-bold text-white mt-4">
            855+
          </h2>
          <p className="text-gray-200 mt-4 text-center">
            joined our company
          </p>
        </div>
      </div>
    </div>
  );
}
