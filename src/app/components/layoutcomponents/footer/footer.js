import "./styles/footer.css";
import footerdata from "./footerdata/footerdata.json";
import FooterTopSection from "./footercomponents/footertopsection";
import FooterBottomSection from "./footercomponents/footerbottomsection";
export default function Footer() {
  return (
    <div className="footer-container">
      <FooterTopSection footerdata={footerdata} />
      <FooterBottomSection footerdata={footerdata} />
    </div>
  );
}
