export default function RightPara({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-right-para-section">
      <p className="sidebyside-rightpara-one font-nunito">
        {Abouttextsectiondata.rightparaone}
      </p>
      <p className="sidebyside-rightpara-two font-nunito">
        {Abouttextsectiondata.rightparatwo}
      </p>
    </div>
  );
}
