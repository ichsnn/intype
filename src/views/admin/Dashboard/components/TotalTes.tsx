import { apiGet } from '@/service/api';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

export default function TotalTes() {
  const [count, setCount] = useState(0);
  const getCount = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('Token not found');
    const response = await apiGet('/student/tests/count', {
      token: token,
    });
    setCount(response.data);
  };
  useEffect(() => {
    getCount();
  }, []);
  return (
    <div className="relative bg-white border shadow-md min-w-[280px] rounded-xl p-5 py-10">
      <div className="bg-purple-500 font-semibold text-white px-6 py-6 rounded-xl absolute -top-6 left-5  shadow-xl">
        <ClipboardDocumentCheckIcon className="h-10 w-10" />
      </div>
      <div className="text-right">
        <h3 className="text-slate-500 text-base">Total Tes</h3>
        <p className="font-semibold text-3xl">
          {count.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
}
