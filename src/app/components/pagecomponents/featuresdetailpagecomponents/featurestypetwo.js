import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../Shared/mainheadingsection/mainheadingsection";
import CardCollection from "../Shared/cardcollection/cardcollection";
import TypeTwoMethodSection from "./typetwosubcomps/typetwomethodsection/typetwomethodsection";
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
    </>
  );
}
