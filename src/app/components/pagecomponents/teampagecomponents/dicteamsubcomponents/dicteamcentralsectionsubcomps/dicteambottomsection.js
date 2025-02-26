import Image from "next/image";

export default function DicTeamBottomSection() {
  return (
    <div className="dicteam-bottom-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/arslan.png"
      />
      <div className="dicteam-memebrs-details">
        <p className="dicteam-memebersname font-poppins">
          Syed Muhammad Arslan Ahmed
        </p>
        <p className="dicteam-memeberstitle font-poppins">
          Finance & Admin Manager
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
    </div>
  );
}
