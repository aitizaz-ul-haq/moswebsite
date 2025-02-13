import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import ContactHeroData from "@/app/data/shareddata/hersectiondata.json";

export default function Connect() {
  return (
    <MainPageHeroSection
      title={ContactHeroData.connect.title}
      paragraph={ContactHeroData.connect.paragraph}
      textOrientation={ContactHeroData.connect.textOrientation}
      backgroundImages={ContactHeroData.connect.backgroundImages}
    />
  );
}
