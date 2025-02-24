export default function ApplyFormInstructions({ Applyformdata }) {
  let info = Applyformdata.instructions;
  return (
    <div className="applyform-left-instructions-container">
      {info.map((ins) => {
        return (
          <div key={ins.id} className="instruction-point font-nunito">
            {ins.instruction}
          </div>
        );
      })}
    </div>
  );
}
