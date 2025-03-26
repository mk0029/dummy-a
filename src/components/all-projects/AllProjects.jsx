import Heading from "../common/Components/Heading";
import RouteInfo from "../common/Components/RouteInfo";
import MainProject from "./featured-projects/MainProject";
import FilterHero from "./filter-cards/FilterHero";

const AllProjects = () => {
  return (
    <div>
      <FilterHero />
      <div className="py-12 bg-[#F8F8F8]">
        <div className="container">
          <Heading>Featured Projects</Heading>
          <MainProject />
        </div>
      </div>
      <RouteInfo />
    </div>
  );
};

export default AllProjects;
