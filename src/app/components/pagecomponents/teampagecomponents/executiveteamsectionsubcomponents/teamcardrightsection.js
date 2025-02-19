import TeamCardTitle from "./teamcardrightsectioncomponents/teamcardtitle";
import TeamCardDesignation from "./teamcardrightsectioncomponents/teamcarddesignation";
import TeamCardDescription from "./teamcardrightsectioncomponents/teamcarddescription";
import TeamCardSocials from "./teamcardrightsectioncomponents/teamcardsocials";

export default function TeamCardRightSection({ card }) {
  return (
    <div className="team-card-right-section">
      <TeamCardTitle card={card} />
      <TeamCardDesignation card={card} />
      <TeamCardDescription card={card} />
      <TeamCardSocials card={card} />
    </div>
  );
}
