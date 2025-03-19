import Image from "next/image";

export default function TopLeftLargeCard({ Benefitssectiondata }) {
  return (
    <div className="homebenefits-topleft-largecard">
      <div className="largecard-heading font-poppins">
        {Benefitssectiondata.benefitsheading}
      </div>
      <Image
        className="largecard-image"
        width={520}
        height={520}
        src="/benefits-icon.png"
        alt="benefits_icon"
      />
    </div>
  );
}
