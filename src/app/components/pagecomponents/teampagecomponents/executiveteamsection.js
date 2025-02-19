import "./styles/executiveteamsection.css";

import TeamCardLeftSection from "./executiveteamsectionsubcomponents/teamcardleftsection";
import TeamCardRightSection from "./executiveteamsectionsubcomponents/teamcardrightsection";

export default function ExecutiveTeamSection({ executivecards }) {
  return (
    <div className="teamcards-container">
      <div className="teamcards-cards-row-mobile">
        {executivecards.map((card) => (
          <div className="team-card" key={card.id}>
            <TeamCardLeftSection card={card} />
            <TeamCardRightSection card={card} />
          </div>
        ))}
      </div>
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
    </div>
  );
}
