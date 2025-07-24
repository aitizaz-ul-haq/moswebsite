import TeamCenterHeadingSection from "./teamcenterheadingsection";
import TeamCenterParaSection from "./teamcenterparasection";
import TeamCenterButtonContainer from "./teamcenterbuttoncontainer";

export default function TeamCenterTestContainer({ title, paragraph }) {
  return (
    <div className="teamcenter-text-container">
      <TeamCenterHeadingSection title={title} />
      <TeamCenterParaSection paragraph={paragraph} />
      <TeamCenterButtonContainer />
    </div>
  );
}
