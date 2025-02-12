import "./styles/homeright.css";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="hero-content">
      <h1 className="hero-title font-poppins">{title}</h1>
      <div className="hero-paragraph-container">
        <p className="hero-paragraph font-nunito">{paragraph}</p>
      </div>
      <div className="hero-button-container">
        <div className="hero-button font-nunito">TALK TO US NOW</div>
      </div>
    </div>
  );
}
