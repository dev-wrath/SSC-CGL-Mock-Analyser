
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import type { MockScore } from '../../types';
import { SECTIONS } from '../../constants';

interface SectionalChartProps {
    score: MockScore;
}

const SectionalChart: React.FC<SectionalChartProps> = ({ score }) => {
    const data = SECTIONS.map(section => ({
        name: section.name.split(" ")[0],
        score: score[section.id],
        cutoff: section.cutoff,
        fill: score[section.id] >= section.cutoff ? '#08f7fe' : '#e11d48', // cyan vs rose
    }));

    return (
        <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(8, 247, 254, 0.2)" horizontal={false} />
                    <XAxis type="number" stroke="rgba(8, 247, 254, 0.7)" domain={[0, 50]} />
                    <YAxis type="category" dataKey="name" stroke="rgba(8, 247, 254, 0.7)" width={50} tick={{ fontSize: 12 }} />
                    <Tooltip
                         contentStyle={{
                            background: "rgba(10, 10, 20, 0.8)",
                            borderColor: "rgba(8, 247, 254, 0.4)",
                            boxShadow: "0 0 20px rgba(8, 247, 254, 0.15)",
                            color: '#fff',
                        }}
                        cursor={{ fill: 'rgba(8, 247, 254, 0.1)' }}
                    />
                    <Bar dataKey="score" barSize={20}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SectionalChart;
