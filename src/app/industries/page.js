import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import IndustriesHeroData from "@/app/data/shareddata/hersectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Industriesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";

export default function Industries() {
  return (
    <div>
      <MainPageHeroSection
        title={IndustriesHeroData.industries.title}
        paragraph={IndustriesHeroData.industries.paragraph}
        textOrientation={IndustriesHeroData.industries.textOrientation}
        backgroundImages={IndustriesHeroData.industries.backgroundImages}
      />

      <MainHeadingSection
        title={Industriesheadingsectiondata.industries.title}
        description={Industriesheadingsectiondata.industries.description}
        tagtext={Industriesheadingsectiondata.industries.tagtext}
        backgroundImages={
          Industriesheadingsectiondata.industries.backgroundImages
        }
      />
    </div>
  );
}
