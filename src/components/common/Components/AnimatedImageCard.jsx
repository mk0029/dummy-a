"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AnimatedImageCard = ({
  className = "",
  width = 273,
  height = 368,
  src = "",
  alt = "",
  onceTrue = false,
  threshold = 0.8,
  disableAnimation,
  layerSpeed = 400,
  layerCoverPercent = 90,
  scaling = false,
}) => {
  const [animatedLayerVisible, setAnimatedLayerVisible] = useState(true);
  const cardRef = useRef();
  const aspectRatio = width / height;

  useEffect(() => {
    if (!disableAnimation) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio >= threshold) {
            setAnimatedLayerVisible(false);
          } else {
            if (!onceTrue) {
              setAnimatedLayerVisible(true);
            }
          }
        },
        { threshold: threshold }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full relative overflow-hidden group ${className}`}
      style={{ aspectRatio }}>
      {/* Animated Layer */}
      {!disableAnimation && (
        <div
          className={`absolute top-0 w-full h-full bg-white z-50 right-0 transition-transform ease-linear ${
            !animatedLayerVisible ? "translate-x-full" : ""
          }`}
          style={{
            transitionDuration: `${layerSpeed}ms`,
            width: `${layerCoverPercent}%`,
          }}></div>
      )}

      {/* Image */}
      <Image
        className={`object-cover object-center absolute top-0 left-0 transition-all duration-300 ease-linear ${
          scaling && "group-hover:scale-110"
        }`}
        src={src}
        alt={alt || "animated pict. content"}
        fill
        quality={100}
        sizes="100vw"
      />
    </div>
  );
};

export default AnimatedImageCard;
