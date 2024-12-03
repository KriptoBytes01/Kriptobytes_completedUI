import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
   <>
   {/* Background Video */}
   <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-30"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
   <div className="h-screen mx-6 mt-32 md:mt-52 p-28 bg-[url('/bg-image.jpg')] bg-cover bg-center text-white"
          style={{ filter: 'brightness(1.2)' }}>
          <h2 className="text-3xl md:text-5xl font-mono text-balance md:text-balance">
            Driving Digital Growth, Led By Technology
          </h2>
          <p className="text-balance md:text-balance text-2xl mt-10 font-serif">
            Fueling business with sustained digital capabilities,<br /> resilient products, and next-gen solutions.
          </p>
          <button className="bg-teal-600 py-3 px-6 text-lg mt-10 w-fit h-fit">
          {`Let's Talk`} <FontAwesomeIcon icon={faArrowRight} className="mx-4" />
          </button>
        </div>

   </>
  )
}
