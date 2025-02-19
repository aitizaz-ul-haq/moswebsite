import Image from "next/image";
import Link from "next/link";

export default function TeamCardSocials({ card }) {
  return (
    <div className="team-card-right-section-social-media-row">
      <Link href={card.linkdinlink} passHref>
        <Image
          className="team-executive-social-media-icon"
          width={965}
          height={965}
          src={card.linkdinicon}
          alt="LinkedIn"
        />
      </Link>

      <Link href={card.facebooklink} passHref>
        <Image
          className="team-executive-social-media-icon"
          width={965}
          height={965}
          src={card.facebookicon}
          alt="Facebook"
        />
      </Link>

      <Link href={card.twitterlink} passHref>
        <Image
          className="team-executive-social-media-icon"
          width={965}
          height={965}
          src={card.twittericon}
          alt="Twitter"
        />
      </Link>
    </div>
  );
}
