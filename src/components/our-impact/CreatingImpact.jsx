import React from "react";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";
import Cta from "../common/Components/Cta";

const CreatingImpact = () => {
  return (
    <div className="container common-space-y  text-center">
      <div className="max-w-[800px] mx-auto">
        <Heading aos="fade-up" aosDuration="400" className="lg:mt-1">
          Building a Legacy of Trust and Excellence
        </Heading>
        <Paragraph
          aos="fade-up"
          aosDuration="400"
          aosDelay="250"
          className="mt-2.5">
          At Sheetal Builders, we are dedicated to crafting not just homes but a
          future of excellence, sustainability, and reliability. As we continue
          to grow, so does our commitment to creating structures that stand the
          test of time, blending innovation with integrity.
        </Paragraph>
        <Paragraph
          aos="fade-up"
          aosDuration="400"
          aosDelay="500"
          className="mt-2.5">
          With every project, we strive to blend innovation with integrity,
          ensuring that each structure stands the test of time. Our approach
          combines modern architecture, eco-friendly solutions, and cutting-edge
          technology, making every space we create a symbol of quality and
          reliability.
        </Paragraph>
        <div data-aos="zoom-in" data-aos-delay="700" data-aos-duration="500">
          <Cta className="mt-5"> Our Integrated Report</Cta>
        </div>
      </div>
    </div>
  );
};

export default CreatingImpact;
