import Link from 'next/link'
import React from 'react'
import Icons from './Icons'

const MobileNav = ({ showNavBar }) => {
    return (
        <div className='min-h-[calc(100vh-60px)] flex flex-col justify-between'>
            <div className="flex flex-col px-4">
                <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black py-4" href="/">
                    Our Story
                </Link>
                <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black border-t py-4 border-light-gray" href="/">
                    Our Impact
                </Link>
                <Link className="uppercase text-white w-full justify-between text-sm leading-none duration-300 hover:text-black group py-4 items-center flex border-t border-light-gray" href="/">
                    Our Projects <span className="ms-2.5"><Icons icon={"downArrow"} /></span>
                </Link>
                <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group py-4 items-center flex border-t border-light-gray" href="/">
                    Careers
                </Link>
            </div>
            <div className="flex items-center px-4 gap-2 justify-between border-t border-light-gray py-4">
                <Link className="uppercase text-white text-sm group leading-none duration-300 hover:text-black flex items-center" href="/">
                    <span className="me-1"> <Icons icon="editLine" /></span>
                    Enquire
                </Link>
                <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group items-center flex" href="/">
                    <span className="me-1"> <Icons icon="phoneCall" /></span>
                    Call
                </Link>
                <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black" href="/">
                    chat
                </Link>

            </div>
        </div>
    )
}

export default MobileNav