export default function MethodeCardBottomSection({ card }) {
  return (
    <div className="featuresmethod-card-collection-bottomsection-container">
      <p className="featuresmethod-card-collection-bottom-text font-nunito">
        {card.bottomtext}
      </p>
      <div className="featuresmethod-card-collection-bottomsection-button-container">
        <button className="featuresmethod-card-collection-bottomsection-button font-nunito">
          DETAILS
        </button>
      </div>
    </div>
  );
}
