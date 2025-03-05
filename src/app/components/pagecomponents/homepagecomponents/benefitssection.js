import "./styles/benefitssection.css";
import Image from "next/image";

export default function BenefitsSection({ Benefitssectiondata }) {
  let benefitcards = Benefitssectiondata.leftsectioncards;
  return (
    <div className="homebenefits-container">
      <div className="homebenefits-leftsection">
        <div className="homebenefits-topleft-largecard">
          <div className="largecard-heading font-poppins">
            {Benefitssectiondata.benefitsheading}
          </div>
          <Image
            className="largecard-image"
            width={520}
            height={520}
            src="/benefits-icon.png"
          />
        </div>
        {benefitcards.map((card) => {
          return (
            <div key={card.id} className="homebenefits-smallcards">
              <h3 className="smallcards-heading font-poppins">
                {card.cardheading}
              </h3>
              <p className="smallcards-description font-nunito">
                {card.carddescription}
              </p>
              <a className="smallcards-link font-nunito">
                {card.buttonlink}
                <Image
                  className="righticon"
                  width={20}
                  height={20}
                  src="/right icon.png"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
