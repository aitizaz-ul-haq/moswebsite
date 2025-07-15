import "./styles/teammemberssection.css";
import TeamMembersSectionCardContainer from "./teammemberssubcomps/teammemberssectioncardcontainer";

export default function TeamMemebersSection({teammembersdata}) {
  const membersArray = Object.values(teammembersdata);

  return (
    <div className="teammemebers-section-container">
      <TeamMembersSectionCardContainer membersArray={membersArray} />
    </div>
  );
}
