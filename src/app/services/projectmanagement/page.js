import FeaturesTypeTwo from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypetwo";
import pojmangherodata from "@/app/data/shareddata/hersectiondata.json";
import projmangdata from "@/app/data/shareddata/mainheadingsectiondata.json";
import projmangseconddata from "@/app/data/shareddata/mainheadingsectiondata.json";
import projmangcardData from "@/app/data/shareddata/cardcollectiondata.json";
import ProjmangMethoddata from "@/app/data/shareddata/typeoneadvantagesdata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import ProjectManadv from "@/app/data/homedata/homecardcollectiondata.json";

export default function ProjectManagement() {
  // hero section data --------------------------------------------------------------
  let herosectiontitle = pojmangherodata.projectmanagement.title;
  let herosectionparagraph = pojmangherodata.projectmanagement.paragraph;
  let herosectiontextOrientation =
    pojmangherodata.projectmanagement.textOrientation;
  let herosectionbackground =
    pojmangherodata.projectmanagement.backgroundImages;
  //--------------------------------------------------------------------------------

  // main heading data -------------------------------------------------------------
  let mainheadingtitle = projmangdata.Projectmanagement.title;
  let mainheadingdescription = projmangdata.Projectmanagement.description;
  let mainheadingtagtext = projmangdata.Projectmanagement.tagtext;
  let mainheadingbackgrounds = projmangdata.Projectmanagement.backgroundImages;
  //--------------------------------------------------------------------------------

  // card grid data------------------------------------------------------------------
  let gridcards = projmangcardData.Projectmanagement.cards;
  //---------------------------------------------------------------------------------

  // methodology data ---------------------------------------------------------------
  let Methodologysectdata = ProjmangMethoddata.projectmanagement;
  //---------------------------------------------------------------------------------

  // second main heading data -------------------------------------------------------
  let herosectionsecondtitle = projmangseconddata.Projectmanagementsecond.title;
  let herosectionsecondparagraph =
    projmangseconddata.Projectmanagementsecond.description;
  let herosectionsecondtextOrientation =
    projmangseconddata.Projectmanagementsecond.tagtext;
  let herosecondsectionbackground =
    projmangseconddata.Projectmanagementsecond.backgroundImages;
  //----------------------------------------------------------------------------------

  // Advantegse section data----------------------------------------------------------
  let advantagesdata = ProjectManadv.projectmanagementadvantages.cards;
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
