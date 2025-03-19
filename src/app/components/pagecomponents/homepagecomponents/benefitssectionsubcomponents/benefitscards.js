import Image from "next/image";

export default function BenefitsCards({ benefitcards }) {
  return (
    <>
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
                alt="card_icon"
              />
            </a>
          </div>
        );
      })}
    </>
  );
}
