export default function SupportList({ supportlistdata }) {
  return (
    <ul className="footer-lists">
      <h4 className="support-title font-poppins">
        {supportlistdata.supportlisttitle}
      </h4>
      {supportlistdata.supportlistitems.map((item, index) => (
        <li key={index} className={`list-items ${item.font}`}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}
