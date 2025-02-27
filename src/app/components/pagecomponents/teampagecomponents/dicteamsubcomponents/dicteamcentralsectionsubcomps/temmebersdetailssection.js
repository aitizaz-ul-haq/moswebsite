import Image from "next/image";

export default function TeamMembersDetailsSection({ membersdata }) {
  return (
    <div className="dicteam-memebrs-details">
      <p className="dicteam-memebersname font-poppins">{membersdata.name}</p>
      <p className="dicteam-memeberstitle font-poppins">
        {membersdata.designation}
      </p>
      <div className="dicteam-socials-container">
        <Image
          className="dicteam-socila-media-icons"
          height={920}
          width={920}
          src="/dicteam_top_socila_linkdin.png"
        />
        <Image
          className="dicteam-socila-media-icons"
          height={920}
          width={920}
          src="/dicteam_top_socila_facebook.png"
        />
      </div>
    </div>
  );
}
