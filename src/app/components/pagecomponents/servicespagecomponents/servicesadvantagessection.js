import "./styles/servicesadvantagessection.css";
import Image from "next/image";

export default function ServicesAdvantagesSection({ Advantagessectiondata }) {
  let itemspoints = Advantagessectiondata.advanatageslistitems;

  return (
    <div className="advantages-container">
      <div className="advantages-heading font-poppins">
        {Advantagessectiondata.advantagesheading}
      </div>
      <div className="advantages-sidebyside-container">
        <div className="advantages-sidebyside-leftsection">
          {/* <Image
            src="/advantages_banner.png"
            className="advanteges-leftsection-banner"
            width={400}
            height={900}
          /> */}
        </div>
        <div className="advantages-sidebyside-rightsection">
          <div className="advantages-list-container">
            {itemspoints.map((item, index) => {
              return (
                <div className="advantages-list-item" key={index}>
                  <Image
                    src="/advantages-bullet.png"
                    className="listitem-bullet"
                    width={20}
                    height={20}
                  />
                  <p className="advantages-text-point font-nunito">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
