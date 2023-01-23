import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

// create dummy data
const data = [
  { name: 'Senin', Score: 0 },
  { name: 'Selasa', Score: 200 },
  { name: 'Rabu', Score: 0 },
  { name: 'Kamis', Score: 150 },
  { name: 'Jumat', Score: 250 },
  { name: 'Sabtu', Score: 250 },
  { name: 'Minggu', Score: 250 },
];

export default function ListenTypingStats() {
  return (
    <ResponsiveContainer height={'100%'} width={'99%'}>
      <AreaChart data={data} margin={{ right: 36, left: 0, top: 18 }}>
        <CartesianGrid strokeDasharray={'3 3'} />
        <defs>
          <linearGradient
            id="listenTypingStatsColor"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#FB923C" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FB923C" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          dataKey="Score"
          stroke="#EA580C"
          fillOpacity={1}
          fill="url(#listenTypingStatsColor)"
          isAnimationActive={false}
        />
        <XAxis dataKey={'name'} />
        <YAxis dataKey={'Score'} mirror />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
