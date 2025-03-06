import HomeFirstReview from "./reviewcomponents/homefirstreview";
import HomeSecondReview from "./reviewcomponents/homesecondreview";
import HomeThirdReview from "./reviewcomponents/homethirdreview";

export default function HomeReviewContainer({ Homereviewsectiondata }) {
  const reviews = Homereviewsectiondata.reviews;
  const firstReview = reviews[0];
  const secondReview = reviews[1];
  const thirdReview = reviews[2];

  return (
    <div className="homereviews-review-container">
      <div className="homereviews-reviews-bandone">
        <HomeFirstReview firstReview={firstReview} />
      </div>
      <div className="homereviews-reviews-bandtwo">
        <HomeSecondReview secondReview={secondReview} />
      </div>
      <div className="homereviews-reviews-bandone">
        <HomeThirdReview thirdReview={thirdReview} />
      </div>
    </div>
  );
}
