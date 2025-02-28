export default function ImportanceTextSection({ Importancesectiondata }) {
  return (
    <div className="importance-text-section-container">
      <h3 className="importance-tag font-poppins">Importance</h3>
      <p className="importance-description font-poppins">
        {Importancesectiondata.sectiontext}
      </p>
    </div>
  );
}
