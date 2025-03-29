"use client";
import { useState, useEffect } from "react";
import RouteInfo from "../common/Components/RouteInfo";
import MainProject from "./featured-projects/MainProject";
import FilterHero from "./filter-cards/FilterHero";
import { FEATURED_PROJECTS } from "@/utils/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "../common/Components/Heading";
const AllProjects = () => {
  const [inputVal, setInputVal] = useState("");
  const [filteredArray, setFilteredArray] = useState(FEATURED_PROJECTS);
  const [beforeSearchFilteredArray, setBeforeSearchFilteredArray] =
    useState(FEATURED_PROJECTS);
  const [filters, setFilters] = useState({
    type: "",
    city: [],
    typology: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    console.log("Updated Values:", { inputVal, filters });
  }, [inputVal, filters]); // Logs whenever `inputVal` or `filters` change
  useEffect(() => {
    console.log("Updated Search Value:", inputVal);

    const searchFilteredData = beforeSearchFilteredArray.filter((project) =>
      inputVal
        ? project.title.toLowerCase().includes(inputVal.toLowerCase())
        : true
    );

    setFilteredArray(searchFilteredData);
  }, [inputVal]); // Runs whenever `inputVal` changes

  const handleApplyFilters = () => {
    const filteredData = FEATURED_PROJECTS.filter((project) => {
      const { type, city, typology, minPrice, maxPrice } = filters;

      const matchesType = type
        ? project.projectType.toLowerCase() === type.toLowerCase()
        : true;

      const matchesCity =
        city.length > 0
          ? city.some((c) => c.toLowerCase() === project.location.toLowerCase())
          : true;
      const matchesTypology = typology ? project.typology === typology : true;
      const matchesMinPrice = minPrice
        ? project.price.min >= Number(minPrice)
        : true;
      const matchesMaxPrice = maxPrice
        ? project.price.max <= Number(maxPrice)
        : true;

      return (
        matchesType &&
        matchesCity &&
        matchesTypology &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
    setBeforeSearchFilteredArray(filteredData);
    setFilteredArray(filteredData);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      type: "",
      city: [],
      typology: "",
      minPrice: "",
      maxPrice: "",
    });
    setInputVal("");
    setFilteredArray(FEATURED_PROJECTS);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <FilterHero
        setInputVal={setInputVal}
        setType={(e) => setFilters((prev) => ({ ...prev, type: e }))}
        setCity={(e) => setFilters((prev) => ({ ...prev, city: e }))}
        setTypology={(e) => setFilters((prev) => ({ ...prev, typology: e }))}
        setMinPrice={(e) => setFilters((prev) => ({ ...prev, minPrice: e }))}
        setMaxPrice={(e) => setFilters((prev) => ({ ...prev, maxPrice: e }))}
        handleResetFilters={handleResetFilters}
        handleApplyFilters={handleApplyFilters}
      />
      <div className="py-12 bg-[#F8F8F8]">
        <div className="container">
          <Heading aos="fade-up" aosDuration="400" aosDelay="700">
            Featured Projects
          </Heading>
          <MainProject filteredArray={filteredArray} />
        </div>
      </div>
      <RouteInfo />
    </div>
  );
};

export default AllProjects;
