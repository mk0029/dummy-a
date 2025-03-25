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
    <div className="container pt-12 sm:pt-14 md:pt-16 lg:pt-20">
      <Heading className="md:mt-1 mb-2 md:mb-2.5">Downloads</Heading>
      {DOWNLOAD_LIST.map((item, index) => (
        <Accordion
          onClick={() => setIsOpen(isOpen === index ? -1 : index)}
          key={index}
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
      ))}
    </div>
  );
};

export default Downloads;
