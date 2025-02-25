import Image from "next/image";

export default function FooterTopLeftSectionUpperSection({ footerdata }) {
  let logodata = footerdata.footer.logo;
  let logodescription = footerdata.footer.description;

  return (
    <div className="footer-top-leftsection-upper-section">
      <div className="footer-logo-container">
        <Image
          className="footer-logo-container"
          width={1922}
          height={1922}
          src={logodata.src}
        />
      </div>
      <div className="footer-description-container">
        <p className="footer-description font-nunito">{logodescription.text}</p>
      </div>
    </div>
  );
}
