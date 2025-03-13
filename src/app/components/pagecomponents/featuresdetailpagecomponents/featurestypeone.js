import "./styles/featurestypeone.css";

import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import Webdevdata from "../../../data/shareddata/hersectiondata.json";

export default function FeaturesTypeOne() {
  return (
    <>
      <MainPageHeroSection
        title={Webdevdata.webdevelopment.title}
        paragraph={Webdevdata.webdevelopment.paragraph}
        textOrientation={Webdevdata.webdevelopment.textOrientation}
        backgroundImages={Webdevdata.webdevelopment.backgroundImages}
      />
    </>
  );
}
