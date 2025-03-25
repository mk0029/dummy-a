import React from "react";

const Paragraph = ({ className = "", variant = "default", children, leading = '!leading-142' }) => {
  const variants = {
    default: "text-sm",
    secondary: "text-[14.4px] futuraMedium",
  };
  return (
    <p
      className={`${className} ${leading} text-light-gray text-center ${variants[variant]}`}>
      {children}
    </p>
  );
};

export default Paragraph;
