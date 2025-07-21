import RightParaOne from "./aboutparasectionsubcomps/rightparaone";
import RightParaTwo from "./aboutparasectionsubcomps/rightparatwo";

export default function RightPara({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-right-para-section">
      <RightParaOne rightparaone={Abouttextsectiondata.rightparaone} />
      <RightParaTwo rightparatwo={Abouttextsectiondata.rightparatwo} />
    </div>
  );
}
