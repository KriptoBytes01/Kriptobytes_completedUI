"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { metadata } from "./head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        

        {/* Navbar */}
        <header
          className={`fixed top-0 w-full p-2 transition-all duration-300 z-50 ${
            isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
          }`}
        >
          <nav className="container  mx-auto flex justify-between items-center px-4 py-3 relative">
            {/* Hamburger Icon for Mobile */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            {/* Navbar Heading */}
            <div
              className={`flex items-center justify-between w-full ${
                isMobileMenuOpen ? "lg:justify-start" : ""
              }`}
            >
              <div
                className={`flex items-center ${
                  isMobileMenuOpen ? "justify-center w-full" : "justify-start"
                }`}
              >
               
                <Image
                  width={100}
                  height={100}
                  src="/logo.png"
                  alt="Logo"
                  className="w-8 h-8 mr-2 hidden sm:block"
                />
                <Link href="/" className="text-2xl font-semibold items-center justify-center">
                  Kripto<span className="text-teal-500">Bytes</span>
                </Link>
              </div>

              {/* Desktop Navbar Links with Dropdowns */}
              <div className="hidden lg:flex space-x-6 relative">
                <ul className="flex space-x-6 relative">
                  {/* Services Dropdown */}
                  <li className="group relative">
                    <Link
                      href="/services"
                      className="hover:border-b-4 hover:border-teal-500 pb-3"
                    >
                      Services
                    </Link>
                    <div className="dropdown-menu hidden group-hover:flex absolute top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md">
                      <div className="w-full md:w-1/2">
                        <Link href="/web-development" className="hover:text-teal-400 block">
                          Web Development
                        </Link>
                        <div className="relative group">
                          <Link href="/mobile-app" className="hover:text-teal-400 block mt-2">
                            Mobile App
                          </Link>
                          <div className="nested-dropdown hidden group-hover:flex flex-col absolute top-0 left-full w-48 bg-black bg-opacity-90 text-white p-4 rounded-md space-y-2">
                            <Link href="/languages/swift" className="hover:text-teal-400">
                              Swift
                            </Link>
                            <Link href="/languages/kotlin" className="hover:text-teal-400">
                              Kotlin
                            </Link>
                            <Link href="/languages/react-native" className="hover:text-teal-400">
                              React Native
                            </Link>
                            <Link href="/languages/flutter" className="hover:text-teal-400">
                              Flutter
                            </Link>
                          </div>
                        </div>
                        <Link href="/cloud-services" className="hover:text-teal-400 block mt-2">
                          Cloud Services
                        </Link>
                      </div>
                      <div className="hidden md:block w-full md:w-1/2 pl-4">
                        <p className="text-gray-300">
                          Choose from our range of expert services to boost your business and streamline processes.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Industries Dropdown */}
                  <li className="group relative">
                    <Link
                      href="/industries"
                      className="hover:border-b-4 hover:border-teal-500 pb-3"
                    >
                      Industries
                    </Link>
                    <div className="dropdown-menu hidden group-hover:flex absolute top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md">
                      <div className="w-full md:w-1/2">
                        <Link href="/healthcare" className="hover:text-teal-400 block">
                          Healthcare
                        </Link>
                        <Link href="/finance" className="hover:text-teal-400 block mt-2">
                          Finance
                        </Link>
                        <Link href="/education" className="hover:text-teal-400 block mt-2">
                          Education
                        </Link>
                      </div>
                      <div className="hidden md:block w-full md:w-1/2 pl-4">
                        <p className="text-gray-300">
                          Solutions tailored to meet the demands of various industries.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Solutions Dropdown */}
                  <li className="group relative">
                    <Link
                      href="/solutions"
                      className="hover:border-b-4 hover:border-teal-500 pb-3"
                    >
                      Solutions
                    </Link>
                    <div className="dropdown-menu hidden group-hover:flex absolute top-full left-0 w-full bg-black bg-opacity-90 text-white mt-2 p-6 flex-col md:flex-row rounded-md">
                      <div className="w-full md:w-1/2">
                        <Link href="/ai-solutions" className="hover:text-teal-400 block">
                          AI Solutions
                        </Link>
                        <Link href="/iot-solutions" className="hover:text-teal-400 block mt-2">
                          IoT Solutions
                        </Link>
                        <Link href="/blockchain" className="hover:text-teal-400 block mt-2">
                          Blockchain
                        </Link>
                      </div>
                      <div className="hidden md:block w-full md:w-1/2 pl-4">
                        <p className="text-gray-300">
                          Discover innovative solutions to enhance productivity and efficiency.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link href="/about" className="hover:border-b-4 hover:border-teal-500 pb-3">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:border-b-4 hover:border-teal-500 pb-3">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="hover:border-b-4 hover:border-teal-500 pb-3">
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:border-b-4 hover:border-teal-500 pb-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Search Icon */}
<div className="flex flex-row items-center space-x-2">
  <Link href="/search" aria-label="Search">
    <h4 className="hidden sm:block">Explore</h4>  
    <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
  </Link>
</div>

            </div>
          </nav>
          
          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute left-0 top-full w-full bg-black bg-opacity-90 text-white p-6 flex-col space-y-4 lg:hidden`}
          >
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="block hover:text-teal-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="block hover:text-teal-400">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="block hover:text-teal-400">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="block hover:text-teal-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block hover:text-teal-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="block hover:text-teal-400">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>

        {/* Page Content */}
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
