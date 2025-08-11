import Image from "next/image";
export default function AboutTextSectionLogo() {
  return (
    <div className="abouttext-section-logo-container">
      <Image
        className="mos_logo_about_text-section"
        width={920}
        height={920}
        src={"/mos_logo.png"}
        alt="mos logo"
      />
    </div>
  );
}
