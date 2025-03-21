import React from 'react'

const Paragraph = ({ maxWidth, children, center, right, className }) => {
    return (
        <p
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
    ${center ? 'mx-auto text-center' : right ? 'ml-auto mr-0 text-right' : ' ml-0 mr-auto text-left'}
      text-sm font-normal text-light-gray !leading-143
      
`}
        >
            {children}
        </p>
    )
}

export default Paragraph