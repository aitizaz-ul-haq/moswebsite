import "./styles/featurestypeone.css";

import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import Webdevdata from "../../../data/shareddata/hersectiondata.json";
import TypeOneCardSection from "./typeonesubcomps/typeonecardsection";
import Webdevcarddata from "../../../data/shareddata/cardcollectiondata.json";

export default function FeaturesTypeOne() {
  let cards = Webdevcarddata.webdevelopment.cards;
  return (
    <>
      <MainPageHeroSection
        title={Webdevdata.webdevelopment.title}
        paragraph={Webdevdata.webdevelopment.paragraph}
        textOrientation={Webdevdata.webdevelopment.textOrientation}
        backgroundImages={Webdevdata.webdevelopment.backgroundImages}
      />

      <TypeOneCardSection cards={cards} />
    </>
  );
}
