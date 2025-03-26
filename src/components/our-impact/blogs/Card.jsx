import AnimatedImageCard from "@/components/common/Components/AnimatedImageCard";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";

const Card = ({ authors = [], src, children, url }) => {
  return (
    <div className="flex flex-col h-full">
      <AnimatedImageCard
        className="!aspect-[1.39]  max-sm:max-h-[186px]"
        width={272}
        height={269}
        disableAnimation
        scaling
        src={src || "/assets/images/impact/webp/blogs-img-1.webp"}
      />
      <div className="border border-solid border-dark-orange flex flex-col grow justify-between border-t-0">
        <Heading
          className="mt-2.5 pt-5 !text-start px-3.5 line-clamp-2"
          variant="secondary">
          {children}
        </Heading>
        <div className="px-3.5 pb-6">
          <Paragraph className="mt-1 sm:mt-2.5 !text-start max-sm:!text-xs">
            by&nbsp;
            {authors.map((author, index) => (
              <span key={`${index}`}>
                {author} {authors.length - 1 !== index && <>&&nbsp;</>}
              </span>
            ))}
          </Paragraph>
          {url && (
            <Paragraph className="mt-5 !text-dark-orange underline !text-start cursor-pointer hover:!text-light-black transition-all duration-300 ease-linear">
              Read More
            </Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
