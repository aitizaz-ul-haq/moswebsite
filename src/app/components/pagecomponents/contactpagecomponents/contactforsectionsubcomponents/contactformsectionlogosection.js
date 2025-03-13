import Image from "next/image";

export default function ContactFormSectionLogoSection() {
  return (
    <div className="contactformsection-top-logo-container">
      <Image
        width={240}
        height={190}
        className="contact-form-logo"
        src="/mos_logo.png"
      />
    </div>
  );
}
