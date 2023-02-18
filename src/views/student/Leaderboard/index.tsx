import { useDebugState } from '@/hooks/useDebugState';
import { apiGet } from '@/service/api';
import { getLocalStorage } from '@/utils/getLocalStorage';
import { ChangeEvent, useEffect, useState } from 'react';
import Table from './components/Table';
import { columns } from './helpers';

const StudentLeaderboard = () => {
  const [type, setType] = useState('listentyping');
  const [leaderboards, setLeaderboards] = useState<any>({
    composegrammar: [],
    listentyping: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setType(value);
  };

  const fetchLeaderboard = async () => {
    try {
      const token = getLocalStorage('access_token');
      const response = await apiGet('/student/tests/leaderboard/top10', {
        token,
      });
      setLeaderboards(response.data);
    } catch (error) {
      const { response } = error as any;
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  useDebugState(leaderboards, 'leaderboards');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-2xl text-slate-800 mb-4">
        Peringkat 10 Besar Teratas
      </h1>
      <div className="mb-5">
        <div className="flex gap-4">
          <div>
            <input
              id="composegrammar"
              className="peer/composegrammar appearance-none"
              type="radio"
              name="status"
              value={'composegrammar'}
              checked={type === 'composegrammar'}
              onChange={handleChange}
            />
            <label
              htmlFor="composegrammar"
              className="peer-checked/composegrammar:bg-sky-500 peer-checked/composegrammar:text-white bg-sky-200 text-slate-800 font-bold px-6 py-3 inline-flex rounded-full cursor-pointer"
            >
              Menyusun Grammar
            </label>
          </div>
          <div>
            <input
              id="listentyping"
              className="peer/listentyping appearance-none"
              type="radio"
              name="status"
              value={'listentyping'}
              checked={type === 'listentyping'}
              onChange={handleChange}
            />
            <label
              htmlFor="listentyping"
              className="peer-checked/listentyping:bg-sky-500 peer-checked/listentyping:text-white bg-sky-200 text-slate-800 font-bold px-6 py-3 inline-flex rounded-full cursor-pointer"
            >
              Mendengar & Mengetik
            </label>
          </div>
        </div>
      </div>
      <Table data={leaderboards![type]} columns={columns} />
    </div>
  );
};
export default StudentLeaderboard;
