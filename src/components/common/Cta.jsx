import React from "react";

const Cta = ({ className = "", text }) => {
  return (
    <button
      className={` py-2.5 px-5 border border-dark-orange text-dark-orange text-sm bg-white ${className}`}
    >
      {text}
    </button>
  );
};

export default Cta;
