import FooterBottomLeftSection from "./footerbottomsectionsubcomponents/footerbottomleftsection";
import FooterBottomRightSection from "./footerbottomsectionsubcomponents/footerbottomrightsection";

export default function FooterBottomSection({ footerdata }) {
  return (
    <div className="footer-bottom-section">
      <FooterBottomLeftSection footerdata={footerdata} />
      <FooterBottomRightSection footerdata={footerdata} />
    </div>
  );
}
