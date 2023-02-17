import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { StatsData } from './types';

export default function ComposeGrammarStats({ data }: { data: StatsData[] }) {
  return (
    <ResponsiveContainer height={'100%'} width={'99%'}>
      <AreaChart data={data} margin={{ right: 36, left: 0, top: 18 }}>
        <CartesianGrid strokeDasharray={'3 3'} />
        <defs>
          <linearGradient
            id="composeGrammarStatsColor"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="Skor"
          stroke="#0284C7"
          fillOpacity={1}
          fill="url(#composeGrammarStatsColor)"
        />
        <XAxis dataKey={'Tanggal'} />
        <YAxis dataKey={'Skor'} mirror />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
