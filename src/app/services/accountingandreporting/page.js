import FeaturesTypeTwo from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypetwo";
import Accherodata from "@/app/data/shareddata/hersectiondata.json";
import AccSeconddata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Accfirstsdata from "@/app/data/shareddata/mainheadingsectiondata.json";
import AcccardData from "@/app/data/shareddata/cardcollectiondata.json";
import AccMethoddata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Accadvdata from "@/app/data/homedata/homecardcollectiondata.json";

export default function AccountingAndReporting() {
  // hero section data --------------------------------------------------------------
  let herosectiontitle = Accherodata.accountingandreporting.title;
  let herosectionparagraph = Accherodata.accountingandreporting.paragraph;
  let herosectiontextOrientation =
    Accherodata.accountingandreporting.textOrientation;
  let herosectionbackground =
    Accherodata.accountingandreporting.backgroundImages;
  //--------------------------------------------------------------------------------

  // main heading data -------------------------------------------------------------
  let mainheadingtitle = Accfirstsdata.AccountingandReporting.title;
  let mainheadingdescription = Accfirstsdata.AccountingandReporting.description;
  let mainheadingtagtext = Accfirstsdata.AccountingandReporting.tagtext;
  let mainheadingbackgrounds =
    Accfirstsdata.AccountingandReporting.backgroundImages;
  //--------------------------------------------------------------------------------

  // card grid data------------------------------------------------------------------
  let gridcards = AcccardData.AccountingandReporting.cards;
  //---------------------------------------------------------------------------------

  // methodology data ---------------------------------------------------------------
  let Methodologysectdata = AccMethoddata.AccountingandReporting;
  //---------------------------------------------------------------------------------

  // second main heading data -------------------------------------------------------
  let herosectionsecondtitle = AccSeconddata.AccountingandReportingsecond.title;
  let herosectionsecondparagraph =
    AccSeconddata.AccountingandReportingsecond.description;
  let herosectionsecondtextOrientation =
    AccSeconddata.AccountingandReportingsecond.tagtext;
  let herosecondsectionbackground =
    AccSeconddata.AccountingandReportingsecond.backgroundImages;
  //----------------------------------------------------------------------------------

  // Advantegse section data----------------------------------------------------------
  let advantagesdata = Accadvdata.accountingandreportingadvantages.cards;
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
