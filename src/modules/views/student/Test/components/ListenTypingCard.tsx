import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export default function ListenTypingCard() {
  const navigate = useNavigate()
  return (
    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-amber-300 to-orange-600 rounded-2xl text-white flex items-end p-9 justify-between">
      <img
        src="/listening.svg"
        alt="svg"
        className="absolute top-14 right-10 -translate-y-1/2 translate-x-1/4"
      />
      <div className="max-w-[360px] z-10">
        <h3 className="font-bold text-xl mb-2">Tes Mendengar & Mengetik</h3>
        <p className="font-medium text-base">
          Tingkatkan kemampuan mendengar kosa kata bahasa inggris!
        </p>
      </div>
      <div className="z-10">
        <Button label="Mulai" whiteSecondary onClick={() => navigate('listentyping')}/>
      </div>
    </div>
  );
}
