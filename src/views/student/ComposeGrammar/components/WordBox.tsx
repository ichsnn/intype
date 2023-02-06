import cx from 'classnames/bind';
import styles from './WordBox.module.css';
import { useState } from 'react';

export default function WordBox({
  word,
  isWrited,
}: {
  word: string;
  isWrited?: boolean;
}) {
  const cn = cx.bind(styles);
  return (
    <div
      className={cn(
        'inline-block px-2 py-2 border text-slate-500 font-bold text-2xl rounded-lg cursor-pointer',
        {
          isWrited: isWrited,
          'border-slate-400': !isWrited,
        }
      )}
    >
      {word}
    </div>
  );
}
