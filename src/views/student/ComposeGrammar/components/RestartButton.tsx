import { ArrowPathIcon } from '@heroicons/react/24/solid';
import {Tooltip} from 'react-tooltip';

export default function RestartButton() {
  return (
    <>
      <div id='restartbutton' className="h-7 w-7 cursor-pointer">
        <ArrowPathIcon />
      </div>
      <Tooltip anchorId='restartbutton' content='F5'/>
    </>
  );
}
