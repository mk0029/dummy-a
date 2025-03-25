import AnimatedHero from "@/components/common/Components/AnimatedHero";
import CommonQueries from "./CommonQueries";
import DetailCards from "./DetailCards";
import ExploreNeighbourhood from "./ExploreNeighbourhood";
import Gallery from "./Gallery";
import LinkBar from "./LinkBar";
import RouteInfo from "@/components/common/Components/RouteInfo";
import FinestDevelopments from "./FinestDevelopments";
import Plans from "./plans/Plans";

const DetailMain = () => {
  return (
    <div>
      <AnimatedHero
        mainImage="/assets/images/allproject/webp/details-hero.webp"
        className=" lg:max-h-[665px]"
      />
      <LinkBar />
      <DetailCards />
      <Gallery />
      <Plans />
      <ExploreNeighbourhood />
      <FinestDevelopments />
      <CommonQueries />
      <RouteInfo />
    </div>
  );
};

export default DetailMain;
