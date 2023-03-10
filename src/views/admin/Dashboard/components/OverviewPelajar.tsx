import { apiGet } from '@/service/api';
import { education } from '@/utils/getEducation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Text,
} from 'recharts';

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
    percent,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        verticalAnchor="start"
        width={'20ch'}
      >
        {payload.name}
      </Text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Total ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function OverviewPelajar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [overviewData, setOverviewData] = useState<
    {
      name: string;
      value: number;
    }[]
  >([]);

  const onPieEnter = (_: any, index: any) => {
    setActiveIndex(index);
  };
  // create colors like tailwindcss colors option
  const COLORS = [
    '#F56565',
    '#ED8936',
    '#ECC94B',
    '#48BB78',
    '#38B2AC',
    '#4299E1',
    '#667EEA',
    '#9F7AEA',
    '#ED64A6',
  ];

  const getStats = async () => {
    try {
      const response = await apiGet('/student/stats/education', {});
      const { data } = response;
      setOverviewData(data);
    } catch (error) {
      const response = error as any;
      toast(response.message, { type: 'error' });
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  useEffect(() => {
    // set active index to highest value
    let highestValue = 0;
    let highestIndex = 0;
    overviewData.forEach((data, index) => {
      if (data.value > highestValue) {
        highestValue = data.value;
        highestIndex = index;
      }
    });
    setActiveIndex(highestIndex);
  }, [overviewData]);

  return (
    <div className="relative bg-white border shadow-md min-h-[320px] min-w-[280px] rounded-xl p-4 py-10">
      <div className="bg-orange-400 font-semibold text-white px-6 py-3 rounded-xl absolute -top-6 left-1/2 -translate-x-1/2 w-4/5 shadow-xl">
        <div>
          <span className="text-xs">Overview</span>
          <h2 className="text-lg">Pelajar</h2>
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[700px]">
          <ResponsiveContainer width="99%" height={400}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                cx="50%"
                cy="50%"
                data={overviewData}
                innerRadius={90}
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {overviewData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
