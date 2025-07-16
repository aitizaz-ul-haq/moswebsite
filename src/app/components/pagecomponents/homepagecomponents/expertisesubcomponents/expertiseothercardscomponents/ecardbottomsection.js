import EcardBottomText from "./ecardsubcomps/ecardbottomtext";
import EcardBottomSectionButton from "./ecardsubcomps/ecardbottomsectionbutton";

export default function EcardBottomSection({ card }) {
  return (
    <div className="expertisecard-card-collection-bottomsection-container">
      <EcardBottomText bottomtext={card.bottomtext} />
      <EcardBottomSectionButton />
    </div>
  );
}
