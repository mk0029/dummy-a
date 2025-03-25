import AnimatedHero from "../common/Components/AnimatedHero";
import RouteInfo from "../common/Components/RouteInfo";
import Blogs from "./blogs/Blogs";
import CreatingImpact from "./CreatingImpact";
import Downloads from "./downloads/Downloads";
import EnvironmentalImpact from "./environmental-impact/EnvironmentalImpact";
import Partnerships from "./partnerships/Partnerships";
import Recognition from "./recognition/Recognition";
import SocialImpact from "./social-impact/SocialImpact";

const ImpactMain = () => {
  return (
    <div>
      <AnimatedHero mainImage="/assets/images/impact/webp/hero-background.webp" />
      <CreatingImpact />
      <EnvironmentalImpact />
      <SocialImpact />
      <Recognition />
      <Partnerships />
      <Downloads />
      <Blogs />
      <RouteInfo />
    </div>
  );
};

export default ImpactMain;
