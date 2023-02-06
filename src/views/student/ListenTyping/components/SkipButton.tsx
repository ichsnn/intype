import { Tooltip } from 'react-tooltip';

export default function SkipButton({
  handleSkipAnswer,
}: {
  handleSkipAnswer: VoidFunction;
}) {
  return (
    <>
      <button
        onClick={() => handleSkipAnswer()}
        id="skipbutton"
        className="min-w-[160px] px-6 py-3 gap-10 rounded-full border text-xl border-slate-400 bg-white text-slate-400 font-bold cursor-pointer"
        type="button"
      >
        Lewati
      </button>
      <Tooltip anchorId="skipbutton" content="Alt + S" />
    </>
  );
}
