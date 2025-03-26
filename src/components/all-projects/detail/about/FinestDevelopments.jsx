import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";

const FinestDevelopments = ({ content }) => {
  return (
    <div className="container sm:pb-4 pt-12 md:pb-8 md:pt-14 lg:py-[60px]">
      <Heading>{content?.title || "lorem ipsum dolor"}</Heading>
      <div className="flex w-full mt-6 lg:mt-8 -mx-2">
        {content?.collection?.map((obj, index) => (
          <div key={index} className="w-4/12 px-2 group cursor-pointer">
            <AnimatedImageCard
              key={index}
              src={obj.image}
              width={374}
              height={285.48}
              disableAnimation
              scaling
            />
            <Paragraph variant="secondary" className="mt-2.5 md:mt-4">
              {obj.title}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinestDevelopments;
