import FooterTopLeftSectionUpperSection from "./footertopleftsectionuppersection";
import FooterTopLeftSectionLowerSection from "./footertopleftsectionlowersection";

export default function FooterTopLeftSection({ footerdata }) {
  return (
    <div className="footer-top-leftsection">
      <FooterTopLeftSectionUpperSection footerdata={footerdata} />
      <FooterTopLeftSectionLowerSection footerdata={footerdata} />
    </div>
  );
}
