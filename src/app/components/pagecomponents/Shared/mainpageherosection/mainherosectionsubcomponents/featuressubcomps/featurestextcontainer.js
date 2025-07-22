import FeaturesHeadingSection from "./featuresheadingsection";
import FeaturesParaSection from "./featuresparasection";
import FeaturesButtonSection from "./featuresbuttonsection";

export default function FeaturesTextContainer({ title, paragraph }) {
  return (
    <div className="featuresright-text-container">
      <FeaturesHeadingSection title={title} />
      <FeaturesParaSection paragraph={paragraph} />
      <FeaturesButtonSection />
    </div>
  );
}
