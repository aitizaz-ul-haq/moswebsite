import "./styles/teamcenter.css";
import TeamCenterTestContainer from "./teamsubcomps/teamcentertestcontainer";

export default function TeamCenter({ title, paragraph }) {
  return (
    <div className="teamcenter-text-wrapper">
      <TeamCenterTestContainer title={title} paragraph={paragraph} />
    </div>
  );
}
