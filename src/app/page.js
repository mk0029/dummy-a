import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import DoGood from "@/components/home/DoGood";
import Hero from "@/components/home/Hero";
import OurBrand from "@/components/home/OurBrand";
import OurPromise from "@/components/home/OurPromise";
import Slider from "@/components/home/Slider";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <OurPromise tag="OUR PROMISE" ttiel="" image="/assets/images/homepage/webp/our-promise.webp" heading={
        <>
          Creating the world's <br /> finest developments
        </>
      } para="Lodha is India’s leading real estate developer, delivering thoughtfully designed, premium properties that shape urban lifestyle. " />
      <DoGood />
      <Slider />
      <OurPromise tag="OUR EXPERIENCES" ttiel="" image="/assets/images/homepage/webp/our-experiences.webp" heading="Elevating everyday living" para="We craft a tapestry of experiences designed to enrich your life and elevate your every day, where every moment is a testament to the art of living." />
      <OurBrand />
      <Footer />
    </div>
  );
}
