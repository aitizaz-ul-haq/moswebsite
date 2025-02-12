import MainPageHeroSection from "./components/pagecomponents/Shared/mainpageherosection/mainpageherosection";
import Homepageherodata from "@/app/data/shareddata/hersectiondata.json";

export default function Home() {
  return (
    <main>
      <MainPageHeroSection
        title={Homepageherodata.home.title}
        paragraph={Homepageherodata.home.paragraph}
        textOrientation={Homepageherodata.home.textOrientation}
        backgroundImages={Homepageherodata.home.backgroundImages}
      />
    </main>
  );
}
