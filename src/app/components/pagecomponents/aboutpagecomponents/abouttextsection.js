import "./styles/abouttextsection.css";
import AboutTextSectionLogo from "./abouttextsectionsubcomponents/abouttextsectionlogo";
import AboutTextSideBySide from "./abouttextsectionsubcomponents/abouttextsidebyside";

export default function AboutTextSection({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-section-container">
      <AboutTextSectionLogo />
      <AboutTextSideBySide Abouttextsectiondata={Abouttextsectiondata} />
    </div>
  );
}
