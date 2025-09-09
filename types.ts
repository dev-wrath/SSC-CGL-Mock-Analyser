
export interface SectionalScore {
  reasoning: number;
  generalAwareness: number;
  quantitativeAptitude: number;
  english: number;
}

export interface MockScore extends SectionalScore {
  id: string;
  date: string;
  total: number;
}

export interface Section {
  id: keyof SectionalScore;
  name: string;
  maxMarks: number;
  cutoff: number;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}
