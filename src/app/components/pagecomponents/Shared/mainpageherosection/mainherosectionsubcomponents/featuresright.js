import "./styles/featuresright.css";
import FeaturesTextContainer from "./featuressubcomps/featurestextcontainer";

export default function FeaturesRight({ title, paragraph }) {
  return (
    <div className="featuresright-text-wrapper">
      <FeaturesTextContainer title={title} paragraph={paragraph} />
    </div>
  );
}
