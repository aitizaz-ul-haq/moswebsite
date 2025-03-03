import HomeAdvCardsSection from "./homeadvcardsection";
import HomeAdvLogoSection from "./homeadvlogosection";

export default function HomeAdvCardContainer({ homeadvcards }) {
  return (
    <div className="homeadvanteges-card-container">
      <HomeAdvCardsSection homeadvcards={homeadvcards} />
      <HomeAdvLogoSection />
    </div>
  );
}
