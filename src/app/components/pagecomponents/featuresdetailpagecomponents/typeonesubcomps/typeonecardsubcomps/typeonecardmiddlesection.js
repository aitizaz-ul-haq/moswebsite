import Image from "next/image";

export default function TypeOneCardMiddleSection({ card }) {
  return (
    <div className="typeoncard-collection-middlesection-container">
      <div className="typeoncard-collection-image-container">
        <Image
          className="typeoncard-collection-middle-image"
          width={290}
          height={320}
          src={`/${card.image}`}
          alt="Card Icon"
        />
      </div>
    </div>
  );
}
