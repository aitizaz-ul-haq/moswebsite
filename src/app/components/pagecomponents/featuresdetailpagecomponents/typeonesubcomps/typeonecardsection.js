import "../styles/typeonecardsection.css";
import TypeOneCardSect from "./typeonecardsect";
export default function TypeOneCardSection({ cards }) {
  return (
    <div className="typeonecard-main-container">
      <div className="typeonecard-text-container">
        <div className="typeonecard-text-block">
          <div className="typeonecard-tag font-poppins">
            Web Development Solutions
          </div>
          <div className="typeonecard-description font-nunito">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry'sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's
          </div>
        </div>
      </div>
      <TypeOneCardSect cards={cards} />
    </div>
  );
}
