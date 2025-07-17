import Image from "next/image";
import Link from "next/link";

export default function SmallCardLink({ buttonlink }) {
  return (
    <Link href={buttonlink} className="smallcards-link font-nunito" title="learn more about our services">
        Our Services      
      <Image
        className="righticon"
        width={20}
        height={20}
        src="/right icon.png"
        alt="card_icon"
      />
    </Link>
  );
}
