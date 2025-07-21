import NoVacancyHeadingSection from "./novacancyheadingsection";
import NoVacancyParaSection from "./novacancyparasection";

export default function NoVacancyContentContainer({NoVacancySectionData}) {
  return (
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
  );
}
