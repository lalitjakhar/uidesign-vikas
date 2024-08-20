import BeautyWorld from "./BeautyWorld";
import EwatchSection from "./EwatchSection";
import ExplorationSeaction from "./ExplorationSeaction";
import ExpressDesign from "./ExpressDesign";
import HeroSection from "./HeroSection";
import InteriorDesign from "./InteriorDesign";
import NextLevelSection from "./NextLevelSection";
import PracticeSeaction from "./PracticeSecation";
import SimpleSection from "./SimpleSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BeautyWorld />
      <SimpleSection />
      <ExplorationSeaction />
      <PracticeSeaction />
      <EwatchSection />
      <ExpressDesign />
      <NextLevelSection />
      <InteriorDesign />
    </>
  );
};
export default HomePage;
