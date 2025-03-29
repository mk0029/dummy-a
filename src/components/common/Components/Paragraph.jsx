import React from "react";

const Paragraph = ({
  className = "",
  variant = "default",
  children,
  leading = "!leading-142",
  aos = "",
  aosDelay = "",
  aosPlacement = "",
  aosOffset = "",
  aosDuration = "",
}) => {
  const variants = {
    default: "text-sm",
    secondary: "text-[14.4px] futuraMedium",
  };
  return (
    <p
      data-aos={aos}
      data-aos-delay={aosDelay}
      data-aos-duration={aosDuration}
      data-aos-easing="linear"
      data-aos-anchor-placement={aosPlacement}
      data-aos-offset={aosOffset}
      className={`${className} ${leading} text-light-gray text-center ${variants[variant]}`}>
      {children}
    </p>
  );
};

export default Paragraph;
