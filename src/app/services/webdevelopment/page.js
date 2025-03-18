import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";
import Webdevdata from "@/app/data/shareddata/hersectiondata.json";
import Webdevsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import Exampledata from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
export default function WebDevelopment() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = Webdevdata.webdevelopment.title;
  let Webdevheropara = Webdevdata.webdevelopment.paragraph;
  let Webdevherotextorientation = Webdevdata.webdevelopment.textOrientation;
  let Webdevherobackgroundimage = Webdevdata.webdevelopment.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let solutionscards = Webdevsolutionscarddata.webdevelopment.cards;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.webdev.title;
  let Mainheadingdescription = Mainheadingsectiondata.webdev.description;
  let Mainheadingtagtext = Mainheadingsectiondata.webdev.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.webdev.backgroundImages;

  // method cards data--------------------------------------------------------
  let methodscarddata = Exampledata.features.cards;
  //--------------------------------------------------------------------------

  return (
    <>
      <FeaturesTypeOne
        Webdevherotitle={Webdevherotitle}
        Webdevheropara={Webdevheropara}
        Webdevherotextorientation={Webdevherotextorientation}
        Webdevherobackgroundimage={Webdevherobackgroundimage}
        solutionscards={solutionscards}
        Mainheadingtitle={Mainheadingtitle}
        Mainheadingdescription={Mainheadingdescription}
        Mainheadingtagtext={Mainheadingtagtext}
        Mainheadingbackgroundimages={Mainheadingbackgroundimages}
        methodscarddata={methodscarddata}
        Calltoactiondata={Calltoactiondata}
      />
    </>
  );
}
