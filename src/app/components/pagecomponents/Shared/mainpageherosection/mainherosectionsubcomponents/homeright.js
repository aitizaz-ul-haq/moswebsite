import "./styles/homeright.css";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="homeright-text-wrapper">
      <div className="homeright-text-container">
        <div className="homeright-title-container">
          <h1 className="homeright-title font-poppins">{title}</h1>
        </div>
        <div className="homeright-paragraph-container">
          <p className="homeright-paragraph font-nunito">{paragraph}</p>
        </div>
        <div className="homeright-button-container">
          <button className="homeright-button font-nunito">
            TALK TO US NOW
          </button>
        </div>
      </div>
    </div>
  );
}
