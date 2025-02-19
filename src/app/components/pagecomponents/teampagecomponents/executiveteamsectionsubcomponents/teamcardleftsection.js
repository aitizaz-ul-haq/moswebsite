import Image from "next/image";

export default function TeamCardLeftSection({ card }) {
  return (
    <div className="team-card-left-section">
      <Image
        className="executive-image"
        width={920}
        height={920}
        src={`/${card.image}`}
        alt={card.title}
      />
    </div>
  );
}
