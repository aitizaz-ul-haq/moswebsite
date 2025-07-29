import ResourceList from "./footerlists/resourceslist";
// import SupportList from "./footerlists/supportlist";
import EssentialLinksList from "./footerlists/essentiallinkslist";

export default function FooterTopLeftSectionLowerSection({ footerdata }) {
  let resourceslistdata = footerdata.resourceslist;
  // let supportlistdata = footerdata.supportlist;
  let essentialLinkslistdata = footerdata.essentialLinkslist;

  return (
    <div className="footer-top-leftsection-lower-section">
      <div className="footer-linklist-container">
        <ResourceList resourceslistdata={resourceslistdata} />
        {/* <SupportList supportlistdata={supportlistdata} /> */}
        <EssentialLinksList essentialLinkslistdata={essentialLinkslistdata} />
      </div>
    </div>
  );
}
