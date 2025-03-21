import { PROJECT_ALL_DATA_LIST } from '@/utils/helper'
import Link from 'next/link'
import Icons from './Icons'

const OurProject = ({ setOurProject }) => {
  return (
    <div className='min-h-[calc(100vh-50px)] flex flex-col px-4 pt-16 mt-10'>
      <div className="relative w-full max-w-[840px] mx-auto">
        <span onClick={() => setOurProject(false)} className="absolute -top-8 right-0 lg:-right-10 xl:-right-24 cursor-pointer text-white">
          <Icons icon={"cricleCross"} />
        </span>
        <div className="grid grid-cols-[55%_45%] lg:grid-cols-[25%_25%_50%]">
          
          {PROJECT_ALL_DATA_LIST.map((obj, i) => (
            <div key={i}>
              <h2 className="text-xl font-medium mb-4 text-white">{obj.heading}</h2>
              <div className="space-y-2.5">
                {obj.projects.map((data, index) => (
                  <div key={index} className='group'>
                    <Link
                      href={data.link}
                      target={data.external ? "_blank" : "_self"}
                      rel={data.external ? "noopener noreferrer" : ""}
                      className="text-wide-gray text-base lg:text-base group-hover:text-dark-orange !leading-130 relative before:absolute hover:before:w-full duration-300 before:duration-300 transition-all max-w-max before:w-0 before:h-0.5 before:bg-red-500 before:bottom-0 before:left-0"
                    >
                      {data.title}
                    </Link>
                    {data.location && <span className={"text-wide-gray group-hover:text-dark-orange duration-300 block text-xs"}>{data.location}</span>}
                  </div>
                ))}
                <Link href={"/"} className='underline mt-8 block text-dark-orange hover:text-white duration-300'>{obj.view}</Link>
              </div>
            </div>
          ))}
          <div className="relative hidden lg:block max-h-max w-full">
            <input
              type="text"
              placeholder="Search a project name or location"
              id="searchinput"
              className="w-full text-sm futuraLight ps-5 pe-10 rounded-[20px] py-2 bg-wide-black/20 text-white outline-none"
            />
            <span className="absolute right-2 top-1/2 transform cursor-pointer -translate-y-1/2 text-gray-500">
              <Icons className={'w-6 h-6'} icon={"search"} />
            </span>
          </div>
        </div>


      </div>

    </div>
  )
}

export default OurProject