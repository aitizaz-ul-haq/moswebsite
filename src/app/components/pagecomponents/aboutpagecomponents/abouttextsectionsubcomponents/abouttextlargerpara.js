export default function AboutTextLargerPara({ Abouttextsectiondata }) {
  let aboutlargerparagraph = Abouttextsectiondata.largersectionpara;
  return (
    <div className="abouttext-larger-para-container">
      {Object.values(aboutlargerparagraph).map((para, index) => {
        return (
          <p key={index} className="abouttext-larger-one font-nunito">
            {para}
          </p>
        );
      })}
    </div>
  );
}
