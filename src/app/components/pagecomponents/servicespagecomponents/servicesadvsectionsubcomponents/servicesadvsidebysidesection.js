import ServicesAdvSideBySideRightSection from "./servicesadvsidebysiderightsection";

export default function ServicesAdvSideBySideSection({ itemspoints }) {
  return (
    <div className="advantages-sidebyside-container">
      <div className="advantages-sidebyside-leftsection"></div>
      <ServicesAdvSideBySideRightSection itemspoints={itemspoints} />
    </div>
  );
}
