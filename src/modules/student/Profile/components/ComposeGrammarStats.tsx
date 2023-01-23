import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

// create dummy data
const data = [
  { name: 'Senin', Score: 0 },
  { name: 'Selasa', Score: 0 },
  { name: 'Rabu', Score: 0 },
  { name: 'Kamis', Score: 0 },
  { name: 'Jumat', Score: 190 },
  { name: 'Sabtu', Score: 150 },
  { name: 'Minggu', Score: 190 },
];

export default function ComposeGrammarStats() {
  return (
    <ResponsiveContainer height={'100%'} width={'99%'} >
      <AreaChart data={data} margin={{right: 36, left: 0, top: 18}} >
        <CartesianGrid strokeDasharray={"3 3"}/>
        <defs>
          <linearGradient id="composeGrammarStatsColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="Score"
          stroke="#0284C7"
          fillOpacity={1}
          fill="url(#composeGrammarStatsColor)"
          isAnimationActive={false}
        />
        <XAxis dataKey={'name'} />
        <YAxis dataKey={'Score'} mirror/>
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
