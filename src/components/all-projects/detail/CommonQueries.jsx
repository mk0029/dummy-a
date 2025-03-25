"use client";
import { Accordion } from "@/components/common/Components/accordion";
import Heading from "@/components/common/Components/Heading";
import Paragraph from "@/components/common/Components/Paragraph";
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
        <div className="mt-20">
          <Accordion
            titleClassName=""
            defaultOpen={activeFaqIndex === -2}
            onClick={() => setActiveFaqIndex(activeFaqIndex === -2 ? -1 : -2)}
            title="Lodha World Towers RERA">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              deserunt?
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CommonQueries;
