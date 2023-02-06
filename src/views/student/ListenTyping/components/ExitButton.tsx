import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'react-tooltip';

export default function ExitButton() {
  const navigate = useNavigate();
  const exitTest = () => {
    navigate('/student/test');
  };
  return (
    <>
      <div
        onClick={exitTest}
        id="exitbutton"
        className="h-7 w-7 cursor-pointer"
      >
        <XMarkIcon />
      </div>
      <Tooltip anchorId="exitbutton" content="Esc" />
    </>
  );
}
