import "./styles/novacancycomp.css";
import NoVacancyContentContainer from "./novacancysubcomps/novacancycontentcontainer";

export default function NoVacancyComp({ NoVacancySectionData }) {
  return (
    <div className="no-vacancy-container">
      <NoVacancyContentContainer NoVacancySectionData={NoVacancySectionData} />
    </div>
  );
}
