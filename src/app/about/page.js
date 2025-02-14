import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import AboutHeroData from "@/app/data/shareddata/hersectiondata.json";
import Aboutheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";

export default function About() {
  return (
    <>
      <MainPageHeroSection
        title={AboutHeroData.about.title}
        paragraph={AboutHeroData.about.paragraph}
        textOrientation={AboutHeroData.about.textOrientation}
        backgroundImages={AboutHeroData.about.backgroundImages}
      />
      <MainHeadingSection
        title={Aboutheadingsectiondata.about.title}
        description={Aboutheadingsectiondata.about.description}
        tagtext={Aboutheadingsectiondata.about.tagtext}
        backgroundImages={Aboutheadingsectiondata.about.backgroundImages}
      />
    </>
  );
}
