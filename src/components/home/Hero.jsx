// "use client";
// import React from "react";

// const Hero = () => {
//   return (
//     <div className="w-full min-h-screen flex justify-center items-center">
//       <div className="relative w-full aspect-video">
//         <iframe
//           className="w-full h-full min-h-screen"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ&mute=1&rel=0&modestbranding=1&showinfo=0&controls=1"
//           title="YouTube Video"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen 
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Hero;


"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <div className="relative w-full aspect-video">
        {/* Mobile Video */}
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

        {/* Desktop YouTube Video */}
        <iframe
          className="w-full h-full object-cover hidden md:block"
          src="https://www.youtube.com/embed/sBfD87qRyd8?autoplay=1&mute=1&loop=1&controls=1&rel=0&playlist=sBfD87qRyd8&enablejsapi=1"
          title="Lodha - Creators of the World's Finest Developments"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
