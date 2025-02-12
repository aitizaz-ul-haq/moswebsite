import "./styles/teamcenter.css";

export default function TeamCenter({ title, paragraph }) {
  return (
    <div className="hero-content-teamcenter">
      <h1 className="hero-title-teamcenter font-poppins">{title}</h1>
      <div className="hero-paragraph-container-teamcenter">
        <p className="hero-paragraph-teamcenter font-nunito">{paragraph}</p>
      </div>
      <div className="hero-button-container-teamcenter">
        <div className="hero-button-teamcenter font-nunito">TALK TO US NOW</div>
      </div>
    </div>
  );
}
