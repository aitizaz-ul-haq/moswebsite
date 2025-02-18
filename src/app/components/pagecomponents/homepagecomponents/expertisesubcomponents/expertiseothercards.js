import EcardTopSection from "./expertiseothercardscomponents/ecardtopsection";
import EcardMiddleSection from "./expertiseothercardscomponents/ecardmiddlesection";
import EcardBottomSection from "./expertiseothercardscomponents/ecardbottomsection";
export default function ExpertiseOtherCards({ card }) {
  return (
    <div className="expertisecard-cardcollection-card">
      <EcardTopSection card={card} />
      <EcardMiddleSection card={card} />
      <EcardBottomSection card={card} />
    </div>
  );
}
