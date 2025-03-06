export default function HomeThirdReview({ thirdReview }) {
  return (
    <div className="homereviews-third-review">
      <p className="homereviews-content font-poppins">
        {thirdReview.reviewtext}
      </p>
      <div className="homereviews-identity-section">
        <div className="homereviews-identity-container">
          <p className="homereviews-designation font-nunito">
            {thirdReview.reviewerdesignation}
          </p>
          <p className="homereviews-name font-nunito">
            {thirdReview.reviewername}
          </p>
        </div>
      </div>
    </div>
  );
}
