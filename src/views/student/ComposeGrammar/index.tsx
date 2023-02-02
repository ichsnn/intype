import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import CheckButton from './components/CheckButton';
import SkipButton from './components/SkipButton';
import WordBox from './components/WordBox';

const StudentComposeGrammar = () => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <div className="py-5 border-b text-slate-700 px-4 shadow-md sticky top-0 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between relative">
          <div className="h-7 w-7">
            <XMarkIcon />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-extrabold">
            Tes Menyusun Grammar
          </div>
          <div className="flex divide-x divide-slate-700 items-center">
            <div className="pr-4 text-2xl font-semibold">100</div>
            <div className="flex pl-4 gap-4">
              <div className="text-2xl font-semibold">1:00</div>
              <div className="h-7 w-7">
                <ArrowPathIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-h-[200px] min-h-[200px] flex flex-wrap items-center justify-center overflow-hidden">
            <div className="flex flex-wrap gap-6 justify-center">
              <WordBox word="are" isWrited={true} />
              <WordBox word="going" isWrited={true} />
              <WordBox word="They" isWrited={true} />
              <WordBox word="to" isWrited={true} />
              <WordBox word="victory" isWrited={true} />
              <WordBox word="celebrate" isWrited={false} />
              <WordBox word="the" isWrited={false} />
              <WordBox word="are" isWrited={true} />
              <WordBox word="going" isWrited={true} />
              <WordBox word="the" isWrited={false} />
              <WordBox word="are" isWrited={true} />
              <WordBox word="going" isWrited={true} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="text"
              title="answer"
              className="text-4xl border-b border-slate-500 focus:outline-none"
              height={160}
            />
          </div>
        </div>
      </div>
      <div className="pb-4 pt-5 border-t border-black px-4 sticky bottom-0 left-0 w-full bg-white">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div>
            <SkipButton />
          </div>
          <div>
            <CheckButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComposeGrammar;
