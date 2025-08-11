import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-left-logosection">
      <Link href="/" title="home">
        <Image
          src="/images/Manage_outsource_logo_2x_header.png"
          alt="FGK logo"
          width={180}
          height={32}
        />
      </Link>
    </div>
  );
}
