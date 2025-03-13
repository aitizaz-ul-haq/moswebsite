import "./styles/servicesadvantagessection.css";

import ServicesAdvHeading from "./servicesadvsectionsubcomponents/servicesadvheading";
import ServicesAdvSideBySideSection from "./servicesadvsectionsubcomponents/servicesadvsidebysidesection";

export default function ServicesAdvantagesSection({ Advantagessectiondata }) {
  let itemspoints = Advantagessectiondata.advanatageslistitems;

  return (
    <div className="advantages-container">
      <ServicesAdvHeading Advantagessectiondata={Advantagessectiondata} />
      <ServicesAdvSideBySideSection itemspoints={itemspoints} />
    </div>
  );
}
