import React from 'react';
import Icons from './Icons';
import Link from 'next/link';

const SearchNav = ({ setSearchNavBar }) => {
  return (
    <div className='min-h-[calc(100vh-60px)] pt-16 flex flex-col px-4 mt-10'>

          <div className="relative w-full max-w-[840px] mx-auto">

            <span onClick={() => setSearchNavBar(false)} className="absolute bottom-[70px] right-0 lg:-right-10 xl:-right-24 cursor-pointer text-white">
              <Icons icon={"cricleCross"} />
            </span>

           <div className="relative w-full lg:w-[88%]">
           <input
              type="text"
              placeholder="What are you looking for?"
              id="searchinput"
              className="w-full h-[59px] border-b text-lg font-medium text-white placeholder:text-light-gray border-light-gray pl-[10px] pr-12 border-t-0 border-s-0 border-e-0 outline-none"
            />


            <span className="absolute right-0 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-500">
              <Icons className={'w-6 h-6'} icon={"search"} />
            </span>
           </div>
          </div>

        <div className='flex flex-col mt-6 items-start w-full max-w-[840px] mx-auto'>
          <p className="capitalize text-white futuraLight text-base leading-none group futuraLight w-full">
            Quick Links
          </p>
          <div className='flex flex-wrap gap-x-8 gap-y-3 mt-4 w-full'>
            <Link className="capitalize text-white futuraLight text-sm leading-none duration-300 hover:text-black group futuraLight" href="https://www.lodhagroup.com/our-story">
              About Us
            </Link>
            <Link className="capitalize text-white futuraLight text-sm leading-none duration-300 hover:text-black group futuraLight" href="https://www.lodhagroup.com/hr/why-lodha">
              Careers
            </Link>
            <Link className="capitalize text-white futuraLight text-sm leading-none duration-300 hover:text-black group futuraLight" href="https://www.lodhagroup.com/all-projects">
              All Projects
            </Link>
            <Link className="capitalize text-white futuraLight text-sm leading-none duration-300 hover:text-black group futuraLight" href="https://www.lodhagroup.com/investor-relations">
              Investor Relations
            </Link>
            <Link className="capitalize text-white futuraLight text-sm leading-none duration-300 hover:text-black group futuraLight" href="https://www.lodhagroup.com/blogs">
              Blogs
            </Link>
          </div>
        </div>
    
    </div>
  );
}

export default SearchNav;
