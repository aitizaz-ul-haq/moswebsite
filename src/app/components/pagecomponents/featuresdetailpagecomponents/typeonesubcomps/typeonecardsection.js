import "../styles/typeonecardsection.css";
import TypeOneCardSect from "./typeonecardsect";
export default function TypeOneCardSection({ cards }) {
  return (
    <div className="typeonecard-main-container">
      <TypeOneCardSect cards={cards} />
    </div>
  );
}
