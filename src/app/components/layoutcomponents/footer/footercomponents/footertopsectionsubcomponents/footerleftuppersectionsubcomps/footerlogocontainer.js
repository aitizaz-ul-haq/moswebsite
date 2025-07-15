import Image from "next/image";

export default function FooterLogoContainer({ footerlogo }) {
  return (
    <div className="footer-logo-container">
      <Image
        className="footer-logo-container"
        width={1922}
        height={1922}
        src={footerlogo}
        alt="footer logo"
      />
    </div>
  );
}
