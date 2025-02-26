import "../styles/calltoaction.css";
import LeftTextSection from "./calltoactioncomponents/lefttextsection";
import RightTextSection from "./calltoactioncomponents/righttextsection";

export default function CallToAction({ Calltoactiondata }) {
  return (
    <div className="calltoaction-container">
      <LeftTextSection Calltoactiondata={Calltoactiondata} />
      <RightTextSection Calltoactiondata={Calltoactiondata} />
    </div>
  );
}
