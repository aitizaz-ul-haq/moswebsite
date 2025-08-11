import nextDynamic from "next/dynamic";

// eager (above the fold)
import MainPageHeroSection from "../Shared/mainpageherosection/mainpageherosection";

// lazy (code-split, still SSG — don’t set ssr:false)
const TypeOneCardSection = nextDynamic(
  () => import("./typeonesubcomps/typeonecardsection"),
  { loading: () => null }
);

const FeaturesMethodTypeOne = nextDynamic(
  () => import("./featuresmethodtypeone"),
  { loading: () => null }
);

const MainHeadingSection = nextDynamic(
  () => import("../Shared/mainheadingsection/mainheadingsection"),
  { loading: () => null }
);

const CallToAction = nextDynamic(
  () => import("../Shared/calltoaction/calltoaction"),
  { loading: () => null }
);

const TypeOneAdvantagesSection = nextDynamic(
  () =>
    import(
      "./typeonesubcomps/typeoneadvantagessection/typeoneadvantagessection"
    ),
  { loading: () => null }
);
import "./styles/featurestypeone.css";

export default function FeaturesTypeOne({
  Webdevherotitle,
  Webdevheropara,
  Webdevherotextorientation,
  Webdevherobackgroundimage,
  Solutionscards,
  Solutionscardstitle,
  Solutionscardsdescriptions,
  Mainheadingtitle,
  Mainheadingdescription,
  Mainheadingtagtext,
  Mainheadingbackgroundimages,
  Methodscarddata,
  Calltoactiondata,
  Advantagessectdata,
}) {
  return (
    <>
      <MainPageHeroSection
        title={Webdevherotitle}
        paragraph={Webdevheropara}
        textOrientation={Webdevherotextorientation}
        backgroundImages={Webdevherobackgroundimage}
      />
      <TypeOneCardSection
        cards={Solutionscards}
        Solutionscardstitle={Solutionscardstitle}
        Solutionscardsdescriptions={Solutionscardsdescriptions}
      />
      <MainHeadingSection
        title={Mainheadingtitle}
        description={Mainheadingdescription}
        tagtext={Mainheadingtagtext}
        backgroundImages={Mainheadingbackgroundimages}
      />
      <FeaturesMethodTypeOne cards={Methodscarddata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <TypeOneAdvantagesSection Advantagessectdata={Advantagessectdata} />
    </>
  );
}
