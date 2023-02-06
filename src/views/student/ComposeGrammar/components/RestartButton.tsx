import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'react-tooltip';

export default function RestartButton({
  handleReset,
}: {
  handleReset: VoidFunction;
}) {
  return (
    <>
      <div
        id="restartbutton"
        className="h-7 w-7 cursor-pointer"
        onClick={() => handleReset()}
      >
        <ArrowPathIcon />
      </div>
      <Tooltip anchorId="restartbutton" content="F5" />
    </>
  );
}
