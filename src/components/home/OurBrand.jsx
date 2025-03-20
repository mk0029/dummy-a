import React from 'react'
import TagParagraph from '../common/TagParagraph'
import Image from 'next/image'

const OurBrand = () => {
    return (
        <div className='bg-white max-w-[1170px] mx-auto px-4 xl:px-0 py-10 lg:py-12'>
            <TagParagraph center >Our Brand</TagParagraph>
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-14 lg:gap-20 xl:gap-24 md:justify-center pt-10 md:pt-12">
                <Image src={"/assets/images/homepage/webp/logo.webp"} className='object-contain object-bottom' alt='lodha-luxury' height={24} width={200} />
                <Image src={"/assets/images/homepage/webp/lodha-luxury-logo.webp"} alt='lodha-luxury' height={70} width={200} />
                <Image src={"/assets/images/homepage/webp/palavanew.webp"} className='object-contain object-bottom' alt='lodha-luxury' height={45} width={200} />
            </div>
        </div>
    )
}

export default OurBrand