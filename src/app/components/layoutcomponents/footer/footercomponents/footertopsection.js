import FooterTopLeftSection from "./footertopsectionsubcomponents/footertopleftsection";
import FooterTopRightSection from "./footertopsectionsubcomponents/footertoprightsection";

export default function FooterTopSection({ footerdata }) {
  return (
    <div className="footer-top-section">
      <FooterTopLeftSection footerdata={footerdata} />
      <FooterTopRightSection footerdata={footerdata} />
    </div>
  );
}
