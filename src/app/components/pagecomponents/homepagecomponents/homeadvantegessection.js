import "./styles/homeadvantegessection.css";
import HomeAdvHeadingSection from "./homeadvantegessectioncomponents/homeadvheadingsection";
import HomeAdvCardContainer from "./homeadvantegessectioncomponents/homeadvcardcontainer";

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
