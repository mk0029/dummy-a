
"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <div className="relative w-full aspect-video">
        <video
          className="w-full min-h-screen h-full object-cover block md:hidden"
          src="/assets/videos/food12.mp4"
          loop
          preload="auto"
          playsInline
          webkit-playsinline="true"
          muted
          autoPlay
        ></video>

        <iframe
          className="w-full h-full max-lg:min-h-screen object-cover hidden md:block"
          src="https://www.youtube.com/embed/sBfD87qRyd8?autoplay=1&mute=1&loop=1&controls=1&rel=0&playlist=sBfD87qRyd8&enablejsapi=1"
          title="Lodha - Creators of the World's Finest Developments"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
