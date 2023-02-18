import { createColumnHelper } from '@tanstack/react-table';
import { FireIcon } from '@heroicons/react/24/solid';

export interface Profile {
  username: string;
  education: string;
}

export interface LeaderboardTableData {
  rank: number;
  profile: Profile;
  score: number;
  correct: number;
  wrong: number;
  accuration: number;
}
const columnHelper = createColumnHelper<LeaderboardTableData>();

export const columns = [
  columnHelper.accessor('rank', {
    header: '#',
    cell: (info) => {
      if (info.getValue() === 1) {
        return <FireIcon className="h-5 w-5 text-yellow-500 mx-auto" />;
      } else {
        return info.getValue();
      }
    },
  }),
  columnHelper.accessor('profile', {
    header: 'Profil',
    cell: (info) => {
      return (
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 overflow-clip rounded-full">
            <img
              src="https://reqres.in/img/faces/9-image.jpg"
              alt={info.getValue().username}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold">{info.getValue().username}</div>
            <div className="font-medium text-xs">
              {info.getValue().education}
            </div>
          </div>
        </div>
      );
    },
  }),
  columnHelper.accessor('wrong', {
    header: 'Salah',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('correct', {
    header: 'Benar',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('accuration', {
    header: 'Akurasi',
    cell: (info) => `${info.getValue()} %`,
  }),
  columnHelper.accessor('score', {
    header: 'Skor',
    cell: (info) => info.getValue(),
  }),
];
