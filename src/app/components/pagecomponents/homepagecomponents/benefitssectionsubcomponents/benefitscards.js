
import SmallCardsHeadingComp from "./benefitscardsubcomps/smallcardsheadingcomp";
import SmallCardsParaComp from "./benefitscardsubcomps/smallcardsparacomp";
import SmallCardLink from "./benefitscardsubcomps/smallcardlink";

export default function BenefitsCards({ benefitcards }) {
  return (
    <>
      {benefitcards.map((card) => {
        return (
          <div key={card.id} className="homebenefits-smallcards">
            <SmallCardsHeadingComp cardheading={card.cardheading} />
            <SmallCardsParaComp carddescription={card.carddescription} />
            <SmallCardLink buttonlink={card.buttonlink} />
          </div>
        );
      })}
    </>
  );
}
