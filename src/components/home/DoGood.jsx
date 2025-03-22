"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import Link from "next/link";
import Icons from "../common/Icons";

gsap.registerPlugin(ScrollTrigger);

const DoGood = () => {
    const overlayRef1 = useRef(null); // First image overlay
    const overlayRef2 = useRef(null); // Second image overlay
    const sectionRef = useRef(null); // Section reference for scroll trigger

    useEffect(() => {
        gsap.to([overlayRef1.current, overlayRef2.current], {
            width: "0%",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
                // markers: true,
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-wrap justify-between bg-light-orange lg:flex-nowrap py-12">

            <div className="flex flex-col items-start justify-center md:items-end px-[20px] md:px-[60px] lg:px-[120px] xl:pe-[160px] w-full lg:w-1/2 text-left">
                <div className="lg:max-w-[357px]">
                    <div data-aos="fade-up">
                    <TagParagraph>OUR PURPOSE</TagParagraph>
                    </div>
                    <Heading aosdelay={"150"} aostime={"fade-up"} className={"pt-1 pb-2.5"}>Do good. Do well.</Heading>
                    <Paragraph aosdelay={"300"} aostime={"fade-up"}>
                        Lodha is committed to elevating the living experience,
                        emphasising the importance of creating a positive impact
                        on the environment and society.
                    </Paragraph>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full lg:w-[54%] gap-6 md:gap-0 px-5 md:min-h-screen overflow-clip md:px-0 pt-7 lg:pt-0">
                <div className="relative w-full md:w-[50%] group lg:w-[28vw] lg:h-[50vh] md:min-h-screen">
                    <div className="relative overflow-clip group">
                        <span
                            ref={overlayRef1}
                            className="block w-full h-full bg-light-orange absolute top-0 right-0"
                        ></span>
                        <Image
                            src={"/assets/images/homepage/webp/lodhaImg.webp"}
                            alt="Lodha"
                            className="object-cover hidden md:flex group-hover:scale-105 duration-300 w-full h-full"
                            width={400}
                            height={400}
                        />
                        <Image
                            src={"/assets/images/homepage/webp/mobilelodhaimg.webp"}
                            alt="Lodha"
                            className="object-cover md:hidden group-hover:scale-105 duration-300 w-full h-full"
                            width={400}
                            height={400}
                        />
                    </div>
                    <Link href={"/"} className="absolute flex items-center gap-2 bottom-8 cormorantRegular left-[20px] text-white underline text-[1.25rem]">
                        Our Story <span className="group-hover:translate-x-2 duration-300"><Icons icon={"leftarrow"} /></span>
                    </Link>
                </div>


                <div className="relative w-full md:w-[50%] lg:w-[28vw] group lg:h-[50vh] md:min-h-screen overflow-hidden">
                    <div className="relative overflow-clip group">

                        <span
                            ref={overlayRef2}
                            className="block w-full h-full bg-light-orange absolute top-0 right-0"
                        ></span>
                        <Image
                            src={"/assets/images/homepage/webp/our-impact-story.webp"}
                            alt="Lodha Second"
                            className="object-cover w-full hidden md:flex group-hover:scale-105 duration-300 h-full"
                            width={400}
                            height={400}
                        />
                        <Image
                            src={"/assets/images/homepage/webp/lodhaImgSec.webp"}
                            alt="Lodha Second"
                            className="object-cover w-full md:hidden group-hover:scale-105 duration-300 h-full"
                            width={400}
                            height={400}
                        />
                    </div>
                    <Link href={"/"} className="absolute flex items-center gap-2 bottom-8 cormorantRegular left-[20px] text-white underline text-[1.25rem]">
                        Our Impact <span className="group-hover:translate-x-2 duration-300"><Icons icon={"leftarrow"} /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoGood;
