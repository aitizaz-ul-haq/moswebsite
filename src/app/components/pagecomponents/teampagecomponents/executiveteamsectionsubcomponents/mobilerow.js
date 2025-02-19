import TeamCardLeftSection from "./teamcardleftsection";
import TeamCardRightSection from "./teamcardrightsection";

export default function MobileRow() {
  return (
    <div className="teamcards-cards-row-mobile">
      {executivecards.map((card) => (
        <div className="team-card" key={card.id}>
          <TeamCardLeftSection card={card} />
          <TeamCardRightSection card={card} />
        </div>
      ))}
    </div>
  );
}
