import "./styles/industriesleft.css";
import IndustriesLeftMainTextContainer from "./industriesleftcomps/industriesleftmaintextcontainer";

export default function IndustriesLeft({ title, paragraph }) {
  return (
    <div className="industriesleft-text-wrapper">
      <IndustriesLeftMainTextContainer title={title} paragraph={paragraph} />
    </div>
  );
}
