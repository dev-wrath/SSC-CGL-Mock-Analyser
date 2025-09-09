
import React from 'react';
import type { MockScore } from '../types';
import ScoreMeter from './charts/ScoreMeter';
import PerformanceChart from './charts/PerformanceChart';
import SectionalChart from './charts/SectionalChart';
import QuestionAnalysis from './QuestionAnalysis';

interface DashboardProps {
    scores: MockScore[];
}

const Dashboard: React.FC<DashboardProps> = ({ scores }) => {
    const latestScore = scores.length > 0 ? scores[scores.length - 1] : null;

    if (scores.length === 0) {
        return (
            <div className="cyber-card p-8 h-full flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-cyan-400 cyber-glow mb-2">No Data Yet</h2>
                    <p className="text-gray-400">Add your first mock score to see your performance dashboard.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="cyber-card p-6 flex flex-col items-center justify-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Latest Overall Score</h3>
                    {latestScore && <ScoreMeter score={latestScore.total} />}
                </div>
                {latestScore && <QuestionAnalysis score={latestScore} />}
            </div>
             <div className="cyber-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Sectional Performance (Latest)</h3>
                {latestScore && <SectionalChart score={latestScore} />}
            </div>
            <div className="cyber-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Performance Over Time</h3>
                <PerformanceChart scores={scores} />
            </div>
        </div>
    );
};

export default Dashboard;