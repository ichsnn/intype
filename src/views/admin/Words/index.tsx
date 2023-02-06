import Button from '@/components/Button';
import { Form, FormInput, FormSelect } from '@/components/Form';
import { useEffect, useState } from 'react';
import WordsTable from './components/WordsTable';
import { columns, useWords } from './helpers';
import { WordTableData } from './types';
import ReactModal from 'react-modal';
import ModalAddWord from './components/ModalAddWord';
import ModalUpdateWord from './components/ModalUpdateWord';
import { apiGet } from '@/service/api';
import { toast } from 'react-toastify';

export default function AdminManageWords() {
  const [showAddWord, setShowAddWord] = useState(false);
  const [showUpdateWord, setShowUpdateWord] = useState(false);
  const wordState = useWords();
  const { words, setWords } = wordState;

  const fetchWords = async () => {
    try {
      const response = await apiGet('/words', {});
      const { data } = response;
      setWords(data);
    } catch (error) {
      const { response } = error as any;
      toast(response.data.message, { type: 'error' });
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
      <div className="mb-10">
        <h1 className="font-semibold text-slate-700 text-3xl border-b-2 pb-2">
          Kelola Kata
        </h1>
      </div>
      <div>
        <div className="flex mb-4">
          <div className="ml-auto">
            <div>
              <Button
                label="Tambah Kata"
                primary
                onClick={() => setShowAddWord(true)}
              />
            </div>
          </div>
        </div>
        <WordsTable data={words} columns={columns(wordState)} />
      </div>
      {showAddWord && (
        <ModalAddWord
          isOpen={showAddWord}
          setIsOpen={setShowAddWord}
          wordState={wordState}
        />
      )}
    </>
  );
}
