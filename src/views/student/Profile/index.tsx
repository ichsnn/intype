import { PencilIcon } from '@heroicons/react/24/solid';
import Button from '@/components/Button';
import ComposeGrammarStats from './components/ComposeGrammarStats';
import ListenTypingStats from './components/ListenTypingStats';
import { useNavigate } from 'react-router-dom';
import { SETTINGS_PROFILE_STUDENT } from '@/constants';
import { useAuth } from '@/contexts/auth';
import { Student } from '@/models/Student';
import moment from 'moment';
import { education } from '@/utils/getEducation';
import { StatsData } from './components/types';
import { useEffect, useState } from 'react';
import { apiGet } from '@/service/api';
import { toast } from 'react-toastify';

export default function StudentProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dataCompose, setDataCompose] = useState<StatsData[]>([]);
  const [dataListen, setDataListen] = useState<StatsData[]>([]);

  const getStats = async () => {
    try {
      const token = localStorage.getItem('access_token') as string;
      const response = await apiGet('/student/tests/stats/listentyping/week', {
        token,
      });
      const { data } = response;
      setDataCompose(data[1]);
      setDataListen(data[2]);
    } catch (error) {
      const { response } = error as any;
      toast(response?.data?.message || 'Terjadi kesalahan');
    }
  };

  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className="max-w-7xl mx-auto space-y-10 divide-y text-slate-900">
      <section id="profile" className="flex justify-between">
        <div className="flex gap-7 items-center">
          <div className="h-40 w-40 rounded-full overflow-clip">
            <img
              src="https://reqres.in/img/faces/9-image.jpg"
              alt="username"
              className="object-cover h-full w-full"
            />
          </div>
          <div>
            <h2 className="font-bold text-2xl text-slate-900 mb-2">
              {user?.user.username}
            </h2>
            <p className="font-semibold text-base text-slate-600 mb-1">
              {education[(user as Student).education]}
            </p>
            <p className="font-medium text-base text-slate-600">
              Bergabung sejak {moment(user?.user.createdAt).year()}
            </p>
          </div>
        </div>
        <div>
          <Button
            type="button"
            label="Ubah Profile"
            primary
            iconLeft={<PencilIcon className="w-6" />}
            onClick={() => navigate(SETTINGS_PROFILE_STUDENT.path)}
          />
        </div>
      </section>

      <section id="stats" className="pt-10">
        <div className="mb-6">
          <h2 className="font-bold text-2xl mb-3">Statistik Minggu Terakhir</h2>
          <p>Cek statistik kamu berdasarkan jenis tes</p>
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-sky-500 mb-4">
              Test Menyusun Grammar
            </h3>
            <div className="h-72">
              <ComposeGrammarStats data={dataCompose} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-orange-500 mb-4">
              Test Mendengar & Mengetik
            </h3>
            <div className="h-72">
              <ListenTypingStats data={dataListen} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
