import AnimatedHero from "../common/Components/AnimatedHero";
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
      <AnimatedHero />
      <CreatingImpact />
      <EnvironmentalImpact />
      <SocialImpact />
      <Recognition />
      <Partnerships />
      <Downloads />
      <Blogs />
    </div>
  );
};

export default ImpactMain;
