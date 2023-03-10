import Button from '@/components/Button';
import { Form, FormInput, FormSelect } from '@/components/Form';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ReactModal from 'react-modal';
import { useWordsType, WordTableData } from '../types';
import { FieldValues, useForm } from 'react-hook-form';
import { apiPost } from '@/service/api';
import { toast } from 'react-toastify';

export default function ModalUpdateWord({
  isOpen,
  setIsOpen,
  wordsValue,
  wordState,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  wordsValue: WordTableData;
  wordState: useWordsType;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    values: {
      id: wordsValue.id,
      word: wordsValue.word,
      type: wordsValue.type,
    },
  });

  const optionsType = [
    { label: 'Pilih Jenis', value: '' },
    { label: 'adjective', value: 'adjective' },
    { label: 'adverb', value: 'adverb' },
    { label: 'interjection', value: 'interjection' },
    { label: 'noun', value: 'noun' },
    { label: 'preposition', value: 'preposition' },
    { label: 'pronoun', value: 'pronoun' },
    { label: 'verb', value: 'verb' },
  ];

  const onSubmit = async (inputValues: FieldValues) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) throw new Error('Token not found');
      const response = await apiPost('/words/update', {
        token: token,
        data: inputValues,
      });
      toast(response.message, { type: 'success' });
      const { data } = response;
      wordState.setWords((prev) => {
        return prev.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              word: data.word,
              type: data.type,
            };
          }
          return item;
        });
      });
      setIsOpen(false);
    } catch (error) {
      const response = error as any;
      toast(response.message, { type: 'error' });
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Minimal Modal Example"
      className={
        'max-w-lg border px-4 py-8 min-w-[280px] w-full bg-white rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg'
      }
      ariaHideApp={false}
    >
      <div className="flex justify-between items-center border-b pb-4 mb-5">
        <div>
          <h1 className="font-semibold text-2xl text-slate-700">
            Perbarui Kata
          </h1>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-slate-500 rounded-lg font-bold"
        >
          <XMarkIcon className="w-7 h-7" />{' '}
          <span className="hidden">Close</span>
        </button>
      </div>
      <div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <FormInput
              label="Kata"
              id="word"
              {...register('word', { required: true })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <FormSelect
              label="Jenis"
              options={optionsType}
              id="word"
              {...register('type', { required: true })}
            />
          </div>
          <Button type="submit" label="Perbarui" primary disabled={!isValid} />
        </form>
      </div>
    </ReactModal>
  );
}
