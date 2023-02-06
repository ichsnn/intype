import Button from '@/components/Button';
import { apiPost } from '@/service/api';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';

export default function ModalDeleteWord({
  isOpen,
  setIsOpen,
  data,
  handleDeleteWord,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
  handleDeleteWord: VoidFunction;
}) {
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
          <h1 className="font-semibold text-2xl text-slate-700">Hapus Kata</h1>
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
        <p className="text-slate-700">
          Apakah anda yakin ingin menghapus kata{' '}
          <span className="font-bold">{data?.word}</span>?
        </p>
        <div className="flex justify-end mt-10 gap-5">
          <div className="flex gap-2">
            <Button label="Tidak" onClick={() => setIsOpen(false)} normal />
            <Button label="Hapus" onClick={handleDeleteWord} danger />
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
