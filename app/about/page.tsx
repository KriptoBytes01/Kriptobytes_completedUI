import Lens from "@/components/About-Lens";
import Awards from "@/components/Awards";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import FutureDesignSection from "@/components/FutureDesign";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="bg-black">
        <div className="absolute w-full min-h-screen  text-white inset-0 bg-cover bg-center bg-no-repeat bg-opacity-30" 
        style={{
          backgroundImage: "url('/about-bg.png')",
          filter: "brightness(1.1) contrast(1.1)",
        }}></div> 
        
        <div className="container relative mx-auto flex flex-col items-start justify-center min-h-screen px-6 lg:px-28 py-8 md:py-16 text-white">
          <h1 className="text-3xl font-serif md:text-5xl mb-8 leading-tight text-balance animate-slide-in">
            {`We’re`} Building For Billions And Crafting Stories Of Bold Transformation
          </h1>
          <p className="text-base md:text-lg max-w-2xl text-start text-balance mb-8 animate-slide-in">
            Welcome to our company! We are dedicated to delivering exceptional service
            and innovative solutions tailored to your needs.
          </p>
          <button className="flex items-center justify-start w-fit px-8 py-3 bg-teal-600 text-white hover:bg-teal-500 transition animate-slide-in">
            {`Let's`} Talk
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </button>
        </div>
        </div>
        {/* second section */}
     
      <div className="bg-black  text-white py-14 px-28 ">
        <div className="container mx-auto gap-10 mb-16 flex flex-col md:flex-row items-start px-6 lg:px-28">
          <h1 className="text-5xl md:w-1/2 mb-6 md:mb-0">
            We are not different. We lead by creating a difference
          </h1>
          <p className="text-lg md:w-1/2 text-gray-400">
            Engineering ideas to improvise lives, KriptoBytes over the past 25 years, has empowered ambitious change-makers
            around the world with sustained digital capabilities. We are a trusted Digital Engineering and Enterprise
            Modernization partner with offerings that enable our clients by creating a unique competitive advantage.
            Combining deep technical competencies and industry experience, we ensure robustness, extensibility, and
            continuity in the solutions we deliver.
          </p>
        </div>
        <div className="items-center justify-center h-full mt-4 border-r-4 border-teal-600"></div>

      </div>

     {/* third section */}

  <div className="py-20 px-28 text-white bg-zinc-900">
  <div className="items-center justify-center h-full mt-4 border-r-4 border-teal-600"></div>

        <div className="container mt-20 mx-auto text-center">
          <h2 className="lg:text-5xl text-3xl mb-20">
          Leading by Passion. Driven by Innovation
          </h2>

         
          <div className="grid grid-cols-1 bg-transparent md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center bg-zinc-800 p-20 shadow-lg">
              <h3 className="text-5xl text-teal-500  mb-4">4000+</h3>
              <h4 className="text-xl text-gray-100">Talent Pool</h4>
            </div>
            <div className="flex flex-col items-center bg-zinc-800 p-20 shadow-lg">
              <h3 className="text-5xl text-teal-500  mb-4">2000+</h3>
              <h4 className="text-xl text-gray-100">Products Engineered</h4>
            </div>
            <div className="flex flex-col items-center bg-zinc-800 p-20 shadow-lg">
              <h3 className="text-5xl text-teal-500 mb-4">1500+</h3>
              <h4 className="text-xl text-gray-100">Happy Clients</h4>
            </div>
            <div className="flex flex-col items-center bg-zinc-800 p-20 shadow-lg">
              <h3 className="text-5xl text-teal-500 mb-4">22+</h3>
              <h4 className="text-xl text-gray-100">Industries Served</h4>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <div className="py-16 bg-black">
    
      <div className="text-center mt-10 mb-12">
        <h1 className="text-white text-5xl">Leadership</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20 mb-20">
        {/* Box 1 */}
        <div className="bg-zinc-900 border border-gray-500  flex flex-col items-center shadow-lg">
          <Image height={100} width={100} src="/leader1.png" alt="Leader 1" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="text-xl  text-white mb-2">John Doe</h3>
          <p className="text-gray-300 text-center">
            John Doe is the CEO with over 20 years of experience in driving business growth and innovation.
          </p>
          <div className="w-full mt-4 border-b-4 border-teal-600"></div>
        </div>

        {/* Box 2 */}
        <div className="bg-zinc-900 border border-gray-500 flex flex-col items-center shadow-lg">
          <Image height={100} width={100} src="/leader2.png" alt="Leader 2" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="text-xl text-white mb-2">Jane Smith</h3>
          <p className="text-gray-300 text-center">
            Jane Smith is the CTO, bringing technical expertise and vision to drive our products forward.
          </p>
          <div className="w-full mt-4 border-b-4 border-teal-600"></div>
        </div>

        {/* Box 3 */}
        <div className="bg-zinc-900 border border-gray-500 flex flex-col items-center shadow-lg">
          <Image height={100} width={100} src="/leader3.png" alt="Leader 3" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="text-xl text-white mb-2">Emily Davis</h3>
          <p className="text-gray-300 text-center">
            Emily Davis is the CFO, overseeing financial strategies that drive success and profitability for organisation.
          </p>
          <div className="w-full mt-4 border-b-4 border-teal-600"></div>
        </div>
      </div>
    </div>

    {/* fifth section */}

   

    <Awards />
    <Expertise />
    <FutureDesignSection />
    <Lens />
    <Form />
    <Footer />

      
    </>
  );
}
