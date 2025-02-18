import EcardTopSection from "./expertiseothercardscomponents/ecardtopsection";
import EcardMiddleSection from "./expertiseothercardscomponents/ecardmiddlesection";
import EcardBottomSection from "./expertiseothercardscomponents/ecardbottomsection";
export default function ExpertiseOtherCards({ card }) {
  return (
    <div className="expertisecard-cardcollection-card">
      <EcardMiddleSection card={card} />
      <EcardTopSection card={card} />
      <EcardBottomSection card={card} />
    </div>
  );
}
