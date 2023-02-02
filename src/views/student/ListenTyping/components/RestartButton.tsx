import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useHotkeys } from 'react-hotkeys-hook';
import {Tooltip} from 'react-tooltip';

export default function RestartButton() {
  useHotkeys('f5', (e) => {
    e.preventDefault()
    alert('restarted')
  })
  return (
    <>
      <div id='restartbutton' className="h-7 w-7 cursor-pointer">
        <ArrowPathIcon />
      </div>
      <Tooltip anchorId='restartbutton' content='F5'/>
    </>
  );
}
