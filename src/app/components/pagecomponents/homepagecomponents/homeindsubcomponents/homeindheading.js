export default function HomeIndHeading({ Homeindustriessectiondata }) {
  return (
    <>
      <div className="homepage-industres-mobile-heading font-poppins">
        Industries
      </div>
      <div className="homepage-industries-tag font-poppins">
        {Homeindustriessectiondata.homeindustriesheading}
      </div>
    </>
  );
}
