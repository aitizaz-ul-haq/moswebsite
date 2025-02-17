import ArrowCard from "./arrowcard";
import OtherCards from "./othercards";
export default function CardSection({ cards }) {
  return (
    <div className="cardcollection-card-section">
      {cards.map((card) =>
        card.type === "arrow" ? (
          // ✅ Special case: Arrow card
          <ArrowCard key={card.id} card={card} />
        ) : (
          // ✅ General case: Normal card
          <OtherCards key={card.id} card={card} />
        )
      )}
    </div>
  );
}
