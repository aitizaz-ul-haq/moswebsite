import MainHeadingTagTex from "./mainheadingtagtex";
import MainHeadingSectionPara from "./mainheadingsectionpara";

export default function MainHeadingSectionTexCont({ tagtext, description }) {
  return (
    <div className="mainheadingsection-tex-container">
      <MainHeadingTagTex tagtext={tagtext} />
      <MainHeadingSectionPara description={description} />
    </div>
  );
}
