import TypeTwoMthTopSection from "./mthsubcomps/typetwomthtopsection";
import TypeTwoMthBottomSection from "./mthsubcomps/typetwomthbottomsection";
import "../../styles/typetwomethodsection.css";

export default function TypeTwoMethodSection({ Methodologysectdata }) {
  let tag = Methodologysectdata.tagtext;
  let description = Methodologysectdata.description;
  let advcards = Methodologysectdata.cardsdata;
  return (
    <div className="typeoneadv-container">
      <TypeTwoMthTopSection tag={tag} description={description} />
      <TypeTwoMthBottomSection advcards={advcards} />
    </div>
  );
}
