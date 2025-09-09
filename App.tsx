
import React, { useState, useEffect } from 'react';
import type { MockScore, SectionalScore } from './types';
import Header from './components/Header';
import ScoreInputForm from './components/ScoreInputForm';
import ScoreHistory from './components/ScoreHistory';
import Dashboard from './components/Dashboard';
import { MAX_MARKS } from './constants';

const getInitialScores = (): MockScore[] => {
    try {
        const item = window.localStorage.getItem('cglMockScores');
        if (item) {
            return JSON.parse(item);
        }
    } catch (error) {
        console.warn('Error reading from localStorage', error);
    }

    // Return sample data if local storage is empty
    return [
        { id: '1', date: '2023-10-01', reasoning: 35, generalAwareness: 22, quantitativeAptitude: 40, english: 38, total: 135 },
        { id: '2', date: '2023-10-08', reasoning: 38, generalAwareness: 25, quantitativeAptitude: 42, english: 40, total: 145 },
        { id: '3', date: '2023-10-15', reasoning: 40, generalAwareness: 20, quantitativeAptitude: 38, english: 41, total: 139 },
        { id: '4', date: '2023-10-22', reasoning: 42, generalAwareness: 28, quantitativeAptitude: 45, english: 44, total: 159 },
    ];
};


const App: React.FC = () => {
    const [scores, setScores] = useState<MockScore[]>(getInitialScores);

    useEffect(() => {
        try {
            window.localStorage.setItem('cglMockScores', JSON.stringify(scores));
        } catch (error) {
            console.error('Error writing to localStorage', error);
        }
    }, [scores]);

    const addScore = (sectionalScore: SectionalScore) => {
        const total = Object.values(sectionalScore).reduce((sum, score) => sum + score, 0);
        if (total > MAX_MARKS.TOTAL) {
            alert(`Total score cannot exceed ${MAX_MARKS.TOTAL}`);
            return;
        }

        const newScore: MockScore = {
            id: new Date().toISOString(),
            date: new Date().toISOString().split('T')[0],
            ...sectionalScore,
            total,
        };
        setScores(prevScores => [...prevScores, newScore]);
    };

    const deleteScore = (id: string) => {
        setScores(prevScores => prevScores.filter(score => score.id !== id));
    };
    
    return (
        <div className="min-h-screen">
            <Header />
            <main className="container mx-auto p-4 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 flex flex-col gap-8">
                        <ScoreInputForm onAddScore={addScore} />
                        <ScoreHistory scores={scores} onDeleteScore={deleteScore} />
                    </div>
                    <div className="lg:col-span-2">
                        <Dashboard scores={scores} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
