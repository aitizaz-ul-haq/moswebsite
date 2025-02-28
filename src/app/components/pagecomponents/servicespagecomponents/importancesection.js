import "./styles/importancesection.css";
import Image from "next/image";
import Importancesectiondata from "../../../data/servicesdata/importancesectiondata.json";

export default function ImportanceSection() {
  let pointsdata = Importancesectiondata.importancepoints;
  return (
    <div className="importance-container">
      <div className="importance-text-section-container">
        <h3 className="importance-tag font-poppins">Importance</h3>
        <p className="importance-description font-poppins">
          {Importancesectiondata.sectiontext}
        </p>
      </div>
      <div className="importance-points-container">
        {pointsdata.map((point) => {
          return (
            <div key={point.id} className="importance-point">
              <div className="importance-point-number">
                <Image
                  className="importance-number-image"
                  width={20}
                  height={20}
                  src={point.numberingimage}
                />
              </div>
              <div className="importance-point-heading font-poppins">
                {point.pointheading}
              </div>
              <div className="importance-point-description font-nunito">
                {point.pointdescription}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
