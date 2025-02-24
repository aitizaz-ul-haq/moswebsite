import "./styles/applyform.css";
import ApplyFormLeftSection from "./applyformsubcomponents/applyformleftsection";
import ApplyFormRightSection from "./applyformsubcomponents/applyformrightsection";

export default function ApplyForm({ Applyformdata }) {
  return (
    <div className="applyform-container">
      <ApplyFormLeftSection Applyformdata={Applyformdata} />
      <ApplyFormRightSection Applyformdata={Applyformdata} />
    </div>
  );
}
