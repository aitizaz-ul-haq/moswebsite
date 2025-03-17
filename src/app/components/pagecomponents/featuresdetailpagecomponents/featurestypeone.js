import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import Webdevdata from "../../../data/shareddata/hersectiondata.json";
import TypeOneCardSection from "./typeonesubcomps/typeonecardsection";
import Webdevcarddata from "../../../data/shareddata/cardcollectiondata.json";
import FeaturesMethodTypeOne from "./featuresmethodtypeone";
import Exampledata from "../../../data/homedata/homecardcollectiondata.json";
import MainHeadingSection from "../Shared/mainheadingsection/mainheadingsection";
import Mainheadingsectiondata from "../../../data/shareddata/mainheadingsectiondata.json";
import CallToAction from "../Shared/calltoaction/calltoaction";
import Calltoactiondata from "../../../data/shareddata/calltoactiondata.json";
import "./styles/featurestypeone.css";

export default function FeaturesTypeOne() {
  let cards = Webdevcarddata.webdevelopment.cards;
  let cardssecond = Exampledata.features.cards;
  return (
    <>
      <MainPageHeroSection
        title={Webdevdata.webdevelopment.title}
        paragraph={Webdevdata.webdevelopment.paragraph}
        textOrientation={Webdevdata.webdevelopment.textOrientation}
        backgroundImages={Webdevdata.webdevelopment.backgroundImages}
      />
      <TypeOneCardSection cards={cards} />
      <MainHeadingSection
        title={Mainheadingsectiondata.webdev.title}
        description={Mainheadingsectiondata.webdev.description}
        tagtext={Mainheadingsectiondata.webdev.tagtext}
        backgroundImages={Mainheadingsectiondata.webdev.backgroundImages}
      />
      <FeaturesMethodTypeOne cards={cardssecond} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <TypeOneCardSection cards={cards} />
    </>
  );
}
