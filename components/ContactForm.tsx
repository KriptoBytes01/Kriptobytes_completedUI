"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const countries = [
  "United States", "Canada", "India", "United Kingdom", "Australia", "Germany", 
  "France", "China", "Japan", "Brazil", "South Africa", "Russia", "Italy",
  "Mexico", "Singapore", "Netherlands", "Spain", "Sweden", "Switzerland", "New Zealand",
];

const servicesList = [
  "Web Development",
  "Mobile App Development",
  "Cloud Services",
  "Cybersecurity",
  "Data Analytics",
  "UI/UX Design",
  "IT Support",
  "DevOps Services",
  "Blockchain Solutions",
  "AI & Machine Learning",
];

interface FormValues {
  firstName: string;
  country: string;
  email: string;
  contactNo: string;
  organization: string;
  services: string[];
  helpText: string;
  agreeToPolicy: boolean;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    country: "",
    email: "",
    contactNo: "",
    organization: "",
    services: [],
    helpText: "",
    agreeToPolicy: false,
  });

  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormValues((prevValues) => ({ ...prevValues, agreeToPolicy: !prevValues.agreeToPolicy }));
  };

  const handleServiceChange = (service: string) => {
    setFormValues((prevValues) => {
      const services = prevValues.services.includes(service)
        ? prevValues.services.filter((s) => s !== service)
        : [...prevValues.services, service];
      return { ...prevValues, services };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formValues.agreeToPolicy) {
      console.log("Form submitted:", formValues);
      setFormValues({
        firstName: "",
        country: "",
        email: "",
        contactNo: "",
        organization: "",
        services: [],
        helpText: "",
        agreeToPolicy: false,
      });
    } else {
      alert("Please agree to the privacy policy.");
    }
  };

  return (

    <>

    <div className="inset-0 bg-black absolute text-white"></div>

    <div className="min-h-screen  relative bg-black text-gray-200 flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-6xl text-start mb-12">
        <h2 className="text-5xl mt-10 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-300">
          {`We're`} here to help! Fill in your details, and {`we'll`} get back to you as soon as possible.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-transparent p-8 space-y-6 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formValues.firstName}
            onChange={handleInputChange}
            className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
          />
          <select
            name="country"
            value={formValues.country}
            onChange={handleSelectChange}
            className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country} value={country} className="bg-black text-gray-200">
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formValues.email}
            onChange={handleInputChange}
            className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
          />
          <input
            type="text"
            name="contactNo"
            placeholder="Contact No*"
            value={formValues.contactNo}
            onChange={handleInputChange}
            className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="organization"
            placeholder="Organization / Institute*"
            value={formValues.organization}
            onChange={handleInputChange}
            className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
          />
          <div className="relative">
            <div
              className="flex items-center justify-between border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4 cursor-pointer"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              <span>
                {formValues.services.length > 0
                  ? formValues.services.join(", ")
                  : "Select Services"}
              </span>
              <FontAwesomeIcon icon={servicesDropdownOpen ? faCaretUp : faCaretDown} />
            </div>
            {servicesDropdownOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-black text-white rounded shadow-lg z-10">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800"
                  >
                    <input
                      type="checkbox"
                      checked={formValues.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="h-4 w-4"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <textarea
          name="helpText"
          placeholder="How can we help you?"
          value={formValues.helpText}
          onChange={handleInputChange}
          className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-2 w-full"
          rows={3}
        ></textarea>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="agreeToPolicy"
            checked={formValues.agreeToPolicy}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-teal-600 bg-transparent border border-gray-300 rounded focus:ring-teal-500"
          />
          <label htmlFor="agreeToPolicy" className="text-gray-400 text-sm">
            I agree to the privacy policy
          </label>
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white  px-8 py-3 flex items-center justify-center space-x-2 hover:bg-teal-600 transition"
        >
          <span>Submit</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-6" />
        </button>

        <p className="text-lg mt-6 text-balance lg:text-balance py-4 space-y-2">By Clicking {`"Submit"`}, I agree to receive promotional and marketing material.

Note: We will treat any information you submit with us as confidential.

Please read our Privacy Policy for additional information.</p>
      </form>
      
    </div>
    </>
  );
};

export default ContactForm;
