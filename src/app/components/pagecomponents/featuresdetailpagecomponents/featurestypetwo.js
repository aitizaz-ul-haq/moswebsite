import "./styles/featurestypetwo.css";

import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import Hrdata from "../../../data/shareddata/hersectiondata.json";
// import TypeOneCardSection from "./typeonecardsection";

export default function FeaturesTypeTwo() {
  return (
    <>
      <MainPageHeroSection
        title={Hrdata.hr.title}
        paragraph={Hrdata.hr.paragraph}
        textOrientation={Hrdata.hr.textOrientation}
        backgroundImages={Hrdata.hr.backgroundImages}
      />

      {/* <TypeOneCardSection /> */}
    </>
  );
}
