import "./styles/industriesleft.css";

export default function HomeRight({ title, paragraph }) {
  return (
    <div className="industriesleft-text-wrapper">
      <div className="industriesleft-text-container">
        <div className="industriesleft-title-container">
          <h1 className="industriesleft-title font-poppins">{title}</h1>
        </div>
        <div className="industriesleft-paragraph-container">
          <p className="industriesleft-paragraph font-nunito">{paragraph}</p>
        </div>
        <div className="industriesleft-button-container">
          <button className="industriesleft-button font-nunito">
            TALK TO US NOW
          </button>
        </div>
      </div>
    </div>
  );
}
