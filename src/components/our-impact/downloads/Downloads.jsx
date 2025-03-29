"use client";
import { Accordion } from "@/components/common/Components/accordion";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import { DOWNLOAD_LIST } from "@/utils/defaults";
import Link from "next/link";
import { useState } from "react";

const Downloads = () => {
  const [isOpen, setIsOpen] = useState(-1);

  return (
    <div className="container  common-space-t ">
      <Heading
        aos="fade-up"
        aosDuration="400"
        className="md:mt-1 mb-2 md:mb-2.5">
        FAQs
      </Heading>
      {DOWNLOAD_LIST.map((item, index) => (
        <div
          key={index}
          data-aos="fade-down"
          data-aos-delay={`${index + 2}00`}
          data-aos-duration="600">
          <Accordion
            onClick={() => setIsOpen(isOpen === index ? -1 : index)}
            title={item.title}
            defaultOpen={isOpen === index}>
            {item.list &&
              item.list.map((item, index) => (
                <Paragraph className="!text-start" key={index}>
                  <Link
                    target="_blank"
                    rel="noopener"
                    className="hover:text-dark-orange transition-all ease-linear duration-300"
                    href={item.url || "/"}>
                    {item.title}
                  </Link>
                </Paragraph>
              ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Downloads;
