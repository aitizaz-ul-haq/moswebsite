import FooterBottomRightSectionListsection from "./footerbottomsubcomps/footerbottomrightsectionlistsection";
import FooterBottonLisenseSection from "./footerbottomsubcomps/footerbottonlisensesection";

export default function FooterBottomRightSection({ footerdata }) {
  return (
    <div className="footer-bottom-rightsection">
      <FooterBottomRightSectionListsection footerdata={footerdata} />
      <FooterBottonLisenseSection footerdata={footerdata} />
    </div>
  );
}
