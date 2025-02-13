import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import ServicesHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function Services() {
  return (
    <MainPageHeroSection
      title={ServicesHeroData.features.title}
      paragraph={ServicesHeroData.features.paragraph}
      textOrientation={ServicesHeroData.features.textOrientation}
      backgroundImages={ServicesHeroData.features.backgroundImages}
    />
  );
}
