import "./styles/abouttextsection.css";
import AboutTextSectionLogo from "./abouttextsectionsubcomponents/abouttextsectionlogo";
import AboutTextSideBySide from "./abouttextsectionsubcomponents/abouttextsidebyside";
import AboutTextLargerPara from "./abouttextsectionsubcomponents/abouttextlargerpara";

export default function AboutTextSection({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-section-container">
      <AboutTextSectionLogo />
      <AboutTextSideBySide Abouttextsectiondata={Abouttextsectiondata} />
      {/* <AboutTextLargerPara Abouttextsectiondata={Abouttextsectiondata} /> */}
    </div>
  );
}
