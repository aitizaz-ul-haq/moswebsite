import "./styles/directorsteamsection.css";
import Image from "next/image";

export default function DirectorsTeamSection() {
  return (
    <div className="dicteam-section-container">
      <div className="dicteam-central-section">
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
      </div>
    </div>
  );
}
