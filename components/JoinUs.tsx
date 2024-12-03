export default function JoinUs() {
    return (
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/joinus-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-white text-4xl sm:text-5xl font-serif mb-8 px-4">
            We don’t let you sleep on your ideas.
            <br />
            Let’s work together!
          </h1>
          <button className="flex items-center border border-white gap-2 px-6 py-3 mt-10 text-white text-lg  hover:bg-teal-500 hover:border-teal-500  focus:outline-none focus:ring focus:ring-teal-300 transition duration-300">
            Join Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  