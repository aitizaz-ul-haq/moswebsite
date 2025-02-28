import "./styles/importancesection.css";
import ImportanceTextSection from "./importancesectionsubcomponents/importancetextsection";
import ImportancePoints from "./importancesectionsubcomponents/importancepoints";

export default function ImportanceSection({ Importancesectiondata }) {
  let pointsdata = Importancesectiondata.importancepoints;
  return (
    <div className="importance-container">
      <ImportanceTextSection Importancesectiondata={Importancesectiondata} />
      <ImportancePoints pointsdata={pointsdata} />
    </div>
  );
}
