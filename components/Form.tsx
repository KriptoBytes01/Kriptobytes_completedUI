"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  organization: string;
  jobTitle: string;
  helpText: string;
  agreeToPolicy: boolean;
}

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    organization: "",
    jobTitle: "",
    helpText: "",
    agreeToPolicy: false,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormValues((prevValues) => ({ ...prevValues, agreeToPolicy: !prevValues.agreeToPolicy }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formValues.agreeToPolicy) {
      console.log("Form submitted:", formValues);
      // Clear form values after submission
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        organization: "",
        jobTitle: "",
        helpText: "",
        agreeToPolicy: false,
      });
    } else {
      alert("Please agree to the privacy policy.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-transparent w-full max-w-5xl gap-8 md:flex md:space-x-8 px-4 md:px-8 lg:px-16">
        {/* Left Side - Heading and Paragraph */}
        <div className="md:w-1/2 w-full justify-center items-center mb-8 md:mb-0">
          <h2 className="text-5xl text-gray-200 mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-xl">
            {`We're `}here to help! Fill in your details, and {`we'll`} get back to you as soon as possible.
          </p>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 w-full space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formValues.firstName}
              onChange={handleInputChange}
              className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formValues.lastName}
              onChange={handleInputChange}
              className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
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
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="organization"
              placeholder="Organization / Institute*"
              value={formValues.organization}
              onChange={handleInputChange}
              className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title*"
              value={formValues.jobTitle}
              onChange={handleInputChange}
              className="border-b-2 bg-transparent text-gray-200 placeholder-gray-500 focus:border-teal-500 outline-none py-4"
            />
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
            className="bg-teal-500 text-white px-8 py-3 flex items-center justify-center space-x-2 hover:bg-teal-600 transition"
          >
            <span>Submit</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
