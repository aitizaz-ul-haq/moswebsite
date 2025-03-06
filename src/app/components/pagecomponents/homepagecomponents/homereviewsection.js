import "./styles/homereviewsection.css";
import HomeReviewTopSection from "./homereviewsectionsubcomponents/homereviewtopsection";
import HomeReviewContainer from "./homereviewsectionsubcomponents/homereviewcontainer";

export default function HomeReviewSection({ Homereviewsectiondata }) {
  return (
    <div className="homereviews-container">
      <HomeReviewTopSection Homereviewsectiondata={Homereviewsectiondata} />
      <HomeReviewContainer Homereviewsectiondata={Homereviewsectiondata} />
    </div>
  );
}
