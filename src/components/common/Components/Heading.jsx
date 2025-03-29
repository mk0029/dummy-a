import React from "react";

const Heading = ({
  children,
  className = "",
  variant = "default",
  aos = "",
  aosDelay = "",
  aosPlacement = "",
  aosOffset = "",
  aosDuration = "",
}) => {
  const variants = {
    default: "text-2xl leading-116 max-md:text-xl max-md:leading-120",
    secondary:
      "text-xl leading-140 max-lg:text-base max-md:text-sm max-lg:leading-125",
  };
  return (
    <h2
      data-aos={aos}
      data-aos-delay={aosDelay}
      data-aos-duration={aosDuration}
      data-aos-easing="linear"
      data-aos-anchor-placement={aosPlacement}
      data-aos-offset={aosOffset}
      className={`${className}  text-light-black cormorantSemiBold text-center ${variants[variant]}`}>
      {children}
    </h2>
  );
};

export default Heading;
