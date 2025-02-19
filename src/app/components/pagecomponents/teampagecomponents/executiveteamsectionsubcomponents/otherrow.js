import TeamCardRightSection from "./teamcardrightsection";
import TeamCardLeftSection from "./teamcardleftsection";

export default function OtherRow() {
  return (
    <div className="teamcards-cards-row">
      {executivecards.map((card, index) => (
        <div className="team-card" key={card.id}>
          {index % 2 === 0 ? (
            <>
              <TeamCardLeftSection card={card} />
              <TeamCardRightSection card={card} />
            </>
          ) : (
            <>
              <TeamCardRightSection card={card} />
              <TeamCardLeftSection card={card} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
