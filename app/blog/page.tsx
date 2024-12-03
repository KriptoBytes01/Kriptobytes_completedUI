import Blogs_Insights from "@/components/Blogs_Insights";
import Blogs_Main from "../../components/Blogs_Main";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
   <>
   <div className="bg-black">
    <div className="absolute  min-h-screen  text-white inset-0 bg-cover bg-center bg-no-repeat bg-opacity-30" 
      style={{
        backgroundImage: "url('/blogs-bg.png')",
        filter: "brightness(0.8) contrast(1.1)",
      }}></div> 
      
      <div className="container relative mx-auto flex flex-col items-start justify-center min-h-screen px-6 lg:px-28 py-8 md:py-16 text-white">
        <h4 className="text-2xl mb-4">Blogs</h4>
        <h1 className="text-3xl font-serif md:text-5xl mb-8 leading-tight text-balance animate-slide-in">
        Tech So Good,<br />
        Even The Superheroes {`Can’t`} Resist
        </h1>
        
        </div>
      </div>
      <Blogs_Main />
      <Blogs_Insights />
      <Footer />
     
   </>
  );
}
