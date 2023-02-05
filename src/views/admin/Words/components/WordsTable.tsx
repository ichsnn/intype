import { useReducer, useState } from 'react';
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import cn from 'classnames';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

import Table from '@/components/Table';

type WordTableData = {
  word: string;
  type: string;
};

const defaultData: WordTableData[] = [
  {
    word: 'test',
    type: 'noun',
  },
  {
    word: 'cat',
    type: 'noun',
  },
  {
    word: 'cook',
    type: 'verb',
  },
  {
    word: 'and',
    type: 'conjunction',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
  {
    word: 'alone',
    type: 'adverb',
  },
  {
    word: 'sad',
    type: 'adjective',
  },
];

const columnHelper = createColumnHelper<WordTableData>();

const columns = [
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
      return (
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border p-2 flex items-center text-white bg-green-500 rounded-md"
          >
            <PencilIcon className="h-5 w-5" />
            <span className="hidden">Perbarui</span>
          </button>
          <button
            type="button"
            className="border p-2 flex items-center text-white bg-red-500 rounded-md"
          >
            <TrashIcon className="h-5 w-5" />{' '}
            <span className="hidden">Hapus</span>
          </button>
        </div>
      );
    },
  }),
];

export default function WordsTable() {
  return <Table data={defaultData} columns={columns} />;
}
