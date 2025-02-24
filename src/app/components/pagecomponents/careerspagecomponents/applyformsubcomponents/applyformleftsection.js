import ApplyFormTitle from "./applyformleftsectioncomps/applyformtitle";
import ApplyFormInstructions from "./applyformleftsectioncomps/applyforminstructions";
import ApplyFormLogo from "./applyformleftsectioncomps/applyformlogo";

export default function ApplyFormLeftSection({ Applyformdata }) {
  return (
    <div className="applyform-left-section">
      <ApplyFormLogo Applyformdata={Applyformdata} />
      <ApplyFormTitle Applyformdata={Applyformdata} />
      <ApplyFormInstructions Applyformdata={Applyformdata} />
    </div>
  );
}
