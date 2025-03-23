import {
  FOOTER_LINK_LIST,
  FOOTER_SECOND_LINK_LIST,
  SOCIAL_MEDIA_LINK_LIST,
} from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <div className="bg-light-orange">
      <div className="max-w-[1170px] mx-auto px-4 xl:px-0 py-10">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2.5 w-1/2 lg:max-w-[250px]">
              {FOOTER_LINK_LIST.map((obj, i) => {
                return (
                  <Link
                    className="text-xs text-light-gray md:text-sm lg:text-base hover:text-dark-orange !leading-130 relative before:absolute hover:before:w-full duration-300 before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-red-500 before:bottom-0 before:left-0"
                    key={i}
                    href={obj.url}>
                    {obj.title}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-2.5 w-1/2 lg:max-w-[250px]">
              {FOOTER_SECOND_LINK_LIST.map((obj, i) => {
                return (
                  <Link
                    className="text-xs text-light-gray md:text-sm lg:text-base hover:text-dark-orange !leading-130 relative before:absolute hover:before:w-full duration-300 before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-red-500 before:bottom-0 before:left-0"
                    key={i}
                    href={obj.url}>
                    {obj.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:max-w-[300px] pt-10 lg:pt-0">
            <Image
              src={"/assets/images/homepage/webp/logo.webp"}
              height={40}
              width={300}
              alt="pageog"
            />
            <div className="flex gap-3 mt-10">
              {SOCIAL_MEDIA_LINK_LIST.map((obj, i) => {
                return (
                  <Link
                    className="hover:opacity-50 duration-300"
                    key={i}
                    href={obj.url}>
                    <Icons icon={obj.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
