export default function HomeThirdReview({ thirdReview }) {
  return (
    <div className="homereviews-third-review">
      <p className="homereviews-content">{thirdReview.reviewtext}</p>
      <div className="homereviews-identity-container">
        <p className="homereviews-designation">
          {thirdReview.reviewerdesignation}
        </p>
        <p className="homereviews-name">{thirdReview.reviewername}</p>
      </div>
    </div>
  );
}
