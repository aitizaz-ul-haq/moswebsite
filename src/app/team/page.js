import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import TeamHeroData from "@/app/data/shareddata/hersectiondata.json";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import Teamheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import ExecutiveTeamSection from "../components/pagecomponents/teampagecomponents/executiveteamsection";
import Teampagedata from "@/app/data/team/teampagedata.json";

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
    </>
  );
}
