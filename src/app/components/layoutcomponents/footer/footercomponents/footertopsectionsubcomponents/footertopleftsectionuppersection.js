import FooterDescriptionContainer from "./footerleftuppersectionsubcomps/footerdescriptioncontainer";
import FooterLogoContainer from "./footerleftuppersectionsubcomps/footerlogocontainer";

export default function FooterTopLeftSectionUpperSection({ footerdata }) {
  let logodata = footerdata.footer.logo;
  let logodescription = footerdata.footer.description;

  return (
    <div className="footer-top-leftsection-upper-section">
      <FooterLogoContainer footerlogo={logodata.src} />
      <FooterDescriptionContainer footerdescription={logodescription.text} />
    </div>
  );
}
