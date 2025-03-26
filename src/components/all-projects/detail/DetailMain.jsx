"use client";
import AnimatedHero from "@/components/common/Components/AnimatedHero";
import RouteInfo from "@/components/common/Components/RouteInfo";
import { minifyPath } from "@/utils/defaults";
import { FEATURED_PROJECTS } from "@/utils/projects";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AboutMain from "./about/AboutMain";
import LinkBar from "./LinkBar";
import NotAvailable from "../NotAvailable";

const DetailMain = () => {
  const pathname = usePathname();
  const [filteredObject, setFilteredObject] = useState({});

  useEffect(() => {
    if (!pathname) return;
    const segments = pathname.split("/").filter(Boolean);
    const area = segments[1] || null;
    const property = segments[2] || null;
    console.log("Extracted Slugs → Area:", area, "Property:", property);
    if (property) {
      const filtered = FEATURED_PROJECTS.filter(
        (project) => minifyPath(project.title) === property
      );
      setFilteredObject(filtered[0]);
    }
  }, [pathname]);
  useEffect(() => {
    console.log(filteredObject);
    console.log(filteredObject?.details?.image);
  }, [filteredObject]);

  return (
    <div>
      <AnimatedHero
        mainImage={filteredObject?.details?.image}
        className="lg:max-h-[665px]"
      />
      <LinkBar />
      {!filteredObject?.details?.about ? (
        <NotAvailable />
      ) : (
        <AboutMain aboutDetails={filteredObject?.details?.about} />
      )}

      <RouteInfo />
    </div>
  );
};

export default DetailMain;
