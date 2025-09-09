import React, { useState } from 'react';
import type { SectionalScore } from '../types';
import { SECTIONS } from '../constants';

interface ScoreInputFormProps {
    onAddScore: (sectionalScore: SectionalScore) => void;
}

type FormState = {
    [K in keyof SectionalScore]: number | '';
};

const initialFormState: FormState = {
    reasoning: '',
    generalAwareness: '',
    quantitativeAptitude: '',
    english: '',
};

const ScoreInputForm: React.FC<ScoreInputFormProps> = ({ onAddScore }) => {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value === '') {
            setFormState(prevState => ({
                ...prevState,
                [name]: '',
            }));
        } else {
            const score = Math.max(0, Math.min(Number(value), 50));
            setFormState(prevState => ({
                ...prevState,
                [name]: score,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const sectionalScore: SectionalScore = {
            reasoning: Number(formState.reasoning),
            generalAwareness: Number(formState.generalAwareness),
            quantitativeAptitude: Number(formState.quantitativeAptitude),
            english: Number(formState.english),
        };
        onAddScore(sectionalScore);
        setFormState(initialFormState);
    };

    return (
        <div className="cyber-card p-6">
            <h2 className="text-xl font-bold text-white mb-4">Add New Mock Score</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {SECTIONS.map((section) => {
                    const Icon = section.icon;
                    return (
                        <div key={section.id}>
                            <label htmlFor={section.id} className={`flex items-center text-sm font-medium ${section.color} mb-1`}>
                                <Icon className="w-5 h-5 mr-2" />
                                {section.name}
                            </label>
                            <input
                                type="number"
                                id={section.id}
                                name={section.id}
                                value={formState[section.id]}
                                onChange={handleChange}
                                className="input-cyber w-full text-white rounded-lg p-2 transition duration-300"
                                min="0"
                                max={section.maxMarks}
                                required
                                placeholder="Enter score"
                            />
                        </div>
                    );
                })}
                <button
                    type="submit"
                    className="w-full cyber-button font-bold py-2 px-4 rounded-lg"
                >
                    Add Score
                </button>
            </form>
        </div>
    );
};

export default ScoreInputForm;