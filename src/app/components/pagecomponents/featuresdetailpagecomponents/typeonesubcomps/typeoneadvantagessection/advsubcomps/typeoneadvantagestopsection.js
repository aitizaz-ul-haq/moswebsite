export default function TypeOneAdvantagesTopSection({ tag, description }) {
  return (
    <div className="typeoneadv-topsection">
      <div className="typeoneadv-tag font-poppins">{tag}</div>
      <p className="typeoneadv-text font-nunito">{description}</p>
    </div>
  );
}
