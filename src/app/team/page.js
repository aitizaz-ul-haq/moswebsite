// componenet data imports
import TeamHeroData from "@/app/data/shareddata/hersectiondata.json";
import Teamheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import Teampagedata from "../data/teamdata/teampagedata.json";
import teammembersdata from "@/app/data/teamdata/dicteamdata.json";

// page componenets
import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ExecutiveTeamSection from "../components/pagecomponents/teampagecomponents/executiveteamsection";
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
      <TeamMemebersSection teammembersdata={teammembersdata} />
    </>
  );
}
