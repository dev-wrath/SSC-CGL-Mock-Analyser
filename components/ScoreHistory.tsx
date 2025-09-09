
import React from 'react';
import type { MockScore } from '../types';
import { SECTIONS } from '../constants';
import ExportControls from './ExportControls';

interface ScoreHistoryProps {
    scores: MockScore[];
    onDeleteScore: (id: string) => void;
}

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ scores, onDeleteScore }) => {
    return (
        <div className="cyber-card p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Score History</h2>
                {scores.length > 0 && <ExportControls scores={scores} />}
            </div>
            <div className="overflow-x-auto max-h-96">
                {scores.length > 0 ? (
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs text-cyan-400 uppercase bg-cyan-500/10 sticky top-0" style={{ backdropFilter: 'blur(10px)'}}>
                            <tr>
                                <th scope="col" className="px-4 py-3">Date</th>
                                {SECTIONS.map(s => <th scope="col" key={s.id} className="px-2 py-3 text-center">{s.name.split(' ')[0]}</th>)}
                                <th scope="col" className="px-4 py-3 text-center">Total</th>
                                <th scope="col" className="px-2 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {scores.slice().reverse().map((score) => (
                                <tr key={score.id} className="border-b border-cyan-400/20 hover:bg-cyan-400/10 transition-colors">
                                    <td className="px-4 py-3 font-medium text-white whitespace-nowrap">{score.date}</td>
                                    {SECTIONS.map(s => <td key={s.id} className="px-2 py-3 text-center">{score[s.id]}</td>)}
                                    <td className="px-4 py-3 font-bold text-white text-center">{score.total}</td>
                                    <td className="px-2 py-3 text-center">
                                        <button onClick={() => onDeleteScore(score.id)} className="text-red-500 hover:text-red-400 font-bold text-lg transition-all hover:drop-shadow-[0_0_5px_#ef4444]">&times;</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500 py-4">No history available.</p>
                )}
            </div>
        </div>
    );
};

export default ScoreHistory;