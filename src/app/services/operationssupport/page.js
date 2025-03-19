import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";
import OpsSupportdata from "@/app/data/shareddata/hersectiondata.json";
import Opssupsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import MethodologyCardData from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
export default function OpsSupport() {
  // hero data---------------------------------------------------------------
  let OpsSupportherotitle = OpsSupportdata.opssupport.title;
  let OpsSupportheropara = OpsSupportdata.opssupport.paragraph;
  let OpsSupportherotextorientation = OpsSupportdata.opssupport.textOrientation;
  let OpsSupportherobackgroundimage =
    OpsSupportdata.opssupport.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let Solutionscards = Opssupsolutionscarddata.operationssupport.cards;
  let Solutionscardstitle =
    Opssupsolutionscarddata.operationssupport.sectiontitle;
  let Solutionscardsdescriptions =
    Opssupsolutionscarddata.operationssupport.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.operationssupport.title;
  let Mainheadingdescription =
    Mainheadingsectiondata.operationssupport.description;
  let Mainheadingtagtext = Mainheadingsectiondata.operationssupport.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.operationssupport.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = MethodologyCardData.operationssupportmethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.operationssupport;

  return (
    <>
      <FeaturesTypeOne
        Webdevherotitle={OpsSupportherotitle}
        Webdevheropara={OpsSupportheropara}
        Webdevherotextorientation={OpsSupportherotextorientation}
        Webdevherobackgroundimage={OpsSupportherobackgroundimage}
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
