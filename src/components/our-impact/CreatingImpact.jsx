import React from "react";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";
import Cta from "../common/Components/Cta";

const CreatingImpact = () => {
  return (
    <div>
      <div className="container py-12 sm:py-14 md:py-16 lg:py-20 text-center">
        <div className="max-w-[800px] mx-auto">
          <Heading className="lg:mt-1">Creating a positive impact</Heading>
          <Paragraph className="mt-2.5">
            Lodha is committed to using our capabilities to create a positive
            impact on the environment and on society. As we grow, so does the
            scale of the impact we can make.
          </Paragraph>
          <Paragraph className="mt-2.5">
            Through <span className="font-bold">Lodha Foundation</span>, we
            implement transformative projects in Education, Women's Empowerment,
            and Sustainable Urbanization to create a positive impact on the
            environment and society. We are recognized in global sustainability
            indices and rankings for the work we do to address the environmental
            impact of the built environment.
          </Paragraph>
          <Cta className="mt-5"> Our Integrated Report</Cta>
        </div>
      </div>
    </div>
  );
};

export default CreatingImpact;
