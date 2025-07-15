import Image from "next/image";

export default function FooterBottomSocialMediaIcons({ socialmediaicons }) {
  return (
    <div className="footer-bottom-social-icons">
      {socialmediaicons.map((icon, index) => (
        <Image
          key={index}
          className="footer-social-media-icon"
          width={icon.width}
          height={icon.height}
          src={icon.src}
          alt={icon.alt}
        />
      ))}
    </div>
  );
}
