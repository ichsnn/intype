import Button from '@/components/Button';
import ListenTypingCard from './components/ListenTypingCard';
import ComposeGrammaarCard from './components/ComposeGrammarCard';

const StudentTest = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section>
        <div>
          <h2 className="font-semibold text-2xl shadow-md px-6 pt-6 pb-3 text-slate-700 w-fit rounded-tl-2xl rounded-tr-2xl">
            Pilih Tes
          </h2>
          <div className="pb-6 pt-3 px-6 bg-white shadow-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl h-[400px]">
            <div className="flex gap-5 h-full flex-col md:flex-row">
              <ComposeGrammaarCard />
              <ListenTypingCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentTest;
