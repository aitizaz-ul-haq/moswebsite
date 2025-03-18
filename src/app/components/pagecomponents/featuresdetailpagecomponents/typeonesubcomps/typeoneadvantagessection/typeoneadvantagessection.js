import "../../styles/typeoneadvantagessection.css";
import Image from "next/image";

export default function TypeOneAdvantagesSection({ Advantagessectdata }) {
  let tag = Advantagessectdata.tagtext;
  let description = Advantagessectdata.description;
  let advcards = Advantagessectdata.cardsdata;
  return (
    <div className="typeoneadv-container">
      <div className="typeoneadv-topsection">
        <div className="typeoneadv-tag">{tag}</div>
        <p className="typeoneadv-text">{description}</p>
      </div>
      <div className="typeoneadv-bottomsection">
        {advcards.map((card) => {
          return (
            <div className="typeoneadv-advcard" key={card.id}>
              <Image
                src={card.numericimage}
                className="typeoneadv-numbers"
                width={20}
                height={20}
              />
              <h4 className="typeoneadv-advcardheading font-poppins">
                {card.cardheading}
              </h4>
              <p className="typeoneadv-advcarddescription font-nunito">
                {card.carddescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
