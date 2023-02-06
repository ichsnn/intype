import { Dispatch, SetStateAction } from 'react';

export type WordTableData = {
  id: string;
  word: string;
  type: string;
  updated_at: string;
  created_at: string;
};

export type useWordsType = {
  words: WordTableData[];
  setWords: Dispatch<SetStateAction<WordTableData[]>>;
};
