
import type { Section } from './types';
import { BrainIcon } from './components/icons/BrainIcon';
import { TargetIcon } from './components/icons/TargetIcon';
import { CalculatorIcon } from './components/icons/CalculatorIcon';
import { BookIcon } from './components/icons/BookIcon';

export const MAX_MARKS = {
  REASONING: 50,
  GENERAL_AWARENESS: 50,
  QUANTITATIVE_APTITUDE: 50,
  ENGLISH: 50,
  TOTAL: 200,
};

export const QUESTIONS = {
  REASONING: 25,
  GENERAL_AWARENESS: 25,
  QUANTITATIVE_APTITUDE: 25,
  ENGLISH: 25,
  TOTAL: 100,
};

export const CUTOFFS = {
  REASONING: 15,
  GENERAL_AWARENESS: 10,
  QUANTITATIVE_APTITUDE: 15,
  ENGLISH: 20,
  OVERALL: 130,
};

export const SECTIONS: Section[] = [
  {
    id: 'reasoning',
    name: 'Reasoning',
    maxMarks: MAX_MARKS.REASONING,
    cutoff: CUTOFFS.REASONING,
    color: 'text-cyan-400',
    icon: BrainIcon,
  },
  {
    id: 'generalAwareness',
    name: 'General Awareness',
    maxMarks: MAX_MARKS.GENERAL_AWARENESS,
    cutoff: CUTOFFS.GENERAL_AWARENESS,
    color: 'text-fuchsia-500',
    icon: TargetIcon,
  },
  {
    id: 'quantitativeAptitude',
    name: 'Quantitative Aptitude',
    maxMarks: MAX_MARKS.QUANTITATIVE_APTITUDE,
    cutoff: CUTOFFS.QUANTITATIVE_APTITUDE,
    color: 'text-yellow-400',
    icon: CalculatorIcon,
  },
  {
    id: 'english',
    name: 'English Comprehension',
    maxMarks: MAX_MARKS.ENGLISH,
    cutoff: CUTOFFS.ENGLISH,
    color: 'text-lime-400',
    icon: BookIcon,
  },
];