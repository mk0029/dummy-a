"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="relative w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
