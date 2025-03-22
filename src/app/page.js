
"use client"
import Footer from "@/components/common/Footer";
import FooterContent from "@/components/common/FooterContent";
import NavBar from "@/components/common/NavBar";
import DoGood from "@/components/home/DoGood";
import Hero from "@/components/home/Hero";
import OurBrand from "@/components/home/OurBrand";
import OurPromise from "@/components/home/OurPromise";
import Slider from "@/components/home/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <EnquireCall />  */}
      <OurPromise colorBg="bg-white" tag="OUR PROMISE" image="/assets/images/homepage/webp/our-promise.webp" heading={
        <>
          Creating the world&apos;s <br /> finest developments
        </>
      } para="Lodha is India&apos;s leading real estate developer, delivering thoughtfully designed, premium properties that shape urban lifestyle. " />
      <DoGood />
      <Slider />
      <OurPromise colorBg="bg-dark-gray" tag="OUR EXPERIENCES" image="/assets/images/homepage/webp/our-experiences.webp" heading="Elevating everyday living" para="We craft a tapestry of experiences designed to enrich your life and elevate your every day, where every moment is a testament to the art of living." />
      <OurBrand />
      <Footer />
      <FooterContent />
    </div>
  );
}
