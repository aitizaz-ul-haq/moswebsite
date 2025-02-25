export default function LeftPara({ Abouttextsectiondata }) {
  return (
    <div className="abouttext-left-para-section">
      <p className="sidebyside-leftpara-one font-nunito">
        {Abouttextsectiondata.leftparaone}
      </p>
      <p className="sidebyside-leftpara-two font-nunito">
        {Abouttextsectiondata.leftparatwo}
      </p>
    </div>
  );
}
