import Image from "next/image";
import TeamMembersDetailsSection from "./temmebersdetailssection";

export default function DicTeamBottomSection({ Dicteamdata }) {
  let membersdata = Dicteamdata.dicteamsmemebersdata.bottomsectiondata;
  return (
    <div className="dicteam-bottom-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/arslan.png"
        alt="arslan"
      />
      <TeamMembersDetailsSection membersdata={membersdata} />
    </div>
  );
}
