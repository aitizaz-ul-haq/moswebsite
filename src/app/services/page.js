import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ServicesHeroData from "@/app/data/shareddata/hersectiondata.json";
import Servicesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";

export default function Services() {
  return (
    <div>
      <MainPageHeroSection
        title={ServicesHeroData.features.title}
        paragraph={ServicesHeroData.features.paragraph}
        textOrientation={ServicesHeroData.features.textOrientation}
        backgroundImages={ServicesHeroData.features.backgroundImages}
      />

      <MainHeadingSection
        title={Servicesheadingsectiondata.features.title}
        description={Servicesheadingsectiondata.features.description}
        tagtext={Servicesheadingsectiondata.features.tagtext}
        backgroundImages={Servicesheadingsectiondata.features.backgroundImages}
      />
    </div>
  );
}
