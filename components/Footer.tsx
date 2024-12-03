"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white px-14 py-16 space-y-6 border-b border-gray-300">
      {/* Wrapper for all sections in a flex column */}
      <div className="flex flex-row space-y-8">
        {/* Section 1 */}
        <div className="flex flex-col space-y-4 md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Stay Connected</h2>
          <div className="bg-teal-900 p-3 w-24 text-center">
            <p>Subscribe for updates</p>
          </div>
          {/* <div className="w-12 h-24 border-t-8 border-t-cyan-400 border-l-8 top-0 border-l-transparent"></div> */}
        </div>

        {/* Section 2 */}
        <div className="flex flex-col space-y-2 md:w-1/5">
          <h2 className="text-zinc-200 text-xl font-semibold">Our Company</h2>
          {["Our Company", "About us", "Industries", "Clientele", "Careers", "Contact us"].map((item, index) => (
            <a key={index} href="#" className="hover:text-teal-500 text-zinc-400">{item}</a>
          ))}
          <h3 className="mt-4 text-xl font-semibold text-gray-300">Resources</h3>
          <a href="#" className="hover:text-teal-500 text-zinc-400">Blogs</a>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col space-y-2 md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Services</h2>
          {[
            "Digital Transformation",
            "Team Augmentation",
            "Product Engineering",
            "Application Development",
            "Innovation Lab",
            "UI/UX",
            "Artificial Intelligence (AI)",
            "Internet of Things (IoT)",
            "Blockchain",
            "Data Science",
            "Big Data & Analytics",
            "DevOps",
            "IMS",
            "Quality Engineering",
            "Cloud Services",
          ].map((service, index) => (
            <a key={index} href="#" className="hover:text-teal-500 text-zinc-400">{service}</a>
          ))}
        </div>

        {/* Section 4 */}
        <div className="flex flex-col space-y-2 md:w-1/5">
          <h2 className="text-xl text-zinc-200 font-semibold">Solutions</h2>
          {["eCommerce", "CRM", "CMS", "RPA", "SAP", "ERP"].map((solution, index) => (
            <a key={index} href="#" className="text-zinc-400 hover:text-teal-500">{solution}</a>
          ))}
        </div>

        {/* Section 5 */}
        <div className="flex flex-col md:w-1/5">
          <h2 className="text-xl text-gray-300 font-semibold">Our Brands</h2>
          <div className="grid grid-cols-1 items-center justify-center gap-1 mt-4">
            {/* Placeholder for brand logos */}
            {Array(3).fill("").map((_, i) => (
              <div key={i} className="w-32 h-12 bg-zinc-200"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Icons in a center-aligned div */}
      <div className="flex justify-center space-x-6 mt-12">
        <a
          href="https://facebook.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a
          href="https://youtube.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-400 hover:text-teal-500 text-lg sm:text-xl md:text-2xl"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
