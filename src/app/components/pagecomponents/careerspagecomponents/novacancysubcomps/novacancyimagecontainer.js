import Image from "next/image";

export default function NoVacancyImageContainer({ logo }) {
  return (
    <div className="no-vacancy-image-container">
      <Image src={logo} width={120} height={120} alt="no-vacancy icon"/>
    </div>
  );
}
