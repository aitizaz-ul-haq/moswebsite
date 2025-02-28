import "./styles/homeadvantegessection.css";
import Image from "next/image";

export default function HomeAdvantagesSection({ Homeadvantegessectiondata }) {
  let homeadvcards = Homeadvantegessectiondata.homeadvantagescards;
  return (
    <div className="homeadvantages-container">
      <h4 className="homeadvantages-heading font-poppins">
        {Homeadvantegessectiondata.homeadvantegesheading}
      </h4>
      <div className="homeadvantages-tag font-poppins">Excellence</div>
      <div className="homeadvanteges-card-container">
        <div className="homeadvanteges-card-section">
          {homeadvcards.map((card) => {
            return (
              <div key={card.id} className="homeadvantegs-card">
                <Image
                  src="/advantages-bullet.png"
                  className="homeadvanteges-bullet"
                  width={920}
                  height={920}
                />
                <p className="homeadvanteges-description font-nunito">
                  {card.homeadvantegespoint}
                </p>
              </div>
            );
          })}
        </div>
        <div className="homeadvanteges-card-logosection">
          <Image
            src="/company-logo.png"
            className="homeadvanteges-logo"
            width={920}
            height={920}
          />
        </div>
      </div>
    </div>
  );
}
