import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import TypeOneCardSection from "./typeonesubcomps/typeonecardsection";
import FeaturesMethodTypeOne from "./featuresmethodtypeone";
import MainHeadingSection from "../Shared/mainheadingsection/mainheadingsection";
import CallToAction from "../Shared/calltoaction/calltoaction";

import "./styles/featurestypeone.css";

export default function FeaturesTypeOne({
  Webdevherotitle,
  Webdevheropara,
  Webdevherotextorientation,
  Webdevherobackgroundimage,
  Solutionscards,
  Mainheadingtitle,
  Mainheadingdescription,
  Mainheadingtagtext,
  Mainheadingbackgroundimages,
  methodscarddata,
  Calltoactiondata,
}) {
  return (
    <>
      <MainPageHeroSection
        title={Webdevherotitle}
        paragraph={Webdevheropara}
        textOrientation={Webdevherotextorientation}
        backgroundImages={Webdevherobackgroundimage}
      />
      <TypeOneCardSection cards={Solutionscards} />
      <MainHeadingSection
        title={Mainheadingtitle}
        description={Mainheadingdescription}
        tagtext={Mainheadingtagtext}
        backgroundImages={Mainheadingbackgroundimages}
      />
      <FeaturesMethodTypeOne cards={methodscarddata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
    </>
  );
}
