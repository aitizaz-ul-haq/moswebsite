import Image from "next/image";

export default function HomeAdvCardsSection({ homeadvcards }) {
  return (
    <div className="homeadvanteges-card-section">
      {homeadvcards.map((card) => {
        return (
          <div key={card.id} className="homeadvantegs-card">
            <Image
              src="/advantages-bullet.png"
              className="homeadvanteges-bullet"
              width={920}
              height={920}
              alt="bullets"
            />
            <p className="homeadvanteges-description font-nunito">
              {card.homeadvantegespoint}
            </p>
          </div>
        );
      })}
    </div>
  );
}
