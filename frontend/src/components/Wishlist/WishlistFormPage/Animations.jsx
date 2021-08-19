import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web';

function Animations(){

    const container = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('../../../images/animation.json') // the path to the animation json
        })
    },[])
    return(
        <div className="container" ref={container}></div>
    );
}

export default Animations;