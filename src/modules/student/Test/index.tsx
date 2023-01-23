import Button from '@/components/Button';

const StudentTest = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section>
        <div>
          <h2 className="font-semibold text-2xl shadow-md px-6 pt-6 pb-3 text-slate-700 w-fit rounded-tl-2xl rounded-tr-2xl">
            Pilih Tes
          </h2>
          <div className="pb-6 pt-3 px-6 bg-white shadow-md rounded-tr-2xl rounded-br-2xl rounded-bl-2xl h-[400px]">
            <div className="flex gap-5 h-full flex-col md:flex-row">
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-cyan-300 to-sky-600 rounded-2xl text-white flex items-end p-9 justify-between">
                <img
                  src="/grammar.svg"
                  alt="svg"
                  className="absolute top-14 right-10 -translate-y-1/2 translate-x-1/4"
                />
                <div className="max-w-[360px] z-10">
                  <h3 className="font-bold text-xl mb-2">
                    Tes Menyusun Grammar
                  </h3>
                  <p className="font-medium text-base">
                    Tes sejauh mana kemampuan menyusun grammar bahasa inggris
                    anda!
                  </p>
                </div>
                <div className="z-10">
                  <Button label="Mulai" />
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-amber-300 to-orange-600 rounded-2xl text-white flex items-end p-9 justify-between">
                <img
                  src="/listening.svg"
                  alt="svg"
                  className="absolute top-14 right-10 -translate-y-1/2 translate-x-1/4"
                />
                <div className="max-w-[360px] z-10">
                  <h3 className="font-bold text-xl mb-2">
                    Tes Mendengar & Mengetik
                  </h3>
                  <p className="font-medium text-base">
                    Tingkatkan kemampuan mendengar kosa kata bahasa inggris!
                  </p>
                </div>
                <div className="z-10">
                  <Button label="Mulai" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentTest;
