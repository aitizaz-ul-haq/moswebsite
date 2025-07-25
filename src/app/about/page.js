// import sub componenets
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import AboutTextSection from "../components/pagecomponents/aboutpagecomponents/abouttextsection";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import AboutLowerTextSection from "../components/pagecomponents/aboutpagecomponents/aboutlowertextsection";

// import json data files
import Abouttextsectiondata from "../data/aboutdata/abouttextsectiondata.json";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import AboutHeroData from "@/app/data/shareddata/hersectiondata.json";
import Aboutheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Aboutlowersectiondata from "../data/aboutdata/aboutlowersectiondata.json";

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
      <AboutTextSection Abouttextsectiondata={Abouttextsectiondata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <AboutLowerTextSection Aboutlowersectiondata={Aboutlowersectiondata} />
    </>
  );
}
