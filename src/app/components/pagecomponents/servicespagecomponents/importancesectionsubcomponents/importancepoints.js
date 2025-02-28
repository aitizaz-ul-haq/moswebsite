import Image from "next/image";
export default function ImportancePoints({ pointsdata }) {
  return (
    <div className="importance-points-container">
      {pointsdata.map((point) => {
        return (
          <div key={point.id} className="importance-point">
            <div className="importance-point-number">
              <Image
                className="importance-number-image"
                width={1920}
                height={1920}
                src={point.numberingimage}
              />
            </div>
            <div className="importance-point-heading font-poppins">
              {point.pointheading}
            </div>
            <div className="importance-point-description font-nunito">
              {point.pointdescription}
            </div>
          </div>
        );
      })}
    </div>
  );
}
