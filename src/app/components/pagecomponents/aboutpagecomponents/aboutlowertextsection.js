import "./styles/aboutlowertextsection.css";
import AboutLowerHeading from "./aboutlowertextsectioncomponents/aboutlowerheading";
import AboutLowerSideBySide from "./aboutlowertextsectioncomponents/aboutlowersidebyside";
export default function AboutLowerTextSection({ Aboutlowersectiondata }) {
  return (
    <div className="aboutlower-text-section-container">
      <AboutLowerHeading Aboutlowersectiondata={Aboutlowersectiondata} />
      <AboutLowerSideBySide Aboutlowersectiondata={Aboutlowersectiondata} />
    </div>
  );
}
