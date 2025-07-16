import "./styles/homeright.css";
import HeroHeadingSection from "./herosubcomps/heroheadingsection";
import HeroParaSection from "./herosubcomps/heroparasection";
import HeroButtonContainer from "./herosubcomps/herobuttoncontainer";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="homeright-text-wrapper">
      <div className="homeright-text-container">
        <HeroHeadingSection title={title} />
        <HeroParaSection paragraph={paragraph} />
        <HeroButtonContainer />
      </div>
    </div>
  );
}
