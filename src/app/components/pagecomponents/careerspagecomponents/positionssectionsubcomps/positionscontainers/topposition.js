export default function TopPosition({ toppositiondata }) {
  return (
    <div className="top-position">
      <div className="position-left-section">
        <h3 className="position-heading font-poppins">
          {toppositiondata.title}
        </h3>
        <p className="position-description font-nunito">
          {toppositiondata.description}
        </p>
      </div>
      <div className="position-right-section">
        {/* <button className="positions-details-button font-nunito">
          DETAILS
        </button> */}
      </div>
    </div>
  );
}
