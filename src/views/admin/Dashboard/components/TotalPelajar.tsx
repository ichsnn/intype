import { UserGroupIcon } from '@heroicons/react/24/solid';

export default function TotalPelajar() {
  return (
    <div className="relative bg-white border shadow-md min-w-[280px] rounded-xl p-5 py-10">
      <div className="bg-sky-500 font-semibold text-white px-6 py-6 rounded-xl absolute -top-6 left-5  shadow-xl">
        <UserGroupIcon className="h-10 w-10" />
      </div>
      <div className="text-right">
        <h3 className="text-slate-500 text-base">Total Pelajar</h3>
        <p className="font-semibold text-3xl">100,000</p>
      </div>
    </div>
  );
}