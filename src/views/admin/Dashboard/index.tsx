import {
  BookmarkIcon,
  Squares2X2Icon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import OverviewPelajar from './components/OverviewPelajar';
import TotalKata from './components/TotalKata';
import TotalPelajar from './components/TotalPelajar';
import TotalTes from './components/TotalTes';

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-20">
        <h1 className="font-semibold text-slate-700 text-3xl border-b-2 pb-2">
          Dashboard
        </h1>
      </div>
      <div className="flex gap-8 flex-row-reverse">
        <OverviewPelajar />
        <div className="flex-1 grid grid-rows-3 gap-8">
          <TotalPelajar />
          <TotalKata />
          <TotalTes />
        </div>
      </div>
    </>
  );
}
