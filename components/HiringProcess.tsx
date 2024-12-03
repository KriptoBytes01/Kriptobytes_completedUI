export default function HiringProcess() {
    return (
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('/hiring-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 sm:p-8">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mt-4 mb-4 text-center">
            Our Hiring Process
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base text-center mb-6 sm:mb-10 max-w-xl">
            Making the right choice begins with getting to know each other and an opportunity to talk
            about what we can achieve together. Our onboarding process is simple, transparent, and
            focuses on matching the right talent with the right opportunity.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-14 w-full max-w-6xl">
            {[
              {
                step: "01",
                title: "Profile Shortlisting",
                items: [
                  "Profile Screening",
                  "Career Portal Registration",
                  "Evaluation",
                  "Role Feasibility Check",
                  "Invitation for F2F Interview",
                ],
              },
              {
                step: "02",
                title: "Written Test",
                items: [
                  "Aptitude (if applicable)",
                  "Programming & Logic (if applicable)",
                  "Domain Specific (if any)",
                ],
              },
              {
                step: "03",
                title: "Technical Evaluation",
                items: ["Level 1 - Basic", "Level 2 - Advanced", "Level 3 - Expert (if applicable)"],
              },
              {
                step: "04",
                title: "HR Round",
                items: ["Remuneration", "Company Policies", "Queries"],
              },
            ].map((process, index) => (
              <div
                key={index}
                className="relative pl-4 pt-10 pb-4 sm:pt-12 sm:pb-6 text-left border-l-2 border-dashed border-white"
              >
                {/* Blue Div */}
                <div className="absolute -top-6 left-0 bg-teal-700 text-white border border-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-lg font-bold">
                  {process.step}
                </div>
                {/* Content */}
                <h2 className="text-white text-lg sm:text-xl lg:text-2xl underline mb-2 sm:mb-4">
                  {process.title}
                </h2>
                <ul className="text-gray-300 text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
                  {process.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  