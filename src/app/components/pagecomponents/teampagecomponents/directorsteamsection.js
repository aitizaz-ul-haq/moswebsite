import "./styles/directorsteamsection.css";
import DicTeamCentralSection from "./dicteamsubcomponents/dicteamcentralsection";

export default function DirectorsTeamSection({ Dicteamdata }) {
  return (
    <div className="dicteam-section-container">
      <DicTeamCentralSection Dicteamdata={Dicteamdata} />
    </div>
  );
}
