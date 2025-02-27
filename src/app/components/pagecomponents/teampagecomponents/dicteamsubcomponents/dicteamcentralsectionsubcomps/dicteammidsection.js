import Image from "next/image";
import TeamMembersDetailsSection from "./temmebersdetailssection";

export default function DicTeamMidSection({ Dicteamdata }) {
  let membersdata = Dicteamdata.dicteamsmemebersdata.midsectiondata;
  return (
    <div className="dicteam-mid-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/atz.png"
      />
      <TeamMembersDetailsSection membersdata={membersdata} />
    </div>
  );
}
