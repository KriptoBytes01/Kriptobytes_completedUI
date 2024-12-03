import Image from "next/image";

export default function Expertise() {
  return (
    <>
      <div
        className="relative h-full bg-cover bg-center text-white py-10"
        style={{
          backgroundImage: "url('/brands-bg.png')",
        }}
      >
        <div className="container lg:mt-8 mx-auto py-14 sm:px-6 px-12">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">Our Expertise</h2>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl">
              Discover the range of services we offer to bring your business to
              the next level.
            </p>
          </div>

          {/* Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-20">
            {/* Box 1 */}
            <div className="bg-transparent border-gray-400 border bg-opacity-50 text-center p-4 lg:p-14 shadow-md">
              <Image
                height={100}
                width={100}
                src="/brand-logo1.png"
                alt="Logo 1"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
              />
              <hr className="my-4 sm:my-6 border-teal-500" />
              <p className="text-sm sm:text-sm">
                Cutting-edge web development solutions tailored to your business
                needs.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-transparent bg-opacity-50 text-center p-4 sm:p-6 lg:p-14 border border-gray-400 shadow-md">
              <Image
                height={100}
                width={100}
                src="/brand-logo2.png"
                alt="Logo 2"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
              />
              <hr className="my-4 sm:my-6 border-teal-500" />
              <p className="text-sm sm:text-sm">
                Expert mobile app development to engage users on any platform.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-transparent bg-opacity-50 text-center p-4 sm:p-6 lg:p-14 border border-gray-400 shadow-md">
              <Image
                height={100}
                width={100}
                src="/brand-logo3.png"
                alt="Logo 3"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
              />
              <hr className="my-4 sm:my-6 border-teal-500" />
              <p className="text-sm sm:text-sm">
                Advanced cloud services to ensure scalability and security for
                your business.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-transparent bg-opacity-50 text-center p-4 sm:p-6 lg:p-14 border border-gray-400 shadow-md">
              <Image
                width={100}
                height={100}
                src="/brand-logo4.png"
                alt="Logo 4"
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
              />
              <hr className="my-4 sm:my-6 border-teal-500" />
              <p className="text-sm sm:text-sm">
                Comprehensive digital marketing strategies to grow your online
                presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
