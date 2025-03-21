"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo, useCallback } from "react";
import Icons from "./Icons";
import MobileNav from "./MobileNav";
import SearchNav from "./SearchNav";

const NavBar = () => {
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [showNavBar, setShowNavBar] = useState(false);
    const [searchNavBar, setSearchNavBar] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const pathName = usePathname();

    // Ensure component is mounted before rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleScroll = useCallback(() => {
        const currentScrollPosition = window.scrollY;
        setIsHeaderVisible(currentScrollPosition < prevScrollPosition || currentScrollPosition < 20);
        setPrevScrollPosition(currentScrollPosition);
    }, [prevScrollPosition]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (showNavBar || searchNavBar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [showNavBar, searchNavBar]);

    if (!isMounted) return null; // Avoid hydration mismatch

    return (
        <div
            id="nav_bar"
            className={`fixed top-0 backdrop-blur-md navbg w-full duration-500 z-[200] ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* <span className="block absolute w-full h-full"></span> */}
            <div className="flex justify-between items-center w-full max-w-[1232px] px-4 mx-auto py-3 md:py-4 lg:py-5">
                <div className="flex items-center gap-12">
                    <Link aria-label="Home" href="/" className="flex gap-3 relative z-[400]">
                        <Image
                            src="/assets/images/homepage/webp/nav-logo.webp"
                            height={20}
                            width={163}
                            className="w-[163px]"
                            alt="Website Logo"
                            unoptimized
                        />
                    </Link>
                    <div className="hidden lg:flex gap-11">
                        <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black" href="/">
                            Our Story
                        </Link>
                        <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black" href="/">
                            Our Impact
                        </Link>
                        <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group items-center flex" href="/">
                            Our Projects <span className="ms-2.5"><Icons icon={"downArrow"} /></span>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-7">
                    <Link className="uppercase text-white text-sm group leading-none duration-300 hover:text-black flex items-center" href="/">
                        <span className="me-1"> <Icons icon="editLine" /></span>
                        Enquire
                    </Link>
                    <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black" href="/">
                        chat
                    </Link>
                    <Link onClick={() => setSearchNavBar(!showNavBar)} className="uppercase text-white text-sm leading-none duration-300 hover:text-black group items-center flex" href="/">
                        <span className="me-1"> <Icons icon="search" /></span>
                        Search
                    </Link>
                </div>
                <div className="lg:hidden flex">
                    <span className="me-1"> <Icons className={"w-6 h-6"} icon="search" /></span>
                    <span onClick={() => setShowNavBar(!showNavBar)} className="me-1"> <Icons icon="menuToggel" /></span>
                </div>
            </div>
            {showNavBar ? <MobileNav showNavBar={showNavBar} /> : null}
            {searchNavBar ? <SearchNav searchNavBar={searchNavBar} setSearchNavBar={setSearchNavBar} /> : null}
        </div>
    );
};

export default NavBar;
