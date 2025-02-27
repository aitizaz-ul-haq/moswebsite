import DicTeamTopSection from "./dicteamcentralsectionsubcomps/dicteamtopsection";
import DicTeamMidSection from "./dicteamcentralsectionsubcomps/dicteammidsection";
import DicTeamBottomSection from "./dicteamcentralsectionsubcomps/dicteambottomsection";

export default function DicTeamCentralSection({ Dicteamdata }) {
  return (
    <div className="dicteam-central-section">
      <DicTeamTopSection Dicteamdata={Dicteamdata} />
      <DicTeamMidSection Dicteamdata={Dicteamdata} />
      <DicTeamBottomSection Dicteamdata={Dicteamdata} />
    </div>
  );
}
