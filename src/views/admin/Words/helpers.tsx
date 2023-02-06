import { apiPost } from '@/service/api';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ModalDeleteWord from './components/ModalDeleteWord';
import ModalUpdateWord from './components/ModalUpdateWord';
import { useWordsType, WordTableData } from './types';

const columnHelper = createColumnHelper<WordTableData>();

export const useWords = () => {
  const [words, setWords] = useState<WordTableData[]>([]);
  return { words, setWords };
};

export const columns = (wordState: useWordsType) => [
  columnHelper.accessor('word', {
    cell: (info) => info.getValue(),
    header: 'Kata',
  }),
  columnHelper.accessor('type', {
    cell: (info) => info.getValue(),
    header: 'Jenis',
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Aksi',
    cell: (props) => {
      const { setWords } = wordState;
      const [showUpdateWord, setShowUpdateWord] = useState(false);
      const [showDeleteWord, setShowDeleteWord] = useState(false);
      const handleDeleteWord = async () => {
        try {
          const { id } = props.row.original as any;
          const token = localStorage.getItem('access_token') as string;
          if (!token) return;
          const response = await apiPost('/words/delete', {
            data: { id },
            token,
          });
          setWords((prev) => prev.filter((word) => word.id !== id));
          toast(response.message, { type: 'success' });
        } catch (error) {
          const { response } = error as any;
          toast(response.data.message, { type: 'error' });
        } finally {
          setShowDeleteWord(false);
        }
      };
      // get the row data
      return (
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border p-2 flex items-center text-white bg-green-500 rounded-md"
            onClick={() => setShowUpdateWord(true)}
          >
            <PencilIcon className="h-5 w-5" />
            <span className="hidden">Perbarui</span>
          </button>
          <button
            type="button"
            className="border p-2 flex items-center text-white bg-red-500 rounded-md"
            onClick={() => setShowDeleteWord(true)}
          >
            <TrashIcon className="h-5 w-5" />{' '}
            <span className="hidden">Hapus</span>
          </button>
          {showUpdateWord && (
            <ModalUpdateWord
              isOpen={showUpdateWord}
              setIsOpen={setShowUpdateWord}
              wordsValue={props.row.original}
              wordState={wordState}
            />
          )}
          {showDeleteWord && (
            <ModalDeleteWord
              isOpen={showDeleteWord}
              setIsOpen={setShowDeleteWord}
              handleDeleteWord={handleDeleteWord}
              data={props.row.original}
            />
          )}
        </div>
      );
    },
  }),
];
