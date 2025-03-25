"use client";
import { Accordion } from "@/components/common/Components/accordion";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CommonQueries = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(-1);

  const commonQueriesList = [
    {
      title: "Where are Lodha World Towers located?",
      description:
        "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores, and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Lodha World Towers address: Lodha World Towers, Lodha Place, Shankar Rao Naram Path, Worli, Mumbai, Maharashtra 400 013.",
    },
    {
      title:
        "What are the different floor plans and unit plans available at Lodha World Towers?",
      description:
        "Lodha World Towers offers luxury 3, 4 & 5 bed residences in the heart of South Mumbai.",
    },
    {
      title:
        "How well is Lodha World Towers connected to other parts of the city?",
      description:
        "A rare living experience demands the right setting. Lodha World Towers chose the Mumbai mile. The estate offers swift access to prime arterial roads via Lodha Place and a secondary access route gives you access to the Sea Link. This luxury project in Mumbai enjoys seamless connectivity to the city and the suburbs.",
    },
    {
      title:
        "What social and retail infrastructures are present near Lodha World Towers?",
      description:
        "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Bandra-Worli Sea Link ~20 mins Domestic & International Airports ~30 mins Peninsula Corporate Park ~10 mins Palladium & High Street Phoenix ~5 mins",
    },
  ];
  return (
    <div className="container  py-12 sm:py-14 md:py-16 lg:py-20 ">
      <Heading className="!text-start md:mb-2.5">Most common queries</Heading>
      <div className="flex flex-col">
        {commonQueriesList.map((obj, index) => (
          <Accordion
            titleClassName=""
            defaultOpen={activeFaqIndex === index}
            onClick={() =>
              setActiveFaqIndex(activeFaqIndex === index ? -1 : index)
            }
            key={index}
            title={obj.title}>
            <Paragraph className="!text-left lg:pl-3 lg:pr-5">
              {" "}
              {obj.description}
            </Paragraph>
          </Accordion>
        ))}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          <Accordion
            titleClassName=""
            defaultOpen={activeFaqIndex === -2}
            onClick={() => setActiveFaqIndex(activeFaqIndex === -2 ? -1 : -2)}
            title="Lodha World Towers RERA">
            <div className="flex max-md:flex-col-reverse gap-4">
              <Image
                width={135}
                height={135}
                quality={100}
                sizes="100vw"
                className="min-w-[135px] max-h-[135px]"
                src="/assets/images/allproject/details/webp/qr-code.jpg"
                alt="rera-content"
              />
              <Paragraph className="!text-start para-detail-rera max-w-[875px]">
                <span>
                  Lodha World Towers : The project has been registered via
                  MahaRERA registration numbers: P51900008345, P51900008962 and
                  is available on the website{" "}
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://maharera.mahaonline.gov.in">
                    https://maharera.mahaonline.gov.in
                  </Link>
                  &nbsp;under registered projects.
                </span>
                <span>
                  RERA is an iconic act that aims to bring transparency and
                  efficiency in the real estate sector, protect consumers, and
                  fast track dispute resolution. It is an act that promotes good
                  governance in the market, which helps customers get more
                  information about projects and reduces the risk associated
                  with the purchase.
                </span>
                <span>
                  The MahaRERA Registration Number is the mark of integrity, and
                  all new Lodha Group projects are RERA compliant; see a list of
                  our RERA projects here.
                </span>
                To find out more about what is RERA,
                <Link target="_blank" rel="noopener" href="/">
                  &nbsp;Click Here.
                </Link>
              </Paragraph>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQueries;
