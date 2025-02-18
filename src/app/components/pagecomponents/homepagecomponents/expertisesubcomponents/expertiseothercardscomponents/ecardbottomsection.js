export default function EcardBottomSection({ card }) {
  return (
    <div className="expertisecard-card-collection-bottomsection-container">
      <p className="expertisecard-card-collection-bottom-text font-nunito">
        {card.bottomtext}
      </p>
      <div className="expertisecard-card-collection-bottomsection-button-container">
        <button className="expertisecard-card-collection-bottomsection-button font-nunito">
          DETAILS
        </button>
      </div>
    </div>
  );
}
