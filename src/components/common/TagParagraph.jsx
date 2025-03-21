import React from 'react'

const TagParagraph = ({ maxWidth, center, right, className, children }) => {
    return (
        <p
            style={{ maxWidth: `${maxWidth && maxWidth}px` }}
            className={`${className && className} 
            ${center ? 'mx-auto text-center ' : right ? 'ml-auto mr-0 text-right' : 'ml-0 mr-auto text-left'}
              text-xs font-bold text-dark-orange cormorantBold
              
        `}
        >
            {children}
        </p>
    )
}

export default TagParagraph