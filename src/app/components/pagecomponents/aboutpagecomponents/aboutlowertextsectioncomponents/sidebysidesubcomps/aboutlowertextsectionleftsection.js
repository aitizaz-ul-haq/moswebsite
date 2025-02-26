export default function AboutLowerTextSectionLeftSection({
  Aboutlowersectiondata,
}) {
  return (
    <div className="aboutlower-text-section-leftsection">
      <p className="aboutlower-leftsection-paraone font-nunito">
        {Aboutlowersectiondata.leftsectionparaone}
      </p>
      <p className="aboutlower-leftsection-paratwo font-nunito">
        {Aboutlowersectiondata.leftsectionparatwo}
      </p>
    </div>
  );
}
