import MainPageHeroSection from "./components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import Homepageherodata from "@/app/data/home/herosectiondata/hersectiondata.json";

export default function Home() {
  return (
    <main>
      <MainPageHeroSection
        title={Homepageherodata.title}
        paragraph={Homepageherodata.paragraph}
        textOrientation={Homepageherodata.textOrientation}
        backgroundImages={Homepageherodata.backgroundImages}
      />
    </main>
  );
}
