
import React from 'react';
import type { MockScore } from '../types';
import { SECTIONS, QUESTIONS } from '../constants';

interface QuestionAnalysisProps {
    score: MockScore;
}

const QuestionAnalysis: React.FC<QuestionAnalysisProps> = ({ score }) => {
    const totalCorrect = score.total / 2;

    return (
        <div className="cyber-card p-6 h-full">
            <h3 className="text-xl font-semibold text-white mb-4">Question Analysis (Latest)</h3>
            <div className="text-center mb-6">
                <p className="text-sm text-cyan-400/80">Equivalent Correct Questions</p>
                <p className="text-4xl font-bold text-fuchsia-400" style={{ filter: 'drop-shadow(0 0 5px #d946ef)' }}>{totalCorrect}
                    <span className="text-lg text-cyan-400/70"> / {QUESTIONS.TOTAL}</span>
                </p>
            </div>
            <div className="space-y-3">
                {SECTIONS.map(section => {
                    const sectionScore = score[section.id];
                    const sectionCorrect = sectionScore / 2;
                    const sectionQuestionCount = QUESTIONS[section.id.toUpperCase() as keyof typeof QUESTIONS];
                    const percentage = (sectionCorrect / sectionQuestionCount) * 100;
                    
                    return (
                        <div key={section.id} className="text-sm">
                            <div className="flex justify-between items-center mb-1">
                                <span className={section.color}>{section.name}</span>
                                <span className="font-mono text-white">{sectionCorrect} / {sectionQuestionCount}</span>
                            </div>
                            <div className="w-full bg-cyan-400/20 rounded-full h-2">
                                <div className={`${section.color.replace('text-','bg-').replace('-400','-500')}`} style={{ width: `${percentage}%`, height: '100%', borderRadius: '9999px', transition: 'width 0.5s ease-in-out' }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuestionAnalysis;
