import CareersHeroData from "@/app/data/shareddata/hersectiondata.json";
import Applyformdata from "../data/careersdata/applyformdata.json";
import PositionsSectionData from "@/app/data/careersdata/positionsdata.json";
import Careersheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import NoVacancySectionData from "@/app/data/careersdata/novacancy.json";

import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import PositionsSections from "../components/pagecomponents/careerspagecomponents/positionssection";
import NoVacancyComp from "../components/pagecomponents/careerspagecomponents/novacancycomp";
import ApplyForm from "../components/pagecomponents/careerspagecomponents/applyform";

export default function Careers() {
  const isEnabled = PositionsSectionData.enable.enabled === "Yes";

  return (
    <>
      <MainPageHeroSection
        title={CareersHeroData.careers.title}
        paragraph={CareersHeroData.careers.paragraph}
        textOrientation={CareersHeroData.careers.textOrientation}
        backgroundImages={CareersHeroData.careers.backgroundImages}
      />
      <MainHeadingSection
        title={Careersheadingsectiondata.careers.title}
        description={Careersheadingsectiondata.careers.description}
        tagtext={Careersheadingsectiondata.careers.tagtext}
        backgroundImages={Careersheadingsectiondata.careers.backgroundImages}
      />

      
      {isEnabled ? (
        <>
          <PositionsSections PositionsSectionData={PositionsSectionData} />
          <ApplyForm Applyformdata={Applyformdata} />
        </>
      ) : (
        <NoVacancyComp NoVacancySectionData={NoVacancySectionData} />
      )}
    </>
  );
}
