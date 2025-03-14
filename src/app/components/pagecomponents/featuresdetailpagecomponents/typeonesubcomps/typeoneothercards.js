import TypeOneCardTopSection from "./typeonecardsubcomps/typeonecardtopsection";
import TypeOneCardMiddleSection from "./typeonecardsubcomps/typeonecardmiddlesection";
import TypeOneCardBottomSection from "./typeonecardsubcomps/typeonecardbottomsection";
export default function TypeOneOtherCards({ card }) {
  return (
    <div className="typeonecard-card">
      <TypeOneCardTopSection card={card} />
      <TypeOneCardMiddleSection card={card} />
      <TypeOneCardBottomSection card={card} />
    </div>
  );
}
