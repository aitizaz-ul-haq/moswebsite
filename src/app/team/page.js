import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import TeamHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function Team() {
  return (
    <MainPageHeroSection
      title={TeamHeroData.team.title}
      paragraph={TeamHeroData.team.paragraph}
      textOrientation={TeamHeroData.team.textOrientation}
      backgroundImages={TeamHeroData.team.backgroundImages}
    />
  );
}
