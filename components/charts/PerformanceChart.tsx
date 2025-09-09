
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import type { MockScore } from '../../types';
import { CUTOFFS, MAX_MARKS } from '../../constants';

interface PerformanceChartProps {
    scores: MockScore[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ scores }) => {
    const data = scores.map((score, index) => ({
        name: `Mock ${index + 1}`,
        total: score.total,
        reasoning: score.reasoning,
        generalAwareness: score.generalAwareness,
        quantitativeAptitude: score.quantitativeAptitude,
        english: score.english,
    }));

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 0, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(8, 247, 254, 0.2)" />
                    <XAxis dataKey="name" stroke="rgba(8, 247, 254, 0.7)" />
                    <YAxis stroke="rgba(8, 247, 254, 0.7)" domain={[0, MAX_MARKS.TOTAL]} />
                    <Tooltip
                        contentStyle={{
                            background: "rgba(10, 10, 20, 0.8)",
                            borderColor: "rgba(8, 247, 254, 0.4)",
                            boxShadow: "0 0 20px rgba(8, 247, 254, 0.15)",
                            color: '#fff',
                        }}
                        cursor={{ stroke: '#d946ef', strokeWidth: 1 }}
                    />
                    <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                    <ReferenceLine y={CUTOFFS.OVERALL} label={{ value: `Cutoff ${CUTOFFS.OVERALL}`, position: 'insideTopLeft', fill: '#facc15' }} stroke="#facc15" strokeDasharray="4 4" />
                    <Line type="monotone" dataKey="total" stroke="#d946ef" strokeWidth={2} activeDot={{ r: 8 }} dot={{ style: { filter: 'drop-shadow(0 0 5px #d946ef)'} }}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;
