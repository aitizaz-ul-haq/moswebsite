import FeaturesTypeTwo from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypetwo";
import Hrherodata from "@/app/data/shareddata/hersectiondata.json";
import Humanresdata from "@/app/data/shareddata/mainheadingsectiondata.json";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";

export default function HumanResources() {
  //hero section data --------------------------------------------------------------
  let herosectiontitle = Hrherodata.hr.title;
  let herosectionparagraph = Hrherodata.hr.paragraph;
  let herosectiontextOrientation = Hrherodata.hr.textOrientation;
  let herosectionbackground = Hrherodata.hr.backgroundImages;
  //--------------------------------------------------------------------------------

  // main heading data -------------------------------------------------------------
  let mainheadingtitle = Humanresdata.Humanresources.title;
  let mainheadingdescription = Humanresdata.Humanresources.description;
  let mainheadingtagtext = Humanresdata.Humanresources.tagtext;
  let mainheadingbackgrounds = Humanresdata.Humanresources.backgroundImages;
  //--------------------------------------------------------------------------------

  //card grid data------------------------------------------------------------------
  let gridcards = cardData.Humanresources.cards;
  //--------------------------------------------------------------------------------
  return (
    <>
      <FeaturesTypeTwo
        herosectiontitle={herosectiontitle}
        herosectionparagraph={herosectionparagraph}
        herosectiontextOrientation={herosectiontextOrientation}
        herosectionbackground={herosectionbackground}
        mainheadingtitle={mainheadingtitle}
        mainheadingdescription={mainheadingdescription}
        mainheadingtagtext={mainheadingtagtext}
        mainheadingbackgrounds={mainheadingbackgrounds}
        gridcards={gridcards}
      />
    </>
  );
}
