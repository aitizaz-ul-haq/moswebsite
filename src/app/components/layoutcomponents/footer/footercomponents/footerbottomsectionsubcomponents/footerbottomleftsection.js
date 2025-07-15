import FooterBottomLeftSectionTitle from "./footerbottomsubcomps/footerbottomleftsectiontitle";
import FooterBottomSocialMediaIcons from "./footerbottomsubcomps/footerbottomsocialmediaicons";

export default function FooterBottomLeftSection({ footerdata }) {
  let socialmediaicons = footerdata.footer.socialMedia;

  return (
    <div className="footer-bottom-leftsection">
      <FooterBottomLeftSectionTitle />
      <FooterBottomSocialMediaIcons socialmediaicons={socialmediaicons} />
    </div>
  );
}
