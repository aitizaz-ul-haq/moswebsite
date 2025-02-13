import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import AboutHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function About() {
  return (
    <MainPageHeroSection
      title={AboutHeroData.about.title}
      paragraph={AboutHeroData.about.paragraph}
      textOrientation={AboutHeroData.about.textOrientation}
      backgroundImages={AboutHeroData.about.backgroundImages}
    />
  );
}
