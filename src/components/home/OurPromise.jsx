import React from 'react'
import TagParagraph from '../common/TagParagraph'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import Image from 'next/image'

const OurPromise = ({image, tag,heading,para}) => {
  return (
    <div className='bg-white max-w-[1170px] mx-auto px-4 xl:px-0 py-10 lg:py-12 xl:py-16'>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center">
        <div className="w-full md:w-1/2">
          <Image src={image} alt='promis' width={497} height={296} className='w-full' />
        </div>
        <div className="w-full md:w-1/2 max-w-[550px] lg:max-w-[280px] xl:max-w-[310px] lg:mx-auto">
          <TagParagraph>{tag}</TagParagraph>
          <Heading className={'pt-1 pb-2.5'}>{heading}</Heading>
          <Paragraph>{para}</Paragraph>
          <button className=' mt-5
                        text-[#9D7F19] 
                        text-center 
                        text-[0.875rem] 
                        font-normal 
                        leading-[1.25rem] 
                        py-2.5
                        px-5
                        border 
                        border-[#9D7F19] 
                        transition-all 
                        duration-[0.5s] 
                        ease-[cubic-bezier(0.075,0.82,0.165,1)] 
                        capitalize 
                        cursor-pointer hover:text-white hover:bg-dark-orange'>
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurPromise