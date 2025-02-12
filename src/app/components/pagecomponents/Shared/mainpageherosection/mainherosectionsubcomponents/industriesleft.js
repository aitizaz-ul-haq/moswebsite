import "./styles/industriesleft.css";

export default function IndustriesLeft({ title, paragraph }) {
  return (
    <div className="hero-content-industries">
      <h1 className="hero-title-industries font-poppins">{title}</h1>
      <div className="hero-paragraph-container-industries">
        <p className="hero-paragraph-industries font-nunito">{paragraph}</p>
      </div>
      <div className="hero-button-container-industries">
        <div className="hero-button-industries font-nunito">TALK TO US NOW</div>
      </div>
    </div>
  );
}
