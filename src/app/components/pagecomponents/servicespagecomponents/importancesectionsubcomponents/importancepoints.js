import NumericImageSection from "./importancepointsubcomps/numericimagesection";
import PointHeadingSection from "./importancepointsubcomps/pointheadingsection";
import PointDescription from "./importancepointsubcomps/pointdescription";

export default function ImportancePoints({ pointsdata }) {
  return (
    <div className="importance-points-container">
      {pointsdata.map((point) => {
        return (
          <div key={point.id} className="importance-point">
            <NumericImageSection numberingimg={point.numberingimage} />
            <PointHeadingSection pointheading={point.pointheading} />
            <PointDescription pointdescription={point.pointdescription} />
          </div>
        );
      })}
    </div>
  );
}
