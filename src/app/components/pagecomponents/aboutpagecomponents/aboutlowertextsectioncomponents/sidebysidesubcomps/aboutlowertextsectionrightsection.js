export default function AboutLowerTextSectionRightSection({
  Aboutlowersectiondata,
}) {
  return (
    <div className="aboutlower-text-section-rightsection">
      <p className="aboutlower-rightsection-paraone font-nunito">
        {Aboutlowersectiondata.rightsectionparaone}
      </p>
      <p className="aboutlower-rightsection-paratwo font-nunito">
        {Aboutlowersectiondata.rightsectionparatwo}
      </p>
    </div>
  );
}
