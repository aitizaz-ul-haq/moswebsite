import nextDynamic from "next/dynamic";

// Eager (no code-splitting) — we want instant hero content + interactivity if needed
import MainPageHeroSection from "@/app/components/pagecomponents/Shared/mainpageherosection/mainpageherosection";

// Lazy (code-split, still SSG because we DO NOT set ssr:false)
const MainHeadingSection = nextDynamic(
  () =>
    import(
      "@/app/components/pagecomponents/Shared/mainheadingsection/mainheadingsection"
    ),
  { loading: () => null }
);

const CardCollection = nextDynamic(
  () =>
    import(
      "@/app/components/pagecomponents/Shared/cardcollection/cardcollection"
    ),
  { loading: () => null }
);

const TypeTwoMethodSection = nextDynamic(
  () => import("./typetwosubcomps/typetwomethodsection/typetwomethodsection"),
  { loading: () => null }
);

const CallToAction = nextDynamic(
  () =>
    import("@/app/components/pagecomponents/Shared/calltoaction/calltoaction"),
  { loading: () => null }
);

const FeaturesMethodTypeOne = nextDynamic(
  () => import("./featuresmethodtypeone"),
  { loading: () => null }
);
export default function FeaturesTypeTwo({
  herosectiontitle,
  herosectionparagraph,
  herosectiontextOrientation,
  herosectionbackground,
  mainheadingtitle,
  mainheadingdescription,
  mainheadingtagtext,
  mainheadingbackgrounds,
  gridcards,
  Methodologysectdata,
  Calltoactiondata,
  herosectionsecondtitle,
  herosectionsecondparagraph,
  herosectionsecondtextOrientation,
  herosecondsectionbackground,
  advantagesdata,
}) {
  return (
    <>
      <MainPageHeroSection
        title={herosectiontitle}
        paragraph={herosectionparagraph}
        textOrientation={herosectiontextOrientation}
        backgroundImages={herosectionbackground}
      />
      <MainHeadingSection
        title={mainheadingtitle}
        description={mainheadingdescription}
        tagtext={mainheadingtagtext}
        backgroundImages={mainheadingbackgrounds}
      />
      <CardCollection cards={gridcards} />
      <TypeTwoMethodSection Methodologysectdata={Methodologysectdata} />
      <CallToAction Calltoactiondata={Calltoactiondata} />
      <MainHeadingSection
        title={herosectionsecondtitle}
        description={herosectionsecondparagraph}
        tagtext={herosectionsecondtextOrientation}
        backgroundImages={herosecondsectionbackground}
      />
      <FeaturesMethodTypeOne cards={advantagesdata} />
    </>
  );
}
