"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const AnimatedHero = () => {
  const [isLayerVisible, setIsLayerVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLayerVisible(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full max-sm:min-h-[700px] sm:aspect-[2.38] relative overflow-hidden">
      <Image
        src="/assets/images/impact/webp/hero-background.webp"
        alt="hero background"
        width={1440}
        height={605}
        quality={100}
        sizes="100vw"
        className="absolute top-0 left-0 h-full w-full object-cover max-sm:object-[-890px] object-center"
      />
      <div
        className={`absolute h-1/2 w-full z-10 bg-light-orange bottom-0 left-0 no-default-smooth transition-all ease-linear duration-700 ${
          isLayerVisible ? "translate-y-0" : "translate-y-full"
        }`}></div>
    </div>
  );
};

export default AnimatedHero;
