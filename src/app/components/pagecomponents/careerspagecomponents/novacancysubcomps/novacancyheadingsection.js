import NoVacancyImageContainer from "./novacancyimagecontainer";
import NoVacancyHeading from "./novavcancyheading";

export default function NoVacancyHeadingSection({ logo, heading }) {
  return (
    <div className="no-vacancy-heading-section">
      <NoVacancyImageContainer logo={logo} />
      <NoVacancyHeading heading={heading} />
    </div>
  );
}
