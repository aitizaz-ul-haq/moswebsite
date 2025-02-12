import "./styles/homeright.css";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="hero-content-home">
      <h1 className="hero-title-home font-poppins">{title}</h1>
      <div className="hero-paragraph-container-home">
        <p className="hero-paragraph-home font-nunito">{paragraph}</p>
      </div>
      <div className="hero-button-container-home">
        <div className="hero-button-home font-nunito">TALK TO US NOW</div>
      </div>
    </div>
  );
}
