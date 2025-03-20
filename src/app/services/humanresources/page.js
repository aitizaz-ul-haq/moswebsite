import FeaturesTypeTwo from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypetwo";
import Hrherodata from "@/app/data/shareddata/hersectiondata.json";
import HrSeconddata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Humanresdata from "@/app/data/shareddata/mainheadingsectiondata.json";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";
import Methoddata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Hradvdata from "@/app/data/homedata/homecardcollectiondata.json";

export default function HumanResources() {
  // hero section data --------------------------------------------------------------
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

  // card grid data------------------------------------------------------------------
  let gridcards = cardData.Humanresources.cards;
  //---------------------------------------------------------------------------------

  // methodology data ---------------------------------------------------------------
  let Methodologysectdata = Methoddata.humanresources;
  //---------------------------------------------------------------------------------

  // second main heading data -------------------------------------------------------
  let herosectionsecondtitle = HrSeconddata.Humanresourcessecond.title;
  let herosectionsecondparagraph =
    HrSeconddata.Humanresourcessecond.description;
  let herosectionsecondtextOrientation =
    HrSeconddata.Humanresourcessecond.tagtext;
  let herosecondsectionbackground =
    HrSeconddata.Humanresourcessecond.backgroundImages;
  //----------------------------------------------------------------------------------

  // Advantegse section data----------------------------------------------------------
  let advantagesdata = Hradvdata.hradvantages.cards;
  //----------------------------------------------------------------------------------

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
        Methodologysectdata={Methodologysectdata}
        Calltoactiondata={Calltoactiondata}
        herosectionsecondtitle={herosectionsecondtitle}
        herosectionsecondparagraph={herosectionsecondparagraph}
        herosectionsecondtextOrientation={herosectionsecondtextOrientation}
        herosecondsectionbackground={herosecondsectionbackground}
        advantagesdata={advantagesdata}
      />
    </>
  );
}
