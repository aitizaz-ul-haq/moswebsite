export default function MethodeCardTopSection({ card }) {
  return (
    <div className="featuresmethod-card-collection-topsection-container">
      <p className="featuresmethod-card-collection-first-text font-poppins">
        {card.firsttext}
      </p>
      {/* <p className="expertisecard-card-collection-second-text font-nunito">
          {card.secondtext}
        </p> */}
    </div>
  );
}
