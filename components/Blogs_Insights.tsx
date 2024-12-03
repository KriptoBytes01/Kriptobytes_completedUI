"use client";

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

// Define the Card interface
interface Card {
  id: number;
  image: string;
  heading: string;
  date: string;
  categories: string[];
  paragraph: string;
}

// Define the Button interface
interface ButtonData {
  id: number;
  label: string;
}

// Updated SavedCards interface with string keys
interface SavedCards {
  [key: string]: boolean;
}

// Sample card data
const cardData: Card[] = [
  {
    id: 1,
    image: '/blog1-image.png',
    heading: 'Exploring Software Development Trends',
    date: 'Nov 20, 2024',
    categories: ['Software Development', 'Technology'],
    paragraph: 'This article discusses the latest trends in software development, including advancements in AI and the impact of cloud computing.',
  },
  {
    id: 2,
    image: '/blog2-image.png',
    heading: 'The Future of AI in Technology',
    date: 'Nov 21, 2024',
    categories: ['AI', 'Technology'],
    paragraph: 'An in-depth look into how AI is transforming industries, from automation to machine learning applications.',
  },
  {
    id: 3,
    image: '/blog3-image.png',
    heading: 'The Rise of Cybersecurity',
    date: 'Nov 22, 2024',
    categories: ['Cybersecurity', 'Technology'],
    paragraph: 'Cybersecurity challenges and innovations as digital transformation increases security risks worldwide.',
  },
  {
    id: 4,
    image: '/blog4-image.png',
    heading: 'Green Tech Revolution',
    date: 'Nov 23, 2024',
    categories: ['Green Technology', 'Environment'],
    paragraph: 'Examining how technology is driving sustainability with renewable energy and eco-friendly innovations.',
  },
  {
    id: 5,
    image: '/blog5-image.png',
    heading: 'Understanding Blockchain Beyond Cryptocurrency',
    date: 'Nov 24, 2024',
    categories: ['Blockchain', 'Finance'],
    paragraph: 'Exploring practical applications of blockchain technology in various sectors beyond cryptocurrencies.',
  },
  {
    id: 6,
    image: '/blog6-image.png',
    heading: '5G Networks and Their Impact',
    date: 'Nov 25, 2024',
    categories: ['5G', 'Technology'],
    paragraph: 'How 5G technology is reshaping communication, enabling faster data transfer and advanced IoT solutions.',
  },
  {
    id: 7,
    image: '/blog7-image.png',
    heading: 'The Evolution of Remote Work',
    date: 'Nov 26, 2024',
    categories: ['Workplace', 'Technology'],
    paragraph: 'A look into the future of work, including remote work trends and innovations in collaboration tools.',
  },
  {
    id: 8,
    image: '/blog8-image.png',
    heading: 'EdTech Innovations Transforming Education',
    date: 'Nov 27, 2024',
    categories: ['Education', 'Technology'],
    paragraph: 'The role of technology in reshaping education through e-learning platforms, VR, and AI tutors.',
  },
  {
    id: 9,
    image: '/blog9-image.png',
    heading: 'Advancements in HealthTech',
    date: 'Nov 28, 2024',
    categories: ['Healthcare', 'Technology'],
    paragraph: 'How technology is revolutionizing healthcare with telemedicine, AI diagnostics, and wearable devices.',
  },
  {
    id: 10,
    image: '/blog10-image.png',
    heading: 'Autonomous Vehicles: The Road Ahead',
    date: 'Nov 29, 2024',
    categories: ['Automotive', 'AI'],
    paragraph: 'The progress in autonomous vehicles, challenges in adoption, and their impact on the transportation industry.',
  },
];


// Sample button data
const buttonData: ButtonData[] = [
  { id: 1, label: '#Software Development' },
  { id: 2, label: '#Technology' },
  { id: 3, label: '#AI & ML' },
  { id: 4, label: '#Blockchain' },
  { id: 5, label: '#Data Science' },
  { id: 6, label: '#Business' },
  { id: 7, label: '#Marketing' },
  { id: 8, label: '#Cybersecurity' },
  { id: 9, label: '#Cloud Computing' },
  { id: 10, label: '#FinTech' },
  { id: 11, label: '#Big Data' },
  { id: 12, label: '#IoT' },
  { id: 13, label: '#Design' },
  { id: 14, label: '#Startup' },
  { id: 15, label: '#E-commerce' },
];

