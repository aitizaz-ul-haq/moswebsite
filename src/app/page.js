import MainPageHeroSection from "./components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "./components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Homepageherodata from "@/app/data/shareddata/hersectiondata.json";
import Homepageheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Homecarddata from "../app/data/homedata/homecardcollectiondata.json";
import ExpertiseCollection from "./components/pagecomponents/homepagecomponents/expertisecollection";

export default function Home() {
  const cards = Homecarddata.home.cards;
  return (
    <>
      <MainPageHeroSection
        title={Homepageherodata.home.title}
        paragraph={Homepageherodata.home.paragraph}
        textOrientation={Homepageherodata.home.textOrientation}
        backgroundImages={Homepageherodata.home.backgroundImages}
      />

      <MainHeadingSection
        title={Homepageheadingsectiondata.home.title}
        description={Homepageheadingsectiondata.home.description}
        tagtext={Homepageheadingsectiondata.home.tagtext}
        backgroundImages={Homepageheadingsectiondata.home.backgroundImages}
      />

      <ExpertiseCollection cards={cards} />
    </>
  );
}
