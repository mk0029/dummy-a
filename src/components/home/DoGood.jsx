"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TagParagraph from "../common/TagParagraph";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

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

            <div className="flex flex-col items-start justify-center md:items-end px-[20px] md:px-[60px] lg:px-[120px] w-full lg:w-1/2 text-left">
                <div className="lg:max-w-[357px]">
                    <TagParagraph>OUR PURPOSE</TagParagraph>
                    <Heading className={"pt-1 pb-2.5"}>Do good. Do well.</Heading>
                    <Paragraph>
                        Lodha is committed to elevating the living experience,
                        emphasising the importance of creating a positive impact
                        on the environment and society.
                    </Paragraph>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full lg:w-[51%] gap-[15px] md:gap-0 px-5 md:min-h-screen overflow-clip md:px-0 pt-2.5 lg:pt-0">

                <div className="relative w-full md:w-[50%] lg:w-[28vw] h-[50vh] md:min-h-screen">
                    <div className="relative overflow-hidden group">

                        <span
                            ref={overlayRef1}
                            className="block w-full h-full bg-light-orange absolute top-0 right-0"
                        ></span>
                        <Image
                            src={"/assets/images/homepage/webp/lodhaImg.webp"}
                            alt="Lodha"
                            className="object-cover group-hover:scale-105 duration-300 w-full h-full"
                            width={400}
                            height={400}
                        />
                    </div>
                    <button className="absolute bottom-[30px] futuraRegular left-[20px] text-white underline text-[1.25rem]">
                        Our Story
                    </button>
                </div>


                <div className="relative w-full md:w-[50%] lg:w-[28vw] h-[50vh] md:min-h-screen">
                    <div className="relative overflow-hidden group">

                        <span
                            ref={overlayRef2}
                            className="block w-full h-full bg-light-orange absolute top-0 right-0"
                        ></span>
                        <Image
                            src={"/assets/images/homepage/webp/our-impact-story.webp"}
                            alt="Lodha Second"
                            className="object-cover w-full group-hover:scale-105 duration-300 h-full"
                            width={400}
                            height={400}
                        />
                    </div>
                    <button className="absolute bottom-[30px] futuraRegular left-[20px] text-white underline text-[1.25rem]">
                        Our Impact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoGood;
