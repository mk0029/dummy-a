"use client";
import DoGood from "@/components/home/DoGood";
import Hero from "@/components/home/Hero";
import OurBrand from "@/components/home/OurBrand";
import OurPromise from "@/components/home/OurPromise";
import Slider from "@/components/home/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <Hero />
      {/* <EnquireCall />  */}
      <OurPromise
        colorBg="bg-white"
        tag="OUR commitment"
        image="/assets/images/homepage/webp/our-promise.webp"
        heading={<>Strong and Reliable Structures</>}
        para="As builders, our commitment to providing
strong and reliable structures is at the
forefront of everything we do. We take
pride in using only the highest quality
materials and utilizing the latest building
techniques to ensure that our structures
are built to last"
      />
      <DoGood />
      <Slider />
      <OurPromise
        colorBg="bg-dark-gray"
        tag="dedication and attention"
        image="/assets/images/homepage/webp/our-experiences.webp"
        heading="Commitment to Excellence in Everything"
        para="In short, our building strength and trust in
our clients is a reflection of our
commitment to excellence in everything
we do. Whether we are working on a small
project or a large-scale development.
"
      />
      <OurBrand />
    </div>
  );
}
