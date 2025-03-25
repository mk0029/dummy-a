import AnimatedHero from "@/components/common/Components/AnimatedHero";
import CommonQueries from "./CommonQueries";
import DetailCards from "./DetailCards";
import LinkBar from "./LinkBar";
import RouteInfo from "@/components/common/Components/RouteInfo";

const DetailMain = () => {
  return (
    <div>
      <AnimatedHero className=" lg:max-h-[665px]" />
      <LinkBar />
      <DetailCards />
      <CommonQueries />
      <RouteInfo />
    </div>
  );
};

export default DetailMain;
