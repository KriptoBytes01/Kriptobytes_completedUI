import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Blogs_Main() {
  const blogData = [
    {
      title: "Blog Post 1",
      date: "Nov 12, 2024",
      image: "/blog1.png",  // Image path
      category: "Software Development",
      description: "This is a brief description of the first blog post. It gives a preview of the content.",
      author: "John Doe",
      readTime: "5 min read"
    },
    {
      title: "Blog Post 2",
      date: "Nov 13, 2024",
      image: "/blog2.png",  // Image path
      category: "Technology",
      description: "This is a brief description of the second blog post. It gives a preview of the content.",
      author: "Jane Smith",
      readTime: "4 min read"
    },
    {
      title: "Blog Post 3",
      date: "Nov 14, 2024",
      image: "/blog3.png",  // Image path
      category: "Web Development",
      description: "This is a brief description of the third blog post. It gives a preview of the content.",
      author: "Alice Johnson",
      readTime: "6 min read"
    },
  ];

  return (
    <>
      <div className="bg-slate-950 py-12 px-20 brightness-100">
        <div className="flex flex-col sm:flex-row items-center justify-between px-8 mb-12 mt-10">
          <h1 className="text-white text-4xl sm:text-5xl">Blogs</h1>
          <button className="bg-transparent border border-white text-white px-6 py-3 mt-4 sm:mt-0 flex items-center space-x-2 rounded-md">
            <span>View All</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* Image and Content Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 px-8 mb-16">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-transparent shadow-lg w-full md:w-[48%] lg:w-[32%] flex flex-col border-t-2 border-gray-300 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 hover:translate-y-2"
            >
              <div className="text-gray-500 px-4 py-2 text-sm">{blog.date}</div>

              <div className="relative">
                <Image
                  width={400}
                  height={300}
                  src={blog.image} 
                  alt={`Blog ${index + 1} image`}
                  className="w-full h-[250px] md:h-[300px] object-cover border-r-2 transition-all duration-300 hover:scale-105 hover:translate-x-2 hover:translate-y-2 hover:brightness-110 hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>
              </div>

              {/* Blog Content */}
              <div className="px-4 py-6 flex flex-col justify-between items-start h-full">
                <div className="text-lg sm:text-lg bg-zinc-800 w-fit px-4 py-1 text-gray-100 mb-6">
                  {blog.category}
                </div>
                
                <h2 className="text-white text-xl font-semibold mb-4">{blog.title}</h2>
                
                <p className="text-white mb-4">{blog.description}</p>

                <div className="flex items-center justify-between w-full text-sm text-gray-400">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>
                
                <button className="text-teal-300 text-sm flex items-center space-x-2 mt-6">
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
