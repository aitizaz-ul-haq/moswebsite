export default function TypeOneCardBottomSection({ card }) {
  return (
    <div className="typeoncard-collection-bottomsection-container">
      <p className="typeoncard-collection-bottom-text font-nunito">
        {card.bottomtext}
      </p>
    </div>
  );
}
