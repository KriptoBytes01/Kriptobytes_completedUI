import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WorldwideOffices from "@/components/WorldwideOffices";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed justify-center items-center"
      style={{ backgroundImage: "url('/contact-bg.png')" }}
    >
        <ContactForm />
        <WorldwideOffices />
      <Footer />
      
    </div>
  );
}
