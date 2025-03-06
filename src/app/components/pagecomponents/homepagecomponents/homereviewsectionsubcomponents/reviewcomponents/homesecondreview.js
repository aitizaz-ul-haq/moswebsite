export default function HomeSecondReview({ secondReview }) {
  return (
    <div className="homereviews-second-review">
      <p className="homereviews-content">{secondReview.reviewtext}</p>
      <div className="homereviews-identity-container">
        <p className="homereviews-designation">
          {secondReview.reviewerdesignation}
        </p>
        <p className="homereviews-name">{secondReview.reviewername}</p>
      </div>
    </div>
  );
}
