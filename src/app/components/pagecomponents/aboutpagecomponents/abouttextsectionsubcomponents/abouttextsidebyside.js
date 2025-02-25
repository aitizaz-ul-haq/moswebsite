import LeftPara from "./leftpara";
import RightPara from "./rightpara";

export default function AboutTextSideBySide({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-sidebyside-containers">
      <LeftPara Abouttextsectiondata={Abouttextsectiondata} />
      <RightPara Abouttextsectiondata={Abouttextsectiondata} />
    </div>
  );
}
