import TopSectionHeadingText from "./othercardscomponenetssubcomps/topsectionheadingtext";
import TopSectionParaSection from "./othercardscomponenetssubcomps/topsectionparasection";

export default function TopSection({ card }) {
  return (
    <div className="card-collection-topsection-container">
      <TopSectionHeadingText firsttext={card.firsttext} />
      <TopSectionParaSection secondtext={card.secondtext} />
    </div>
  );
}
