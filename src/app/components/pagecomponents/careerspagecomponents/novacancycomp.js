import "./styles/novacancycomp.css";
import NoVacancyHeadingSection from "./novacancysubcomps/novacancyheadingsection";
import NoVacancyParaSection from "./novacancysubcomps/novacancyparasection";

export default function NoVacancyComp({ NoVacancySectionData }) {
  return (
    <div className="no-vacancy-container">
      <div className="no-vacancy-content-container">
        <NoVacancyHeadingSection
          logo={NoVacancySectionData.novacacylogo}
          heading={NoVacancySectionData.novacancyheading}
        />
        <NoVacancyParaSection
        paraone={NoVacancySectionData.novacancyparaone}
        paratwo={NoVacancySectionData.novacancyparatwo}
        />
      </div>
    </div>
  );
}
