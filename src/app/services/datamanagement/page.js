import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";
import DataMagdata from "@/app/data/shareddata/hersectiondata.json";
import DataMagsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import OpSupMehodologydata from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
export default function DataManagement() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = DataMagdata.datamang.title;
  let Webdevheropara = DataMagdata.datamang.paragraph;
  let Webdevherotextorientation = DataMagdata.datamang.textOrientation;
  let Webdevherobackgroundimage = DataMagdata.datamang.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------

  let Solutionscards = DataMagsolutionscarddata.datamanagement.cards;
  let Solutionscardstitle =
    DataMagsolutionscarddata.datamanagement.sectiontitle;
  let Solutionscardsdescriptions =
    DataMagsolutionscarddata.datamanagement.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.datamanagement.title;
  let Mainheadingdescription =
    Mainheadingsectiondata.datamanagement.description;
  let Mainheadingtagtext = Mainheadingsectiondata.datamanagement.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.datamanagement.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = OpSupMehodologydata.datamanagementmethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.datamanagement;

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
