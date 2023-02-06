import { Tooltip } from 'react-tooltip';

export default function CheckButton({
  disabled,
  handleCheckAnswer,
}: {
  disabled: boolean;
  handleCheckAnswer: VoidFunction;
}) {
  return (
    <>
      <button
        id="checkbutton"
        className="min-w-[160px] px-6 py-3 gap-10 rounded-full border text-xl disabled:border-slate-400 disabled:bg-slate-200 disabled:text-slate-400 font-bold enabled:bg-green-500 enabled:text-white enabled:border-green-900 cursor-pointer"
        type="button"
        disabled={disabled}
        onClick={() => handleCheckAnswer()}
      >
        Cek
      </button>
      <Tooltip anchorId="checkbutton" content="Enter" />
    </>
  );
}
