import TypeOneAdvantagesTopSection from "./advsubcomps/typeoneadvantagestopsection";
import TypeOneAdvantagesBottomSection from "./advsubcomps/typeoneadvantagesbottomsection";
import "../../styles/typeoneadvantagessection.css";

export default function TypeOneAdvantagesSection({ Advantagessectdata }) {
  let tag = Advantagessectdata.tagtext;
  let description = Advantagessectdata.description;
  let advcards = Advantagessectdata.cardsdata;
  return (
    <div className="typeoneadv-container">
      <TypeOneAdvantagesTopSection tag={tag} description={description} />
      <TypeOneAdvantagesBottomSection advcards={advcards} />
    </div>
  );
}