const Blogs_Insights = () => {
  // Initialize savedCards with string keys
  const [savedCards, setSavedCards] = useState<SavedCards>({});

  // Handler to toggle save state
  const handleSaveCard = (id: number) => {
    const key = id.toString(); // Convert id to string
    setSavedCards((prevSavedCards) => ({
      ...prevSavedCards,
      [key]: !prevSavedCards[key], // Toggle the saved state
    }));
  };

  return (
    <>
      {/* Header Section */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-screen-xl px-12 py-8 mx-auto flex justify-between items-center p-4">
          {/* Changed text color to white on a dark background */}
          <h1 className="text-4xl mt-8  text-black font-semibold">Insights</h1>

          <div className="flex items-center space-x-6">
            {/* Industry Dropdown */}
            <div className="relative">
              <select
                className=" px-3 py-2 outline-none"
                aria-label="Select Industry"
              >
                <option value="">Industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="health">Health</option>
              </select>
              <svg
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Topic Dropdown */}
            <div className="relative">
              <select
                className=" px-3 py-2  outline-none"
                aria-label="Select Topic"
              >
                <option value="">Topic</option>
                <option value="ai">AI</option>
                <option value="blockchain">Blockchain</option>
                <option value="data">Data</option>
              </select>
              <svg
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
           
          </div>
        </div>
        <div className='border border-b-2 border-black w-full'></div>

      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row py-10 pb-12 space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Left Side: Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 gap-10">
          {cardData.map(({ id, image, heading, date, categories, paragraph }) => (
            <div key={id} className="bg-white transition-all duration-300 transform hover:scale-105 hover:translate-x-2 hover:translate-y-2 px-10 py-10  relative flex flex-col sm:flex-row">
              {/* Card Image */}
              <div className="w-full sm:w-1/3">
                <Image
                width={100}
                height={100}
                  src={image}
                  alt={heading}
                  className="w-60 h-60 object-cover "
                />
              </div>

              {/* Card Content */}
              <div className="w-full p-6 sm:w-2/3 pl-0 sm:pl-4 mt-4 sm:mt-0">
                <h3 className="text-2xl ">{heading}</h3>

                {/* Categories */}
                <div className="mt-2 flex flex-wrap space-x-2">
                <p className="text-lg mt-3 text-gray-500">{date}</p>

                  {categories.map((category, index) => (
                    <span
                      key={`${id}-category-${index}`}
                      className="text-gray-300  bg-zinc-500 px-3 py-1 mt-4 text-sm "
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Paragraph */}
                <p className="mt-3 text-gray-700">{paragraph}</p>
              </div>

              {/* Save Icon */}
              <div
                className={`absolute top-4 right-4 p-2 rounded-full cursor-pointer ${
                  savedCards[id.toString()] ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
                onClick={() => handleSaveCard(id)}
                aria-label="Save Card"
                title={savedCards[id.toString()] ? 'Unsave' : 'Save'}
              >
                <svg
                  className={`w-6 h-6 ${savedCards[id.toString()] ? 'text-white' : 'text-gray-600'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {savedCards[id.toString()] ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Buttons and Box */}
<div className="w-full lg:w-1/3 space-y-6">
  {/* Buttons */}
  <div className="grid items-end justify-end grid-cols-2 gap-4 ">
    {buttonData.map(({ id, label }) => (
      <button
        key={id}
        className="w-fit bg-transparent border-2 border-gray-500 text-gray-500 py-2 px-3  hover:bg-gray-500 hover:text-white transition-colors"
      >
        {label}
      </button>
    ))}
  </div>

  {/* Box with Image */}
  <div
    className="relative lg:mt-20 h-96 bg-cover bg-center"
    style={{ backgroundImage: 'url("/box-image.png")' }}
  >
    {/* Overlay Content */}
    <div className="absolute py-12 px-8 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-start text-white px-8 py-6">
        <div className="border-2 border-gray-400 w-fit px-6 py-3 text-lg mb-4 rounded">
          Must Read
        </div>
        <h2 className="text-xl font-semibold">
          Artificial Intelligence in Modern Learning Systems
        </h2>
        <p className="mt-2 mb-4">
          Almost every college and university has moved towards e-learning platforms due to the pandemic. The intro
        </p>
        <button className="border-2 border-white w-fit px-8 py-3 bg-transparent flex items-center hover:bg-white hover:text-black transition-colors">
          Read More
          <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
        </button>
      </div>
    </div>
  </div></div>
</div>

      {/* Pagination */}
      <div className="flex justify-center pt-6 space-x-2">
        <button className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors">1</button>
        <button className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors">2</button>
        <button className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors">3</button>
        <button className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Blogs_Insights;
