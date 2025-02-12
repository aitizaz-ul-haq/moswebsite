import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import IndustriesHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function Industries() {
  return (
    <MainPageHeroSection
      title={IndustriesHeroData.industries.title}
      paragraph={IndustriesHeroData.industries.paragraph}
      textOrientation={IndustriesHeroData.industries.textOrientation}
      backgroundImages={IndustriesHeroData.industries.backgroundImages}
    />
  );
}
