import "./styles/teamcenter.css";

export default function TeamCenter({ title, paragraph }) {
  return (
    <div className="teamcenter-text-wrapper">
      <div className="teamcenter-text-container">
        <div className="teamcenter-title-container">
          <h1 className="teamcenter-title font-poppins">{title}</h1>
        </div>
        <div className="teamcenter-paragraph-container">
          <p className="teamcenter-paragraph font-nunito">{paragraph}</p>
        </div>
        <div className="teamcenter-button-container">
          <button className="teamcenter-button font-nunito">
            TALK TO US NOW
          </button>
        </div>
      </div>
    </div>
  );
}
