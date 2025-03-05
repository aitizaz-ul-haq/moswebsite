import "./styles/benefitssection.css";
import BenefitsLeftSection from "./benefitssectionsubcomponents/benefitsleftsection";

export default function BenefitsSection({ Benefitssectiondata }) {
  return (
    <div className="homebenefits-container">
      <BenefitsLeftSection Benefitssectiondata={Benefitssectiondata} />
    </div>
  );
}
