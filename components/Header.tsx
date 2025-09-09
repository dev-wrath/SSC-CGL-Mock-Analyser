
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="container mx-auto px-4 py-4 lg:px-8">
            <div className="flex justify-between items-center border-b border-cyan-400/30 pb-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-wider cyber-glow">
                        SSC CGL Mock Score Tracker
                    </h1>
                    <p className="text-sm text-fuchsia-400">Visualize Your Path to Success</p>
                </div>
                <div className="text-sm text-gray-400 whitespace-nowrap">
                     Made in ❤️ with Ashar
                </div>
            </div>
        </header>
    );
};

export default Header;