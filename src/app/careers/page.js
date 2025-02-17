import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import CareersHeroData from "@/app/data/shareddata/hersectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Careersheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";

export default function Careers() {
  return (
    <>
      <MainPageHeroSection
        title={CareersHeroData.careers.title}
        paragraph={CareersHeroData.careers.paragraph}
        textOrientation={CareersHeroData.careers.textOrientation}
        backgroundImages={CareersHeroData.careers.backgroundImages}
      />

      <MainHeadingSection
        title={Careersheadingsectiondata.careers.title}
        description={Careersheadingsectiondata.careers.description}
        tagtext={Careersheadingsectiondata.careers.tagtext}
        backgroundImages={Careersheadingsectiondata.careers.backgroundImages}
      />
    </>
  );
}
