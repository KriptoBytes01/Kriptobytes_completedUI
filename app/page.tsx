
import GetServiceSlide from "@/components/getServiceSlide";
import NewsService from "@/components/NewsService";
import JoinLeaders from "@/components/JoinLeaders";
import OurClients from "@/components/OurClients";
import Blogs from "@/components/Blogs";
import GlobalPresence from "@/components/GlobalPresence";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Stories from "@/components/Stories";

export default function Home() {
  
  return (
    <>
      <div>
        {/* Header Section */}
        <HomePage />
        
        {/* Services Section */}
        <GetServiceSlide />

        {/* newsroom section */}

        <NewsService />
    
 {/* Stories Section */}
<Stories />

{/* Leaders section */}

<JoinLeaders />

{/* clients section */}

<OurClients />

{/* blogs section */}

<Blogs />

{/* Global presence section */}

<GlobalPresence />

{/* submit form */}

<Form />

{/* footer */}

<Footer />

      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps= async() =>{

// }