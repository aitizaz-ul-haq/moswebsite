export default function EcardTopSection({ card }) {
  return (
    <div className="expertisecard-card-collection-topsection-container">
      <p className="expertisecard-card-collection-first-text font-poppins">
        {card.firsttext}
      </p>
      <p className="expertisecard-card-collection-second-text font-nunito">
        {card.secondtext}
      </p>
    </div>
  );
}
