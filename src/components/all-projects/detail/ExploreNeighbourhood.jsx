import Cta from '@/components/common/Components/Cta'
import Heading from '@/components/common/Components/Heading'
import Paragraph from '@/components/common/Components/Paragraph'
import React from 'react'

const ExploreNeighbourhood = () => {
    return (
        <div className="bg-dark-gray py-[60px]">
            <div className='container'>
                <Heading className='!text-start'>Explore the neighbourhood</Heading>
                <Paragraph className='!text-start !max-w-[500px] mt-2.5 ' leading='!leading-100'>
                    A magnificent 17-acre estate ensconced in the Mumbai Mile, the glittering stretch that comprises some of Mumbai’s finest residences, business spaces, and luxury hotels, Lodha World Towers embodies global standards in luxury. The Lodha Place is an elegant boulevard lined with palm trees, boasting some of the finest gourmet restaurants and a secondary route to give you seamless connectivity to the Sea Link, SOBO, and other suburbs.
                </Paragraph>
                <Cta className='mt-[50px]'>View Location</Cta>
            </div>
        </div>
    )
}

export default ExploreNeighbourhood