import MainHeadingSectionTexCont from "./mainheadingsectiontexcont";

export default function MainHeadingSectionLowerSectionContainer({
  tagtext,
  description,
}) {
  return (
    <div className="mainheadingsection-lowersection-container">
      <MainHeadingSectionTexCont tagtext={tagtext} description={description} />
    </div>
  );
}
