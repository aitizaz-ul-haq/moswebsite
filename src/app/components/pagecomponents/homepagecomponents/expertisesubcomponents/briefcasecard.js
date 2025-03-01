import Image from "next/image";

export default function BriefCaseCard({ card }) {
  return (
    <div className="expertisecard-cardcollection-card briefcase-card">
      <div className="arrow-container">
        <Image
          className="briefcase-image"
          width={190}
          height={190}
          src={`/${card.image}`}
          alt="Arrow Icon"
        />
      </div>
    </div>
  );
}
