import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-left-logosection">
      <Link href="/">
        <Image src="/mos_website.png" alt="FGK logo" width={190} height={48} />
      </Link>
    </div>
  );
}
