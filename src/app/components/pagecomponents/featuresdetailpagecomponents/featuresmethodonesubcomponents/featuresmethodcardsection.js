import FeaturesMethodOtherCards from "./featuresmethodothercards";

export default function FeaturesMethodCardSection({ cards }) {
  return (
    <div className="featuresmethod-cardcollection-card-section">
      {cards.map((card) => (
        <FeaturesMethodOtherCards key={card.id} card={card} />
      ))}
    </div>
  );
}
