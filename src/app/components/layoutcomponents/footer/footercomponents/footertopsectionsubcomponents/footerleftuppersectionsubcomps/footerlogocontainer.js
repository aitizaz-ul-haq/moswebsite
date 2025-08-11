import Image from "next/image";
import Link from "next/link";

export default function FooterLogoContainer({ footerlogo }) {
  return (
    <div className="footer-logo-container">
      <Link href="/" className="general-linkage" title="Home">
        <Image
          // className="footer-logo-container"
          width={140}
          height={140}
          src={footerlogo}
          alt="footer logo"
        />
      </Link>
    </div>
  );
}
