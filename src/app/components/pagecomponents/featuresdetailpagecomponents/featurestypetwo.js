import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../Shared/mainheadingsection/mainheadingsection";
import CardCollection from "../Shared/cardcollection/cardcollection";
import TypeTwoMethodSection from "./typetwosubcomps/typetwomethodsection/typetwomethodsection";
import CallToAction from "../Shared/calltoaction/calltoaction";
import FeaturesMethodTypeOne from "./featuresmethodtypeone";
export default function FeaturesTypeTwo({
  herosectiontitle,
  herosectionparagraph,
  herosectiontextOrientation,
  herosectionbackground,
  mainheadingtitle,
  mainheadingdescription,
  mainheadingtagtext,
  mainheadingbackgrounds,
  gridcards,
  Methodologysectdata,
  Calltoactiondata,
  herosectionsecondtitle,
  herosectionsecondparagraph,
  herosectionsecondtextOrientation,
  herosecondsectionbackground,
  advantagesdata,
}) {
  return (
    <>
      <MainPageHeroSection
        title={herosectiontitle}
        paragraph={herosectionparagraph}
        textOrientation={herosectiontextOrientation}
        backgroundImages={herosectionbackground}
      />
      <MainHeadingSection
        title={mainheadingtitle}
        description={mainheadingdescription}
        tagtext={mainheadingtagtext}
        backgroundImages={mainheadingbackgrounds}
      />
      <CardCollection cards={gridcards} />
      <TypeTwoMethodSection Methodologysectdata={Methodologysectdata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <MainHeadingSection
        title={herosectionsecondtitle}
        description={herosectionsecondparagraph}
        tagtext={herosectionsecondtextOrientation}
        backgroundImages={herosecondsectionbackground}
      />
      <FeaturesMethodTypeOne cards={advantagesdata} />
    </>
  );
}
