import TypeOneCardTopSection from "./typeonecardsubcomps/typeonecardtopsection";
import TypeOneCardMiddleSection from "./typeonecardsubcomps/typeonecardmiddlesection";
import TypeOneCardBottomSection from "./typeonecardsubcomps/typeonecardbottomsection";
export default function TypeOneOtherCards({ card }) {
  return (
    <div className="typeonecard-card">
      <TypeOneCardMiddleSection card={card} />
      <TypeOneCardTopSection card={card} />
      <TypeOneCardBottomSection card={card} />
    </div>
  );
}
