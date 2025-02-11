import "../styles/mainpageherosection.css";

export default function MainPageHeroSection({
  title,
  paragraph,
  textOrientation,
  backgroundImages,
}) {
  return (
    <div
      className="hero-section"
      style={{
        // "--bg-320": `url(${backgroundImages["320px"]})`,
        "--bg-480": `url(${backgroundImages["480px"]})`,
        "--bg-600": `url(${backgroundImages["600px"]})`,
        "--bg-768": `url(${backgroundImages["768px"]})`,
        "--bg-1024": `url(${backgroundImages["1024px"]})`,
        "--bg-1280": `url(${backgroundImages["1280px"]})`,
        "--bg-1440": `url(${backgroundImages["1440px"]})`,
        "--bg-1600": `url(${backgroundImages["1600px"]})`,
        "--bg-1920": `url(${backgroundImages["1920px"]})`,
        "--bg-2560": `url(${backgroundImages["2560px"]})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title font-poppins">{title}</h1>
        <div className="hero-paragraph-container">
          <p className="hero-paragraph font-nunito">{paragraph}</p>
        </div>
        <div className="hero-button-container">
          <div className="hero-button font-nunito">TALK TO US NOW</div>
        </div>
      </div>
    </div>
  );
}
