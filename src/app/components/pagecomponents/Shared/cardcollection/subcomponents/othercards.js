import TopSection from "./othercardscomponents/topsection";
import MiddleSection from "./othercardscomponents/middlesection";
import BottomSection from "./othercardscomponents/bottomsection";
export default function OtherCards({ card }) {
  return (
    <div className="cardcollection-card">
      <TopSection card={card} />
      <MiddleSection card={card} />
      <BottomSection card={card} />
    </div>
  );
}
