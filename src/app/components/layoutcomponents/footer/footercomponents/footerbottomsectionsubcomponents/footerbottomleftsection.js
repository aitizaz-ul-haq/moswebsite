import Image from "next/image";

export default function FooterBottomLeftSection({ footerdata }) {
  let socialmediaicons = footerdata.footer.socialMedia;

  return (
    <div className="footer-bottom-leftsection">
      <h4 className="footer-bottom-leftsection-title font-poppins">
        Follow us
      </h4>
      <div className="footer-bottom-social-icons">
        {socialmediaicons.map((icon, index) => (
          <Image
            key={index}
            className="footer-social-media-icon"
            width={icon.width}
            height={icon.height}
            src={icon.src}
            alt={icon.alt}
          />
        ))}
      </div>
    </div>
  );
}
