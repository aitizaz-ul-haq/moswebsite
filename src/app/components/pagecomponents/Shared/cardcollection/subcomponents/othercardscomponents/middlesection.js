import Image from "next/image";

export default function MiddleSection({ card }) {
  return (
    <div className="card-collection-middlesection-container">
      <div className="card-collection-image-container">
        <Image
          className="card-collection-middle-image"
          width={290}
          height={320}
          src={`/${card.image}`}
          alt="Card Icon"
        />
      </div>
    </div>
  );
}
