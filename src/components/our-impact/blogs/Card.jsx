import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";

const Card = ({ authors = [], src, children, url }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full aspect-[1.39] relative overflow-hidden group max-sm:max-h-[186px]">
        <Image
          src={src || "/assets/images/impact/webp/blogs-img-1.webp"}
          width={373.99}
          height={268.5}
          quality={100}
          sizes="100vw"
          alt="card content"
          className="absolute top-0 left-0 h-full w-full object-cover object-center group-hover:scale-110 transition-all ease-linear duration-500 select-none pointer-events-none"
        />
      </div>
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
