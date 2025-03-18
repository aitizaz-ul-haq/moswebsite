import AdvCardParagraphSection from "./advcardcomps/advcardparagraphsection";
import AdvCardHeadingSection from "./advcardcomps/advcardheadingsection";
import AdvCardmagesSection from "./advcardcomps/advicardmagesection";

export default function TypeOneAdvantagesBottomSection({ advcards }) {
  return (
    <div className="typeoneadv-bottomsection">
      {advcards.map((card) => {
        return (
          <div className="typeoneadv-advcard" key={card.id}>
            <AdvCardmagesSection image={card.numericimage} />
            <AdvCardHeadingSection heading={card.cardheading} />
            <AdvCardParagraphSection paragraph={card.carddescription} />
          </div>
        );
      })}
    </div>
  );
}
