import Button from '@/components/Button';
import { FormSelect } from '@/components/Form';
import WordsTable from './components/WordsTable';

export default function AdminManageWords() {
  return (
    <>
      <div className="mb-10">
        <h1 className="font-semibold text-slate-700 text-3xl border-b-2 pb-2">
          Kelola Kata
        </h1>
      </div>
      <div>
        <div className="flex gap-2 justify-between items-center mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Cari kata..."
              className="border border-slate-500 px-6 py-3 rounded-full min-w-[200px] bg-white"
            />
            <select
              name="type"
              title="Jenis"
              className="border px-6 py-3 rounded-full border-slate-500 focus:outline"
            >
              <option value="">Pilih Jenis</option>
              <option value="adjective">Adjective</option>
              <option value="conjunction">Adverb</option>
              <option value="interjection">Interjection</option>
              <option value="noun">Noun</option>
              <option value="preposition">Preposition</option>
              <option value="pronoun">Pronoun</option>
              <option value="verb">Verb</option>
            </select>
          </div>
          <div>
            <Button label="Tambah Kata" primary />
          </div>
        </div>
        <WordsTable />
      </div>
    </>
  );
}
