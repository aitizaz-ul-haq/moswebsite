import Image from "next/image";

export default function ApplyFormLogo({ Applyformdata }) {
  return (
    <div className="applyform-left-logo-container">
      <Image
        src={Applyformdata.applyformlogo}
        className="applyform-logo"
        width={270}
        height={200}
      />
    </div>
  );
}
