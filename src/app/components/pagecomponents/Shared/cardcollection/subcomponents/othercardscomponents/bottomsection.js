import CardBottomText from "./othercardscomponenetssubcomps/cardbottomtext";

export default function BottomSection({ card }) {
  return (
    <div className="card-collection-bottomsection-container">
      <CardBottomText bottomtext={card.bottomtext} />
    </div>
  );
}
