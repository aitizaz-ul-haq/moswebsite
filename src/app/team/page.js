import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import TeamHeroData from "@/app/data/shareddata/hersectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Teamheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import ExecutiveTeamSection from "../components/pagecomponents/teampagecomponents/executiveteamsection";
import Teampagedata from "../data/teamdata/teampagedata.json";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import DirectorsTeamSection from "../components/pagecomponents/teampagecomponents/directorsteamsection";
import Dicteamdata from "../data/teamdata/dicteamdata.json";
import TeamMemebersSection from "../components/pagecomponents/teampagecomponents/teammemberssection";

export default function Team() {
  const executivecards = Teampagedata.team.executivecards;
  return (
    <>
      <MainPageHeroSection
        title={TeamHeroData.team.title}
        paragraph={TeamHeroData.team.paragraph}
        textOrientation={TeamHeroData.team.textOrientation}
        backgroundImages={TeamHeroData.team.backgroundImages}
      />
      <MainHeadingSection
        title={Teamheadingsectiondata.team.title}
        description={Teamheadingsectiondata.team.description}
        tagtext={Teamheadingsectiondata.team.tagtext}
        backgroundImages={Teamheadingsectiondata.team.backgroundImages}
      />
      <ExecutiveTeamSection executivecards={executivecards} />
      {/* <CallToAction Calltoactiondata={Calltoactiondata} /> */}
      {/* <DirectorsTeamSection Dicteamdata={Dicteamdata} /> */}
      <TeamMemebersSection />
    </>
  );
}
