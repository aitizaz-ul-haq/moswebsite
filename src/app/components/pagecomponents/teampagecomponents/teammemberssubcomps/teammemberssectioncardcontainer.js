import TeamMembersSectionImageContainer from "./teammemberssectionimagecontainer";
import TeamMembersSectionInfoContainer from "./teammemberssectioninfocontainer";

export default function TeamMembersSectionCardContainer({ membersArray }) {
  return (
    <div className="teammemebers-section-card-container">
      {membersArray.map((member, index) => (
        <div className="teammembers-section-card" key={index}>
          <TeamMembersSectionImageContainer
            memberpic={member.memeberpic}
            membername={member.name}
          />
          <TeamMembersSectionInfoContainer
            memeberheading={member.name}
            memberdesignation={member.designation}
          />
        </div>
      ))}
    </div>
  );
}
