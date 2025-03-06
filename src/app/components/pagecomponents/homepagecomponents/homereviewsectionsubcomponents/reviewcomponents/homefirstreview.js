export default function HomeFirstReview({ firstReview }) {
  return (
    <div className="homereviews-first-review">
      <p className="homereviews-content font-poppins">
        {firstReview.reviewtext}
      </p>
      <div className="homereviews-identity-section">
        <div className="homereviews-identity-container">
          <p className="homereviews-designation font-nunito">
            {firstReview.reviewerdesignation}
          </p>
          <p className="homereviews-name font-nunito">
            {firstReview.reviewername}
          </p>
        </div>
      </div>
    </div>
  );
}
