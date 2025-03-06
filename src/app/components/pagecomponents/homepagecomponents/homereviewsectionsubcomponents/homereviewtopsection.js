export default function HomeReviewTopSection({ Homereviewsectiondata }) {
  return (
    <>
      <div className="homereviews-heading">
        {Homereviewsectiondata.homereviewheading}
      </div>
      <div className="homereviews-tag">
        {Homereviewsectiondata.homereviewtag}
      </div>
      <p className="homereviews-description">
        {Homereviewsectiondata.homereviewdescription}
      </p>
    </>
  );
}
