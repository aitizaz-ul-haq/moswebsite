export default function HomeReviewTopSection({ Homereviewsectiondata }) {
  return (
    <>
      <div className="homereviews-heading font-poppins">
        {Homereviewsectiondata.homereviewheading}
      </div>
      <div className="homereviews-text-section">
        <div className="homereviews-text-container">
          <div className="homereviews-tag font-poppins">
            {Homereviewsectiondata.homereviewtag}
          </div>
          <p className="homereviews-description font-nunito">
            {Homereviewsectiondata.homereviewdescription}
          </p>
        </div>
      </div>
    </>
  );
}
