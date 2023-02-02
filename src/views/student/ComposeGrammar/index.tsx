import CheckButton from './components/CheckButton';
import SkipButton from './components/SkipButton';
import WordBox from './components/WordBox';
import RestartButton from './components/RestartButton';
import ExitButton from './components/ExitButton';
import { useEffect, useState } from 'react';

const StudentComposeGrammar = () => {
  const [isLoading, setLoading] = useState(true);
  const [timeToStart, setTimeToStart] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    if (timeToStart > 0) {
      setTimeout(() => {
        setTimeToStart(timeToStart - 1);
      }, 1000);
    }
  }, [timeToStart]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-7xl font-bold text-slate-700">
          {timeToStart > 0 ? timeToStart : 'Mulai'}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
        <div className="py-5 border-b text-slate-700 px-4 shadow-md sticky top-0 bg-white">
          <div className="max-w-7xl mx-auto flex justify-between relative">
            <ExitButton />
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-2xl font-extrabold">
              Tes Menyusun Grammar
            </div>
            <div className="flex divide-x divide-slate-700 items-center">
              <div className="pr-4 text-2xl font-semibold">100</div>
              <div className="flex pl-4 gap-4">
                <div className="text-2xl font-semibold">1:00</div>
                <RestartButton />
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
            <div className="flex items-center justify-center mt-5">
              <input
                type="text"
                title="answer"
                className="text-4xl border-b border-slate-500 focus:outline-none"
                height={160}
                autoFocus
              />
            </div>
          </div>
        </div>
        <div className="pb-4 pt-5 border-t border-black px-4 sticky bottom-0 left-0 w-full bg-white">
          <div className="flex justify-between max-w-7xl mx-auto relative">
            <div>
              <SkipButton />
            </div>
            <div>
              <CheckButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComposeGrammar;
