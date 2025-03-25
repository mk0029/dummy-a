import React from "react";

const Paragraph = ({ className = "", variant = "default", children }) => {
  const variants = {
    default: "text-sm",
    secondary: "text-[14.4px] futuraMedium",
  };
  return (
    <p
      className={`${className}  text-light-gray leading-142 text-center ${variants[variant]}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
