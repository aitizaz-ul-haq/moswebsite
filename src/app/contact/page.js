import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ContactHeroData from "@/app/data/shareddata/hersectiondata.json";
import Connectheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";

export default function Connect() {
  return (
    <div>
      <MainPageHeroSection
        title={ContactHeroData.connect.title}
        paragraph={ContactHeroData.connect.paragraph}
        textOrientation={ContactHeroData.connect.textOrientation}
        backgroundImages={ContactHeroData.connect.backgroundImages}
      />

      <MainHeadingSection
        title={Connectheadingsectiondata.connect.title}
        description={Connectheadingsectiondata.connect.description}
        tagtext={Connectheadingsectiondata.connect.tagtext}
        backgroundImages={Connectheadingsectiondata.connect.backgroundImages}
      />
    </div>
  );
}
