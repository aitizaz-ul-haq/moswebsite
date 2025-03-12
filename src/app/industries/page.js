import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import IndustriesHeroData from "@/app/data/shareddata/hersectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Industriesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import CardCollection from "../components/pagecomponents/Shared/cardcollection/cardcollection";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";

export default function Industries() {
  const cards = cardData.industries.cards;
  return (
    <>
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
      <CardCollection cards={cards} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
    </>
  );
}
