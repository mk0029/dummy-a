import React from "react";
import Heading from "../common/Components/Heading";
import Paragraph from "../common/Components/Paragraph";

const NotAvailable = () => {
  return (
    <div className="container h-[400px] flex justify-center items-center flex-col">
      <Heading>Content Not Available for this Card.</Heading>
      <Paragraph className="max-w-[800px] mt-3" variant="secondary">
        We're sorry, but there is no content available for this section. Please
        check back later or explore other options.
      </Paragraph>
    </div>
  );
};

export default NotAvailable;
