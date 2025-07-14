import Image from "next/image";

export default function NoVacancyHeadingSection({ logo, heading }) {
  return (
    <div className="no-vacancy-heading-section">
      <div className="no-vacancy-image-container">
        <Image src={logo} width={120} height={120} />
      </div>
      <h3 className="no-vacancy-heading font-poppins">{heading}</h3>
    </div>
  );
}
