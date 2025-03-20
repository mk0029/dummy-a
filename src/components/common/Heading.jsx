import React from 'react'

const Heading = ({ maxWidth, center, right, className, children }) => {
    return (
        <h2
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
    ${center ? 'mx-auto text-center' : right ? 'ml-auto mr-0 text-right' : ' ml-0 mr-auto text-left'}
      text-2xl font-bold text-light-black cormorantBold leading-[116%]
      
`}
        >
            {children}
        </h2>
    )
}

export default Heading