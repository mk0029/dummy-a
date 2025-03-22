import Link from 'next/link'
import React, { useState } from 'react'
import Icons from './Icons'
import OurProject from './OurProject';

const MobileNav = ({ setOurProject, setShowNavBar, setShowEnquire }) => {
    const [showMobileProject, setShowMobileProject] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <div className='min-h-[calc(100vh-60px)] h-full  pt-16 flex flex-col justify-between overflow-scroll'>
            <div className="flex flex-col px-4 pb-16">
                <Link onClick={() => setShowNavBar(false)} className="uppercase text-white text-sm leading-none duration-300 py-4" href="https://www.lodhagroup.com/our-story">
                    Our Story
                </Link>
                <Link onClick={() => setShowNavBar(false)} className="uppercase text-white text-sm leading-none duration-300 border-t py-4 border-light-gray" href="https://www.lodhagroup.com/esg-sustainablity-environmental-social-governance">
                    Our Impact
                </Link>
                <Link onClick={() => { setShowMobileProject(!showMobileProject) }} className="uppercase text-white w-full justify-between text-sm leading-none duration-300 group py-4 items-center flex border-t border-b border-light-gray" href="/">
                    Our Projects
                    <span className={`transform duration-300 transition-transform ${showMobileProject ? 'rotate-180' : 'rotate-0'}`}>
                    <Icons icon={"downArrow"} /></span>
                </Link>
                <div className={`${showMobileProject ? "max-h-[600px]" : "max-h-0"} overflow-clip   duration-300`}>
                    <OurProject activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                </div>
                <Link onClick={() => setShowNavBar(false)} className="uppercase text-white text-sm leading-none duration-300 group py-4 items-center flex" href="/">
                    Careers
                </Link>
            </div>
            <div className="flex fixed bottom-0 w-full backdrop-blur-md navbg items-center px-6 gap-2 justify-between border-t border-light-gray py-4">
                <Link onClick={() => { setShowNavBar(false), setShowEnquire(true) }} className="uppercase text-white text-sm group leading-none duration-300 flex items-center" href="/">
                    <span className="me-1"> <Icons icon="editLine" /></span>
                    Enquire
                </Link>
                <Link onClick={() => setShowNavBar(false)} className="uppercase text-white text-sm leading-none duration-300 group items-center flex" href="/">
                    <span className="me-1"> <Icons icon="phoneCall" /></span>
                    Call
                </Link>
                <Link target='_blank' className="uppercase text-white text-sm leading-none duration-300" href="https://api.whatsapp.com/send/?phone=%2B917718893537&text=Hi&type=phone_number&app_absent=0">
                    chat
                </Link>

            </div>
        </div>
    )
}

export default MobileNav