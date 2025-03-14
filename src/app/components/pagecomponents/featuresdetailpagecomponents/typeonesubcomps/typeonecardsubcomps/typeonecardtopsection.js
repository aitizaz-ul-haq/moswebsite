export default function TypeOneCardTopSection({ card }) {
  return (
    <div className="typeoncard-collection-topsection-container">
      <p className="typeoncard-collection-first-text font-poppins">
        {card.firsttext}
      </p>
      <p className="typeoncard-collection-second-text font-nunito">
        {card.secondtext}
      </p>
    </div>
  );
}
