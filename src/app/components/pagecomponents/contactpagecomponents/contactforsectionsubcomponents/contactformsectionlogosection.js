import Image from "next/image";

export default function ContactFormSectionLogoSection() {
  return (
    <div className="contactformsection-top-logo-container">
      <Image
        width={190}
        height={190}
        className="contact-form-logo"
        src="/images/mos_aboutpage_logo_2x.png"
        alt="manage_outsource_logo"
      />
    </div>
  );
}
