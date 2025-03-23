import React from "react";

const Cta = ({ className = "", children, type = "button" }) => {
  return (
    <button
      type={type}
      className={`py-2.5 px-5 border border-dark-orange text-dark-orange text-sm bg-white hover:text-white hover:bg-dark-orange cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Cta;
