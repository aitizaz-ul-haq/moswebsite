import "../styles/mainpageherosection.css";
import HomeRight from "./mainherosectionsubcomponents/homeright";
import FeaturesRight from "./mainherosectionsubcomponents/featuresright";
import IndustriesLeft from "./mainherosectionsubcomponents/industriesleft";
import TeamCenter from "./mainherosectionsubcomponents/teamcenter";

export default function MainPageHeroSection({
  title,
  paragraph,
  textOrientation,
  backgroundImages,
}) {
  let TextComponent;
  if (textOrientation === "homeright") {
    TextComponent = HomeRight;
  } else if (textOrientation === "featuresright") {
    TextComponent = FeaturesRight;
  } else if (textOrientation === "industriesleft") {
    TextComponent = IndustriesLeft;
  } else if (textOrientation === "teamcenter") {
    TextComponent = TeamCenter;
  }
  return (
    <div
      className="hero-section"
      style={{
        "--bg-320": `url(${backgroundImages["320px"]})`,
        "--bg-360": `url(${backgroundImages["360px"]})`,
        "--bg-375": `url(${backgroundImages["375px"]})`,
        "--bg-390": `url(${backgroundImages["390px"]})`,
        "--bg-430": `url(${backgroundImages["430px"]})`,
        "--bg-480": `url(${backgroundImages["480px"]})`,
        "--bg-600": `url(${backgroundImages["600px"]})`,
        "--bg-768": `url(${backgroundImages["768px"]})`,
        "--bg-1024": `url(${backgroundImages["1024px"]})`,
        "--bg-1280": `url(${backgroundImages["1280px"]})`,
        "--bg-1440": `url(${backgroundImages["1440px"]})`,
        "--bg-1600": `url(${backgroundImages["1600px"]})`,
        "--bg-1920": `url(${backgroundImages["1920px"]})`,
        "--bg-2560": `url(${backgroundImages["2560px"]})`,
      }}
    >
      <TextComponent title={title} paragraph={paragraph} />
    </div>
  );
}
