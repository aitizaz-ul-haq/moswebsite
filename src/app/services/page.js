import MainPageHeroSection from "../components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import MainHeadingSection from "../components/pagecomponents/Shared/mainheadingsection/mainheadingsection";
import ServicesHeroData from "@/app/data/shareddata/hersectiondata.json";
import Servicesheadingsectiondata from "@/app/data/shareddata/mainheadingsectiondata.json";
import CardCollection from "../components/pagecomponents/Shared/cardcollection/cardcollection";
import cardData from "@/app/data/shareddata/cardcollectiondata.json";
import ServicesAdvantagesSection from "../components/pagecomponents/servicespagecomponents/servicesadvantagessection";
import Advantagessectiondata from "../data/servicesdata/advantagessectiondata.json";
import CallToAction from "../components/pagecomponents/Shared/calltoaction/calltoaction";
import Calltoactiondata from "../data/shareddata/calltoactiondata.json";
import ImportanceSection from "../components/pagecomponents/servicespagecomponents/importancesection";

export default function Services() {
  const cards = cardData.features.cards;
  return (
    <>
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

      <CardCollection cards={cards} />

      <ServicesAdvantagesSection
        Advantagessectiondata={Advantagessectiondata}
      />

      <CallToAction Calltoactiondata={Calltoactiondata} />

      <ImportanceSection />
    </>
  );
}
