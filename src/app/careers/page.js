import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import CareersHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function Careers() {
  return (
    <MainPageHeroSection
      title={CareersHeroData.careers.title}
      paragraph={CareersHeroData.careers.paragraph}
      textOrientation={CareersHeroData.careers.textOrientation}
      backgroundImages={CareersHeroData.careers.backgroundImages}
    />
  );
}
