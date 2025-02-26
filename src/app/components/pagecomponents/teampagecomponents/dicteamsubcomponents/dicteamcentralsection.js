import DicTeamTopSection from "./dicteamcentralsectionsubcomps/dicteamtopsection";
import DicTeamMidSection from "./dicteamcentralsectionsubcomps/dicteammidsection";
import DicTeamBottomSection from "./dicteamcentralsectionsubcomps/dicteambottomsection";

export default function DicTeamCentralSection() {
  return (
    <div className="dicteam-central-section">
      <DicTeamTopSection />
      <DicTeamMidSection />
      <DicTeamBottomSection />
    </div>
  );
}
