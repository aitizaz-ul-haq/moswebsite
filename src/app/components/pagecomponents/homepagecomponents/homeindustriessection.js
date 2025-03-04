import "./styles/homeindustriessection.css";

import HomeIndHeading from "./homeindsubcomponents/homeindheading";
import HomeIndDescription from "./homeindsubcomponents/homeinddescription";
import HomeIndGrid from "./homeindsubcomponents/homeindgrid";

export default function HomeIndustriesSection({ Homeindustriessectiondata }) {
  return (
    <div className="homepage-industries-section-container">
      <div className="homepage-industries-section-text-container">
        <HomeIndHeading Homeindustriessectiondata={Homeindustriessectiondata} />
        <HomeIndDescription
          Homeindustriessectiondata={Homeindustriessectiondata}
        />
        <HomeIndGrid Homeindustriessectiondata={Homeindustriessectiondata} />
      </div>
    </div>
  );
}
