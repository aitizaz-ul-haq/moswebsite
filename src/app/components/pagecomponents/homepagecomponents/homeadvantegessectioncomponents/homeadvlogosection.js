import Image from "next/image";
export default function HomeAdvLogoSection() {
  return (
    <div className="homeadvanteges-card-logosection">
      <Image
        src="/company-logo.png"
        className="homeadvanteges-logo"
        width={920}
        height={920}
      />
    </div>
  );
}
