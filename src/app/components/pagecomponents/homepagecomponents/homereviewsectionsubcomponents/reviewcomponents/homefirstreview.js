export default function HomeFirstReview({ firstReview }) {
  return (
    <div className="homereviews-first-review">
      <p className="homereviews-content">{firstReview.reviewtext}</p>
      <div className="homereviews-identity-container">
        <p className="homereviews-designation">
          {firstReview.reviewerdesignation}
        </p>
        <p className="homereviews-name">{firstReview.reviewername}</p>
      </div>
    </div>
  );
}
