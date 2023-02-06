import { SpeakerWaveIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'react-tooltip';

export default function PlaySoundButton({
  handlePlayAudio,
}: {
  handlePlayAudio: VoidFunction;
}) {
  return (
    <>
      <button
        type="button"
        id="soundbutton"
        className="block mx-auto w-40 p-5 h-40 bg-sky-500 rounded-[36px] text-white border-4 border-sky-600 cursor-pointer hover:bg-opacity-95 active:bg-opacity-80"
        onClick={() => handlePlayAudio()}
      >
        <SpeakerWaveIcon />{' '}
        <span aria-hidden="true" className="hidden">
          Play
        </span>
      </button>
      <Tooltip anchorId="soundbutton" content="Alt + P" />
    </>
  );
}
