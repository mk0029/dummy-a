import React from 'react'

const Heading = ({ maxWidth, center, right, className, children, aosdelay, aostime }) => {
    return (
        <h2 data-aos={`${aostime}`} data-aos-delay={`${aosdelay}`}
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
    ${center ? 'mx-auto text-center' : right ? 'ml-auto mr-0 text-right' : ' ml-0 mr-auto text-left'}
      text-2xl font-bold text-light-black cormorantSemiBold leading-[116%]
      
`}
        >
            {children}
        </h2>
    )
}

export default Heading