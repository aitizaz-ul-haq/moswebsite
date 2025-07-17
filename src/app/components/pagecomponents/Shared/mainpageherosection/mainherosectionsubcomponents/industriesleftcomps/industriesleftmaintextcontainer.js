import IndustriesLeftHeadingSection from "./industiresleftheadingsection";
import IndustriesLeftParaSection from "./industriesleftparasection";
import IndustriesLeftButtonSection from "./industriesleftbuttonsection";

export default function IndustriesLeftMainTextContainer({ title, paragraph }) {
  return (
    <div className="industriesleft-text-container">
      <IndustriesLeftHeadingSection title={title} />
      <IndustriesLeftParaSection paragraph={paragraph} />
      <IndustriesLeftButtonSection />
    </div>
  );
}
