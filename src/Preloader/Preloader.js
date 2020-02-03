import React from 'react';


const Preloader = ({ height, width, ...userStyles }) => {debugger

    const currentWidth = () => {
        if ( width ) return width
        if ( !width && height ) return 3.65*height
        if ( !width && !height ) return '252px'
    }
    
    const currentHeight = () => {
        if ( height ) return height
        if ( !height && width ) return 0.27*width
        if ( !height && !width ) return '69px'
    }
    const loaderStyle = {
        ...userStyles,
        width: currentWidth(),
        height: currentHeight()
    };
      
    return(
            <svg svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.0" viewBox="0 0 128 35" space="preserve" style={loaderStyle}>
                <g><circle fill="white" cx="17.5" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="900ms" begin="0s" repeatCount="indefinite" keyTimes="0;0.167;0.5;0.668;1" values="0.3;1;1;0.3;0.3"/></g>
                <g><circle fill="white" cx="110.5" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="900ms" begin="0s" repeatCount="indefinite" keyTimes="0;0.334;0.5;0.835;1" values="0.3;0.3;1;1;0.3"/></g>
                <g><circle fill="white" cx="64" cy="17.5" r="17.5"/><animate attributeName="opacity" dur="900ms" begin="0s" repeatCount="indefinite" keyTimes="0;0.167;0.334;0.668;0.835;1" values="0.3;0.3;1;1;0.3;0.3"/></g>
            </svg>
    )
}

export default Preloader;