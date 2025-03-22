"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";
import Link from "next/link";
import Icons from "./Icons";

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "0px solid #6D6E70",
    borderBottom: "1px solid #F8F8F8",
    borderRadius: "0px",
    padding: "0px",
    boxShadow: "none",
    fontSize: "14px",
    backgroundColor: "white",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "6px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    fontSize: "14px",
  }),
};

const EnquireCall = ({ setShowEnquire }) => {
  const countryOptions = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isClient, setIsClient] = useState(false);
  
  // Single useState for Name, Email, and Phone
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsClient(true);
    setSelectedCountry(countryOptions.find((c) => c.value === "IN") || countryOptions[0]);
  }, []);

  if (!isClient) return null;

  const validateForm = () => {
    let errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email address.";
    
    if (!formData.phone.trim()) errors.phone = "Mobile number is required.";
    else if (formData.phone.length < 10) errors.phone = "Mobile number must be at least 10 digits.";

    if (!agree) errors.agree = "You must accept the privacy policy.";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ ...formData, selectedCountry, agree });
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen w-full h-full flex justify-center items-center px-4">
      <div className="max-w-md mx-auto px-6 py-10 pb-6 bg-white shadow-lg rounded-lg relative">
        <span onClick={() => setShowEnquire(false)} className="cursor-pointer absolute top-4 end-4">
          <Icons className={"fill-dark-orange"} icon={"cricleCross"} />
        </span>
        <h2 className="text-center text-2xl cormorantBold text-dark-orange">Request a Call Back</h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="w-full border-b text-light-gray border-light-gray text-sm p-2 outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="E-Mail ID*"
            className="w-full text-light-gray border-b border-light-gray text-sm p-2 outline-none mt-3"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          {/* Country Select */}
          <div className="w-full border-b border-light-gray mt-3">
            <label htmlFor="" className="px-2 text-xs text-light-gray">Select Country*</label>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              styles={customStyles}
              isSearchable
              className="w-full"
            />
          </div>

          {/* Mobile Number */}
          <div className="w-full border-b border-light-gray mt-3">
            <PhoneInput
              country={selectedCountry?.value.toLowerCase()}
              disableDropdown
              enableLongNumbers
              inputClass="w-full text-sm p-2 outline-none !border-none !pl-0"
              containerClass="w-full"
              buttonClass="hidden"
              inputProps={{
                placeholder: "Enter Mobile Number*",
              }}
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}

          {/* Checkbox */}
          <label className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="text-gray-600 text-sm">
              By checking this box, you agree to our <Link href="https://www.lodhagroup.com/privacy-policy" className="text-dark-orange underline">Privacy Policy</Link> and consent to be contacted with relevant updates.
            </span>
          </label>
          {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="mt-5 text-dark-orange text-center text-[0.875rem] font-normal !leading-116 py-2.5 px-5 border border-[#9D7F19] transition-all duration-[0.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)] capitalize cursor-pointer hover:text-white hover:bg-dark-orange">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EnquireCall;
