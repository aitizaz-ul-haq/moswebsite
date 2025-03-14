import TypeOneOtherCards from "./typeoneothercards";
export default function TypeOneCardSect({ cards }) {
  return (
    <div className="typeonecard-card-section">
      {cards.map((card) => (
        // ✅ General case: Normal card
        <TypeOneOtherCards key={card.id} card={card} />
      ))}
    </div>
  );
}
