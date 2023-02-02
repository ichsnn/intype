import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export default function ComposeGrammaarCard() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-cyan-300 to-sky-600 rounded-2xl text-white flex items-end p-9 justify-between">
      <img
        src="/grammar.svg"
        alt="svg"
        className="absolute top-14 right-10 -translate-y-1/2 translate-x-1/4"
      />
      <div className="max-w-[360px] z-10">
        <h3 className="font-bold text-xl mb-2">Tes Menyusun Grammar</h3>
        <p className="font-medium text-base">
          Tes sejauh mana kemampuan menyusun grammar bahasa inggris anda!
        </p>
      </div>
      <div className="z-10">
        <Button label="Mulai" whitePrimary onClick={() => navigate('composegrammar')}/>
      </div>
    </div>
  );
}
