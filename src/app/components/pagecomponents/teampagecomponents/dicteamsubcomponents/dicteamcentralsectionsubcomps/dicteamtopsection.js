import Image from "next/image";
import TeamMembersDetailsSection from "./temmebersdetailssection";

export default function DicTeamTopSection({ Dicteamdata }) {
  let membersdata = Dicteamdata.dicteamsmemebersdata.topsectiondata;
  return (
    <div className="dicteam-top-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/asim.png"
        alt="asim"
      />
      <TeamMembersDetailsSection membersdata={membersdata} />
    </div>
  );
}
