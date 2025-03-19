import FeaturesTypeOne from "@/app/components/pagecomponents/featuresdetailpagecomponents/featurestypeone";
import Webdevdata from "@/app/data/shareddata/hersectiondata.json";
import Webdevsolutionscarddata from "@/app/data/shareddata/cardcollectiondata.json";
import WebDevMethodologyCardsdata from "@/app/data/homedata/homecardcollectiondata.json";
import Mainheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Calltoactiondata from "@/app/data/shareddata/calltoactiondata.json";
import Advsectdata from "@/app/data/shareddata/typeoneadvantagesdata.json";
export default function WebDevelopment() {
  // hero data---------------------------------------------------------------
  let Webdevherotitle = Webdevdata.webdevelopment.title;
  let Webdevheropara = Webdevdata.webdevelopment.paragraph;
  let Webdevherotextorientation = Webdevdata.webdevelopment.textOrientation;
  let Webdevherobackgroundimage = Webdevdata.webdevelopment.backgroundImages;
  //--------------------------------------------------------------------------

  // type one card section data-----------------------------------------------
  let Solutionscards = Webdevsolutionscarddata.webdevelopment.cards;
  let Solutionscardstitle = Webdevsolutionscarddata.webdevelopment.sectiontitle;
  let Solutionscardsdescriptions =
    Webdevsolutionscarddata.webdevelopment.sectiondescription;
  //--------------------------------------------------------------------------

  // main heading data--------------------------------------------------------
  let Mainheadingtitle = Mainheadingsectiondata.webdev.title;
  let Mainheadingdescription = Mainheadingsectiondata.webdev.description;
  let Mainheadingtagtext = Mainheadingsectiondata.webdev.tagtext;
  let Mainheadingbackgroundimages =
    Mainheadingsectiondata.webdev.backgroundImages;
  //--------------------------------------------------------------------------

  // method cards data--------------------------------------------------------
  let Methodscarddata = WebDevMethodologyCardsdata.webdevmethodology.cards;
  //--------------------------------------------------------------------------

  // advantages section data -------------------------------------------------
  let Advantagessectdata = Advsectdata.webdev;

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
