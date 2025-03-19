import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import TypeOneCardSection from "./typeonesubcomps/typeonecardsection";
import FeaturesMethodTypeOne from "./featuresmethodtypeone";
import MainHeadingSection from "../Shared/mainheadingsection/mainheadingsection";
import CallToAction from "../Shared/calltoaction/calltoaction";
import TypeOneAdvantagesSection from "./typeonesubcomps/typeoneadvantagessection/typeoneadvantagessection";
import "./styles/featurestypeone.css";

export default function FeaturesTypeOne({
  Webdevherotitle,
  Webdevheropara,
  Webdevherotextorientation,
  Webdevherobackgroundimage,
  Solutionscards,
  Solutionscardstitle,
  Solutionscardsdescriptions,
  Mainheadingtitle,
  Mainheadingdescription,
  Mainheadingtagtext,
  Mainheadingbackgroundimages,
  Methodscarddata,
  Calltoactiondata,
  Advantagessectdata,
}) {
  return (
    <>
      <MainPageHeroSection
        title={Webdevherotitle}
        paragraph={Webdevheropara}
        textOrientation={Webdevherotextorientation}
        backgroundImages={Webdevherobackgroundimage}
      />
      <TypeOneCardSection
        cards={Solutionscards}
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
      />
      <MainHeadingSection
        title={Mainheadingtitle}
        description={Mainheadingdescription}
        tagtext={Mainheadingtagtext}
        backgroundImages={Mainheadingbackgroundimages}
      />
      <FeaturesMethodTypeOne cards={Methodscarddata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <TypeOneAdvantagesSection Advantagessectdata={Advantagessectdata} />
    </>
  );
}
