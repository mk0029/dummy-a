import Image from 'next/image'
import React from 'react'
import TagParagraph from '../common/TagParagraph'
import Heading from '../common/Heading'


const DoGood = () => {
    return (
        <>
            <div className='flex flex-wrap justify-between bg-[#fffbec] lg:flex-nowrap'>

                {/* Text Section */}
                <div className='flex flex-col items-start justify-center px-[20px] md:px-[60px] lg:px-[120px] w-full lg:w-1/2 text-left'>
                    <div>
                        <TagParagraph>OUR PURPOSE</TagParagraph>
                        {/* <h3 className='text-[#9D7F19] text-lg md:text-[12px] mb-2'></h3> */}
                        {/* <h2 className='mb-4 text-2xl md:text-[24px]'></h2> */}
                        <Heading>Do good. Do well.</Heading>
                    </div>

                    <div>
                        <p className=' lg:w-[357px] text-left '>
                            Lodha is committed to elevating the living experience,
                            emphasising the importance of creating a positive impact
                            on the environment and society.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className='flex flex-col md:flex-row w-full lg:w-1/2 gap-[15px] md:gap-0 px-[20px] md:px-0'>
                    <div className='relative w-full md:w-[50%] lg:w-[28vw] h-[50vh] md:h-screen'>
                        <Image
                            src={"/assets/images/homepage/webp/lodhaImg.webp"}
                            alt="Lodha"
                            className='object-cover w-full h-full'
                            width={400}
                            height={400}
                        />
                        <button
                            className='absolute bottom-[30px] left-[20px] text-white underline text-[1.25rem]'>
                            Our Story
                        </button>
                    </div>

                    <div className='relative w-full md:w-[50%] lg:w-[28vw] h-[50vh] md:h-screen'>
                        <Image
                            src={"/assets/images/homepage/webp/lodhaImgSec.webp"}
                            alt="Lodha Second"
                            className='object-cover w-full h-full'
                            width={400}
                            height={400}
                        />
                        <button
                            className='absolute bottom-[30px] left-[20px] text-white underline text-[1.25rem]'>
                            Our Impact
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DoGood
