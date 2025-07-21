import LeftParaOne from "./aboutparasectionsubcomps/leftparaone";
import LeftParaTwo from "./aboutparasectionsubcomps/leftparatwo";

export default function LeftPara({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-left-para-section">
      <LeftParaOne leftparaone={Abouttextsectiondata.leftparaone} />
      <LeftParaTwo leftparatwo={Abouttextsectiondata.leftparatwo} />
    </div>
  );
}
