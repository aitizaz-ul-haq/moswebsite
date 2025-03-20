import MthCardMagesSection from "./mthcardcomps/mthcardmagessection";
import MthCardHeadingSection from "./mthcardcomps/mthcardheadingsection";
import MthCardParagraphSection from "./mthcardcomps/mthcardparagraphsection";

export default function TypeTwoMthBottomSection({ advcards }) {
  return (
    <div className="typeoneadv-bottomsection">
      {advcards.map((card) => {
        return (
          <div className="typeoneadv-advcard" key={card.id}>
            <MthCardMagesSection image={card.numericimage} />
            <MthCardHeadingSection heading={card.cardheading} />
            <MthCardParagraphSection paragraph={card.carddescription} />
          </div>
        );
      })}
    </div>
  );
}
