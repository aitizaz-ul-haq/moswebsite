import HomeAdvHeadingSection from "./homeadvantegessectioncomponents/homeadvheadingsection";
import HomeAdvCardContainer from "./homeadvantegessectioncomponents/homeadvcardcontainer";
import "./styles/homeadvantegessection.css";

export default function HomeAdvantagesSection({ Homeadvantegessectiondata }) {
  let homeadvcards = Homeadvantegessectiondata.homeadvantagescards;
  return (
    <div className="homeadvantages-container">
      <HomeAdvHeadingSection
        Homeadvantegessectiondata={Homeadvantegessectiondata}
      />
      <HomeAdvCardContainer homeadvcards={homeadvcards} />
    </div>
  );
}
