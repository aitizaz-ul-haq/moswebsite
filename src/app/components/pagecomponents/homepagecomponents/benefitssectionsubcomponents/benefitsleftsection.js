import TopLeftLargeCard from "./topleftlargecard";
import BenefitsCards from "./benefitscards";

export default function BenefitsLeftSection({ Benefitssectiondata }) {
  let benefitcards = Benefitssectiondata.leftsectioncards;
  return (
    <div className="homebenefits-leftsection">
      <TopLeftLargeCard Benefitssectiondata={Benefitssectiondata} />
      <BenefitsCards benefitcards={benefitcards} />
    </div>
  );
}
