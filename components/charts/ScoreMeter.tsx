
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { MAX_MARKS } from '../../constants';

interface ScoreMeterProps {
    score: number;
}

const ScoreMeter: React.FC<ScoreMeterProps> = ({ score }) => {
    const data = [
        {
            name: 'Score',
            value: score,
            fill: '#d946ef', // fuchsia-500
        },
    ];

    return (
        <div style={{ width: '100%', height: 150 }}>
            <ResponsiveContainer>
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={data}
                    startAngle={90}
                    endAngle={-270}
                    barSize={20}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, MAX_MARKS.TOTAL]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        background={{ fill: 'rgba(8, 247, 254, 0.2)' }}
                        dataKey="value"
                        cornerRadius={10}
                        angleAxisId={0}
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-fuchsia-400 text-4xl font-bold"
                        style={{ filter: 'drop-shadow(0 0 5px #d946ef)' }}
                    >
                        {score}
                    </text>
                     <text
                        x="50%"
                        y="68%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-cyan-400/70 text-sm"
                    >
                        / {MAX_MARKS.TOTAL}
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScoreMeter;
