import Cta from '@/components/common/Components/Cta'
import Heading from '@/components/common/Components/Heading'
import Paragraph from '@/components/common/Components/Paragraph'
import Image from 'next/image'
import React from 'react'

const ExploreNeighbourhood = () => {
    return (
        <div className="bg-dark-gray py-[60px]">
            <div className='container'>
                <div className="flex max-lg:flex-col max-lg:gap-8 justify-between">
                    <div className="mt-0">
                        <Heading className='!text-start'>Explore the neighbourhood</Heading>
                        <Paragraph className='!text-start lg:!max-w-[500px] mt-2.5 ' leading='!leading-100'>
                            A magnificent 17-acre estate ensconced in the Mumbai Mile, the glittering stretch that comprises some of Mumbai’s finest residences, business spaces, and luxury hotels, Lodha World Towers embodies global standards in luxury. The Lodha Place is an elegant boulevard lined with palm trees, boasting some of the finest gourmet restaurants and a secondary route to give you seamless connectivity to the Sea Link, SOBO, and other suburbs.
                        </Paragraph>
                        <Cta className='mt-[50px] max-lg:hidden'>View Location</Cta>
                    </div>
                    <div className="max-w-[400px] w-full">
                        <div className="flex justify-between items-center mb-[20px] min-h-6">
                            <div className="flex gap-3.5 w-full">
                                <Image
                                    src="/assets/images/allproject/png/road.png"
                                    width={24}
                                    height={24}
                                    alt="road"
                                    quality={100}
                                />
                                <Paragraph>Bandra-Worli Sea Link</Paragraph>
                            </div>
                            <Paragraph className='font-bold text-nowrap'>20 minutes</Paragraph>
                        </div>
                        <div className="flex justify-between items-center mb-[20px] min-h-6">
                            <div className="flex gap-3.5 w-full">
                                <Image
                                    src="/assets/images/allproject/png/airpoart.png"
                                    width={24}
                                    height={24}
                                    alt="airpoart"
                                    quality={100}
                                />
                                <Paragraph> Mumbai International Airport
                                </Paragraph>
                            </div>
                            <Paragraph className='font-bold text-nowrap'>30 minutes</Paragraph>
                        </div>
                        <div className="flex justify-between items-center mb-[20px] min-h-6">
                            <div className="flex gap-3.5 w-full">
                                <Image
                                    src="/assets/images/allproject/png/building.png"
                                    width={24}
                                    height={24}
                                    alt="building"
                                    quality={100}
                                />
                                <Paragraph> Peninsula Corporate Park
                                </Paragraph>
                            </div>
                            <Paragraph className='font-bold text-nowrap'>10 minutes</Paragraph>
                        </div>
                        <div className="flex justify-between items-center mb-[20px] min-h-6">
                            <div className="flex gap-3.5 w-full">
                                <Image
                                    src="/assets/images/allproject/png/shop.png"
                                    width={24}
                                    height={24}
                                    alt="shop"
                                    quality={100}
                                />
                                <Paragraph> Palladium & High Street Phoenix
                                </Paragraph>
                            </div>
                            <Paragraph className='font-bold text-nowrap'>05 minutes</Paragraph>
                        </div>
                        <Paragraph className='!text-start !max-w-[500px] mt-8 lg:mt-14 ' leading='!leading-100'>
                            Note: All distances stated in minutes are estimated travel time on 2-wheelers during normal traffic.
                        </Paragraph>
                        <Cta className='mt-8 lg:hidden'>View Location</Cta>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreNeighbourhood