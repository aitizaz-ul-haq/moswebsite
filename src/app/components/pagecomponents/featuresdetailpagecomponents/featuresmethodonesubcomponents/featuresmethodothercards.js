import MethodeCardBottomSection from "./featuresmethodecardscomps/methodecardbottomsection";
import MethodeCardMiddleSection from "./featuresmethodecardscomps/methodecardmiddlesection";
import MethodeCardTopSection from "./featuresmethodecardscomps/methodecardtopsection";

export default function FeaturesMethodOtherCards({ card }) {
  return (
    <div className="featuresmethod-cardcollection-card">
      <MethodeCardMiddleSection card={card} />
      <MethodeCardTopSection card={card} />
      <MethodeCardBottomSection card={card} />
    </div>
  );
}
