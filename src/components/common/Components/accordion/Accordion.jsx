"use client";
import { useEffect, useRef, useState } from "react";
import Icons from "../../Icons";

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = "",
  titleClassName = "",
  contentClassName = "",
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef();

  const toggleAccordion = () => {
    if (!onClick) {
      setIsOpen(!isOpen);
    } else {
      onClick();
    }
  };
  useEffect(() => {
    setIsOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <button
        className={`w-full flex justify-between items-center text-left font-medium focus:outline-none transition-all duration-300 ease-linear  pl-4 pr-5 py-5 sm:py-6 lg:py-7 cursor-pointer hover:bg-dark-gray/50 ${
          isOpen ? "bg-dark-gray" : "bg-transparent"
        } ${titleClassName}`}
        onClick={toggleAccordion}>
        <span
          className={`text-base !leading-[106%] ${
            isOpen ? " text-dark-orange" : "text-light-gray"
          }`}>
          {title}
        </span>

        <Icons
          className={`w-3 h-2  transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          stroke={`transition-all duration-300 ${
            isOpen ? "stroke-dark-orange" : "stroke-light-gray"
          }`}
          icon={"accordion-arrow"}
        />
      </button>
      <div
        className={`overflow-hidden bg-dark-gray transition-all duration-300 ease-in-out border-t  border-solid ${
          isOpen ? "border-transparent" : "border-[rgba(109,110,112,0.5)]"
        }`}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight || "1000"}px`
            : "0px",
        }}>
        <div
          ref={contentRef}
          className={`pl-4 pr-5 pb-5 sm:pb-6 lg:pb-7 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
