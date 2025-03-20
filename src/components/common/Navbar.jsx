// Import the React library
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Functional component named Header
const NavBar = () => {
    const navbarRef = useRef();
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const pathName = usePathname();
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            let visibleHeader = isHeaderVisible;

            if (currentScrollPosition > 20) {
                visibleHeader = prevScrollPosition > currentScrollPosition;
            }

            setPrevScrollPosition(currentScrollPosition);
            setIsHeaderVisible(visibleHeader);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPosition, isHeaderVisible]);

    const [showNavBar, setshowNavBar] = useState(false);
    const toggleshowNavBar = () => {
        return setshowNavBar(!showNavBar);
    };
    useEffect(() => {
        if (showNavBar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showNavBar]);
    return (
        <>
            <div
                ref={navbarRef}
                id="nav_bar"
                className={`fixed top-0 navbg w-full duration-500  z-[200]  ${isHeaderVisible
                    ? "translate-y-0"
                    : "-translate-y-full"
                    }`}
            >
                < div className="flex justify-between items-center w-full max-w-[1232px] px-4 mx-auto py-3 md:py-3.5">
                    <div className="flex items-center gap-5">
                        <Link aria-label="navbar" href={"/"} className="flex gap-3 relative z-[400]">
                            <Image
                                loading='lazy'
                                className="w-[154px] md:w-[200px] lg:w-[250px] h-[31px] md:h-[41px] lg:h-[51px]"
                                height={80}
                                width={80}
                                src="/assets/images/common/svg/main-logo.svg"
                                alt="page-main-logo"
                            />
                        </Link>
                    </div>

                </div>
            </div>

        </>
    );
};

export default NavBar;
