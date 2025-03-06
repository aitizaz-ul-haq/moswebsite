export default function HomeSecondReview({ secondReview }) {
  return (
    <div className="homereviews-second-review">
      <p className="homereviews-content font-poppins">
        {secondReview.reviewtext}
      </p>
      <div className="homereviews-identity-section">
        <div className="homereviews-identity-container">
          <p className="homereviews-designation font-nunito">
            {secondReview.reviewerdesignation}
          </p>
          <p className="homereviews-name font-nunito">
            {secondReview.reviewername}
          </p>
        </div>
      </div>
    </div>
  );
}
