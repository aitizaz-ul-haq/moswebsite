import Image from "next/image";

export default function AdvCardmagesSection({ image }) {
  return (
    <>
      <Image
        src={image}
        className="typeoneadv-numbers"
        width={1720}
        height={1720}
      />
    </>
  );
}
