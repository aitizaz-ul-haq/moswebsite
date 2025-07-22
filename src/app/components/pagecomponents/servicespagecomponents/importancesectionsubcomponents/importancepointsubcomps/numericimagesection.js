import Image from "next/image";

export default function NumericImageSection({numberingimg}) {
  return (
    <div className="importance-point-number">
      <Image
        className="importance-number-image"
        width={1920}
        height={1920}
        src={numberingimg}
      />
    </div>
  );
}
