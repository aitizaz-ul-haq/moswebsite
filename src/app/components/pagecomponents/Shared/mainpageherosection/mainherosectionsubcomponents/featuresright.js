import "./styles/featuresright.css";

export default function FeaturesRight({ title, paragraph }) {
  return (
    <div className="hero-content-features">
      <h1 className="hero-title-features font-poppins">{title}</h1>
      <div className="hero-paragraph-container-features">
        <p className="hero-paragraph-features font-nunito">{paragraph}</p>
      </div>
      <div className="hero-button-container-features">
        <div className="hero-button-features font-nunito">TALK TO US NOW</div>
      </div>
    </div>
  );
}
