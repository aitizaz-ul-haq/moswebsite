import BriefCaseCard from "./briefcasecard";
import ExpertiseOtherCards from "./expertiseothercards";

export default function ExpertiseCardSection({ cards }) {
  return (
    <div className="expertisecard-cardcollection-card-section">
      {cards.map((card) =>
        card.type === "briefcase" ? (
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
