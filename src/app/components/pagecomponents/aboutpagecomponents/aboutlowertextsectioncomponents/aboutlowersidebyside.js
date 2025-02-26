import AboutLowerTextSectionLeftSection from "./sidebysidesubcomps/aboutlowertextsectionleftsection";
import AboutLowerTextSectionRightSection from "./sidebysidesubcomps/aboutlowertextsectionrightsection";

export default function AboutLowerSideBySide({ Aboutlowersectiondata }) {
  return (
    <div className="aboutlower-text-section-sidebyside-container">
      <AboutLowerTextSectionLeftSection
        Aboutlowersectiondata={Aboutlowersectiondata}
      />
      <AboutLowerTextSectionRightSection
        Aboutlowersectiondata={Aboutlowersectiondata}
      />
    </div>
  );
}
