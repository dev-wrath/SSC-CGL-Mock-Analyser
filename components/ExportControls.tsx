import React from 'react';
import type { MockScore } from '../types';
import { SECTIONS } from '../constants';

interface ExportControlsProps {
    scores: MockScore[];
}

const ExportControls: React.FC<ExportControlsProps> = ({ scores }) => {

    const handleExportCSV = () => {
        const headers = ['Date', ...SECTIONS.map(s => s.name), 'Total'];
        const rows = scores.map(score => 
            [
                score.date, 
                score.reasoning, 
                score.generalAwareness, 
                score.quantitativeAptitude, 
                score.english, 
                score.total
            ].join(',')
        );

        const csvContent = [headers.join(','), ...rows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.href) {
            URL.revokeObjectURL(link.href);
        }
        link.href = URL.createObjectURL(blob);
        link.download = `cgl-mock-scores-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleExportPDF = () => {
        // @ts-ignore
        const doc = new window.jsPDF();
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor('#08f7fe');
        doc.text("SSC CGL Mock Score Analytics", 14, 22);

        // Summary Stats
        if (scores.length > 0) {
            const totalMocks = scores.length;
            const totalScores = scores.map(s => s.total);
            const avgScore = totalScores.reduce((a, b) => a + b, 0) / totalMocks;
            const highScore = Math.max(...totalScores);
            const lowScore = Math.min(...totalScores);

            doc.setFontSize(11);
            doc.setTextColor('#ffffff');
            doc.text(`Total Mocks Taken: ${totalMocks}`, 14, 35);
            doc.text(`Average Score: ${avgScore.toFixed(2)}`, 14, 40);
            doc.text(`Highest Score: ${highScore}`, 14, 45);
            doc.text(`Lowest Score: ${lowScore}`, 14, 50);
        }

        const head = [['Date', ...SECTIONS.map(s => s.name.split(' ')[0]), 'Total']];
        const body = scores.map(score => [
            score.date, 
            score.reasoning, 
            score.generalAwareness, 
            score.quantitativeAptitude, 
            score.english, 
            score.total
        ]);

        (doc as any).autoTable({
            startY: 60,
            head: head,
            body: body,
            theme: 'grid',
            headStyles: { fillColor: [8, 247, 254], textColor: [10, 10, 20] },
            styles: { font: 'helvetica', cellPadding: 2.5, fontSize: 9 },
        });
        
        doc.save(`cgl-mock-scores-analytics-${new Date().toISOString().split('T')[0]}.pdf`);
    };

    return (
        <div className="flex gap-2">
            <button onClick={handleExportCSV} className="cyber-button text-xs py-1 px-3">Export CSV</button>
            <button onClick={handleExportPDF} className="cyber-button text-xs py-1 px-3">Export PDF</button>
        </div>
    );
};

export default ExportControls;