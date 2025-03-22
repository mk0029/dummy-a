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
    fontFamily: "Futura BK BT",
    color: "#313131",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
    fontSize: "14px",
    fontFamily: "Futura BK BT",
    color: "#6d6e70",
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #E0E0E0",
    backgroundColor: state.isSelected ? "#F8F8F8" : "white",
    color: "black",
    padding: "10px",
    fontFamily: "Futura BK BT",
    color: "#6d6e70",
  }),
};

const EnquireCall = ({ setShowEnquire }) => {
  const countryOptions = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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

    if (!formData.city.trim()) errors.city = "City is required.";

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
      <div className="max-w-md mx-auto px-4 lg:px-6 py-7 lg:pt-10 lg:pb-6 bg-white shadow-lg relative">
        <span onClick={() => setShowEnquire(false)} className="cursor-pointer absolute top-2.5 end-2.5 lg:top-4 lg:end-4">
          <Icons className={"fill-dark-orange"} icon={"cricleCross"} />
        </span>
        <h2 className="text-center text-2xl cormorantBold text-dark-orange">Request a Call Back</h2>
        <form className="mt-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="w-full border-b text-light-gray border-light-gray text-sm py-1 lg:py-2 p-2 outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="E-Mail ID*"
            className="w-full text-light-gray border-b border-light-gray text-sm py-1 lg:py-2 p-2 outline-none mt-3"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}

          <div className="w-full border-b border-light-gray mt-3">
            <label className="px-2 text-xs text-light-gray">Select Country*</label>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              styles={customStyles}
              isSearchable
              className="w-full"
            />
          </div>

          <div className="w-full border-b border-light-gray mt-3">
            <label className="px-2 text-xs text-light-gray">Enter City*</label>
            <input
              type="text"
              name="city"
              placeholder="City*"
              className="w-full text-light-gray text-sm py-1 lg:py-2 p-2 outline-none"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}

          <div className="w-full border-b border-light-gray mt-3">
            <label className="px-2 text-xs text-light-gray">Select Country*</label>
            <PhoneInput
              country={selectedCountry?.value.toLowerCase()}
              disableDropdown
              enableLongNumbers
              inputClass="w-full text-sm outline-none !border-none !pl-0"
              containerClass="w-full"
              buttonClass="hidden"
              className="w-full text-light-gray text-sm p-2 py-0 outline-none"
              inputProps={{ placeholder: "Enter Mobile Number*" }}
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}

          <label className="flex items-center mt-4">
            <input type="checkbox" className="mr-2" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span className="text-gray-600 text-sm">
              By checking this box, you agree to our <Link href="https://www.lodhagroup.com/privacy-policy" className="text-dark-orange">Privacy Policy</Link> and consent to be contacted with relevant updates.
            </span>
          </label>
          {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}

          <div className="flex justify-center">
            <button type="submit" className="mt-5 text-dark-orange text-center text-sm font-normal py-1.5 lg:py-2.5 px-8 border border-dark-orange hover:text-white hover:bg-dark-orange">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EnquireCall;