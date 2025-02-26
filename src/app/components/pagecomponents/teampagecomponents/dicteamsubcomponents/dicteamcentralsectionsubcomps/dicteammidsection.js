import Image from "next/image";

export default function DicTeamMidSection() {
  return (
    <div className="dicteam-mid-section module">
      <Image
        className="dicteam-member-image"
        height={920}
        width={920}
        src="/atz.png"
      />
      <div className="dicteam-memebrs-details">
        <p className="dicteam-memebersname font-poppins">Aitaizaz-ul-haq</p>
        <p className="dicteam-memeberstitle font-poppins">
          Senior Full Stack Web Developer/Designer
        </p>
        <div className="dicteam-socials-container">
          <Image
            className="dicteam-socila-media-icons"
            height={920}
            width={920}
            src="/executive_social_icon_linkdin.png"
          />
          <Image
            className="dicteam-socila-media-icons"
            height={920}
            width={920}
            src="/executive_social_icon_facebook.png"
          />
        </div>
      </div>
    </div>
  );
}
