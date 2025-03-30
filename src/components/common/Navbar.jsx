"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo, useCallback } from "react";
import Icons from "./Icons";
import MobileNav from "./MobileNav";
import SearchNav from "./SearchNav";
import OurProject from "./OurProject";
import EnquireCall from "./EnquireCall";
import outSideClickHandler from "@/utils/outSideClickHandler";

const NavBar = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showNavBar, setShowNavBar] = useState(false);
  const [searchNavBar, setSearchNavBar] = useState(false);
  const [ourProject, setOurProject] = useState(false);
  const [showEnquire, setShowEnquire] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const pathName = usePathname();

  // Ensure component is mounted before rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const navDropRef = outSideClickHandler(() => {
    setOurProject(false);
  });
  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;
    setIsHeaderVisible(
      currentScrollPosition < prevScrollPosition || currentScrollPosition < 20
    );
    setPrevScrollPosition(currentScrollPosition);
  }, [prevScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (showNavBar || searchNavBar || ourProject || showEnquire) {
      document.body.classList.add("overflow-clip");
    } else {
      document.body.classList.remove("overflow-clip");
    }
    return () => document.body.classList.remove("overflow-clip");
  }, [showNavBar, searchNavBar, ourProject, showEnquire]);

  if (!isMounted) return null; // Avoid hydration mismatch

  return (
    <div className="relative">
      <div
        id="nav_bar"
        className={`fixed top-0 border-b-[0.6px]  ${
          showNavBar || searchNavBar || ourProject
            ? "border-light-gray"
            : "border-transparent"
        } ${
          searchNavBar ? "navWhite" : "navbg"
        } backdrop-blur-md  w-full duration-500 z-[500] ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex justify-between items-center w-full max-w-[1232px] px-4 mx-auto py-[18px] lg:py-5">
          <div className="flex items-center gap-12">
            <Link
              aria-label="Home"
              href="/"
              className="flex gap-3 relative z-[400]">
              <Image
                src="/assets/images/homepage/webp/nav-logo.webp"
                height={20}
                width={163}
                className="w-[163px]"
                alt="Website Logo"
                unoptimized
              />
            </Link>
            <div className="hidden lg:flex xl:ps-6 gap-11">
              <Link
                className=" uppercase text-white text-sm leading-none duration-300 hover:text-white before:absolute hover:before:w-full relative before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-white before:-bottom-[23px] before:left-0"
                href="/our-story">
                Our Story
              </Link>
              <Link
                className=" uppercase text-white text-sm leading-none duration-300 hover:text-white before:absolute hover:before:w-full relative before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-white before:-bottom-[23px] before:left-0"
                href="/our-impact">
                Our Impact
              </Link>
              <p
                onClick={() => {
                  setOurProject(!ourProject), setSearchNavBar(false);
                }}
                className="uppercase text-white flex gap-1 text-sm leading-none duration-300 hover:text-white before:absolute hover:before:w-full relative before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-white before:-bottom-[23px] before:left-0">
                Our Projects
                <span
                  className={`transform transition-transform ms-2 ${
                    ourProject ? "-rotate-180" : "rotate-0"
                  }`}>
                  <Icons icon={"downArrow"} />
                </span>
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-7">
            <Link
              onClick={() => setShowEnquire(!showEnquire)}
              className="uppercase text-white text-sm group leading-none duration-300  flex items-center"
              href="/">
              <span className="me-1">
                {" "}
                <Icons icon="editLine" />
              </span>
              Enquire
            </Link>
            <Link
              target="_blank"
              className="uppercase text-white text-sm leading-none duration-300 "
              href="https://api.whatsapp.com/send/?phone=%2B917718893537&text=Hi&type=phone_number&app_absent=0">
              chat
            </Link>
            <Link
              onClick={() => {
                setSearchNavBar(!searchNavBar), setOurProject(false);
              }}
              className="uppercase text-white text-sm leading-none duration-300  group items-center flex"
              href="/">
              <span className="me-1">
                {" "}
                <Icons icon="search" />
              </span>
              Search
            </Link>
          </div>
          <div className="lg:hidden flex">
            <span
              onClick={() => {
                setSearchNavBar(!searchNavBar), setShowNavBar(false);
              }}
              className="me-1">
              {" "}
              <Icons className={"w-6 h-6"} icon="search" />
            </span>
            <span
              onClick={() => {
                setShowNavBar(!showNavBar),
                  setSearchNavBar(false),
                  setOurProject(false);
              }}
              className="me-1">
              {" "}
              {showNavBar ? (
                <Icons icon="cross" />
              ) : (
                <Icons icon="menuToggel" />
              )}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          showNavBar ? "left-0" : "left-full"
        } z-[499] transition-all lg:hidden duration-300 fixed top-0 h-full w-full backdrop-blur-[12px] navpopup`}>
        <MobileNav
          setShowNavBar={setShowNavBar}
          setOurProject={setOurProject}
          setShowEnquire={setShowEnquire}
        />
      </div>

      <div
        className={`${
          searchNavBar ? "left-0 lg:top-0" : "left-full lg:-top-[120vh]"
        } duration-300 fixed z-[499] transition-all lg:left-0 h-full w-full backdrop-blur-[12px] navpopup navpopupwhite`}>
        <SearchNav
          searchNavBar={searchNavBar}
          setSearchNavBar={setSearchNavBar}
          setOurProject={setOurProject}
        />
      </div>
      <div
        ref={navDropRef}
        className={`${
          ourProject ? "top-0" : "-top-[120vh]"
        } hidden lg:block  duration-300 fixed z-[499] transition-all overflow-clip lg:left-0 h-[620px] w-full backdrop-blur-[12px] navpopup`}>
        <OurProject setOurProject={setOurProject} />
      </div>
      <div
        className={`${
          showEnquire ? "scale-100" : "scale-0"
        } duration-200 fixed z-[600] transition-all left-0 top-0 h-full w-full backdrop-blur-[12px] navpopup`}>
        <EnquireCall setShowEnquire={setShowEnquire} />
      </div>
    </div>
  );
};

export default NavBar;
