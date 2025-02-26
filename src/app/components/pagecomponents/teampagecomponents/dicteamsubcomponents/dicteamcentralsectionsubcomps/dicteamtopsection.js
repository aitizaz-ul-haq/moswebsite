import Image from "next/image";

export default function DicTeamTopSection() {
  return (
    <div className="dicteam-top-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/asim.png"
      />
      <div className="dicteam-memebrs-details">
        <p className="dicteam-memebersname font-poppins">
          Muhammad Asim Rasheed
        </p>
        <p className="dicteam-memeberstitle font-poppins">
          Financial Controller
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
