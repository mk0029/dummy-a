import React from "react";

const JoinUs = () => {
  return (
    <div className="container common-space-y  text-center">
      <div className="max-w-[800px] mx-auto">
        <Heading aos="fade-up" aosDuration="400" className="lg:mt-1">
          Join Us in Building the Future
        </Heading>
        <Paragraph
          aos="fade-up"
          aosDuration="400"
          aosDelay="250"
          className="mt-2.5">
          At Sheetal Builders, we believe that every home tells a story. Our
          mission is to create lasting spaces that inspire and enrich lives.
          Together, we are shaping the future of urban living—one strong,
          sustainable, and trusted development at a time.
        </Paragraph>

        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
          <Cta className="mt-5"> Contact Us</Cta>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
