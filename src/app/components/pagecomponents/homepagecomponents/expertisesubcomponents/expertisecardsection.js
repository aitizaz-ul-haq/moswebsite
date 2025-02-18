import BriefCaseCard from "./briefcasecard";
import ExpertiseOtherCards from "./expertiseothercards";

export default function ExpertiseCardSection({ cards }) {
  return (
    <div className="cardcollection-card-section">
      {cards.map((card) =>
        card.type === "arrow" ? (
          // ✅ Special case: Arrow card
          <BriefCaseCard key={card.id} card={card} />
        ) : (
          // ✅ General case: Normal card
          <ExpertiseOtherCards key={card.id} card={card} />
        )
      )}
    </div>
  );
}
