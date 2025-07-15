// import componenet data
import ItConsultdata from "@/app/data/shareddata/hersectiondata.json";
import ItConsultancysolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import ItConsultancyMehodologydata from "@/app/data/homedata/homecardcollectiondata.json";
import Methodologysectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";

// import main componenet
import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";

export default function ItConsultancy() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = ItConsultdata.itconsultancy.title;
  let Webdevheropara = ItConsultdata.itconsultancy.paragraph;
  let Webdevherotextorientation = ItConsultdata.itconsultancy.textOrientation;
  let Webdevherobackgroundimage = ItConsultdata.itconsultancy.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let Solutionscards = ItConsultancysolutionscarddata.itconsultancy.cards;
  let Solutionscardstitle = ItConsultancysolutionscarddata.itconsultancy.sectiontitle;
  let Solutionscardsdescriptions = ItConsultancysolutionscarddata.itconsultancy.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Methodologysectiondata.itconsultancy.title;
  let Mainheadingdescription = Methodologysectiondata.itconsultancy.description;
  let Mainheadingtagtext = Methodologysectiondata.itconsultancy.tagtext;
  let Mainheadingbackgroundimages = Methodologysectiondata.itconsultancy.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = ItConsultancyMehodologydata.itconsultancymethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.itconsultancy;

  return (
    <>
      <FeaturesTypeOne
        Webdevherotitle={Webdevherotitle}
        Webdevheropara={Webdevheropara}
        Webdevherotextorientation={Webdevherotextorientation}
        Webdevherobackgroundimage={Webdevherobackgroundimage}
        Solutionscards={Solutionscards}
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
        Mainheadingtitle={Mainheadingtitle}
        Mainheadingdescription={Mainheadingdescription}
        Mainheadingtagtext={Mainheadingtagtext}
        Mainheadingbackgroundimages={Mainheadingbackgroundimages}
        Methodscarddata={Methodscarddata}
        Calltoactiondata={Calltoactiondata}
        Advantagessectdata={Advantagessectdata}
      />
    </>
  );
}
