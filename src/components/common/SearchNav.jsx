import React from 'react';
import Icons from './Icons';
import Link from 'next/link';

const SearchNav = ({ setSearchNavBar }) => {
  return (
    <div className='min-h-[calc(100vh-60px)] flex flex-col mt-10'>
      
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-[840px] mx-auto">

            <span onClick={() => setSearchNavBar(false)} className="absolute bottom-[70px] right-[-100px] cursor-pointer text-white">
              <Icons icon={"cross"} />
            </span>

            <input
              type="text"
              placeholder="What are you looking for?"
              id="searchinput"
              className="w-full h-[59px] border-b text-white placeholder:text-light-gray border-light-gray pl-[10px] pr-12 border-t-0 border-s-0 border-e-0 outline-none"
            />


            <span className="absolute right-4 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-500">
              <Icons className={'w-6 h-6'} icon={"search"} />
            </span>
          </div>
        </div>

        <div className='flex flex-col mt-[15px] items-start w-full max-w-[840px] mx-auto'>
          <p className="uppercase text-white text-base leading-none group futuraLight w-full">
            Quick Links
          </p>
          <div className='flex flex-wrap gap-[40px] mt-5 w-full'>
            <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group futuraLight" href="/">
              About Us
            </Link>
            <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group futuraLight" href="/">
              Careers
            </Link>
            <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group futuraLight" href="/">
              All Projects
            </Link>
            <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group futuraLight" href="/">
              Investor Relations
            </Link>
            <Link className="uppercase text-white text-sm leading-none duration-300 hover:text-black group futuraLight" href="/">
              Blogs
            </Link>
          </div>
        </div>
    
    </div>
  );
}

export default SearchNav;
