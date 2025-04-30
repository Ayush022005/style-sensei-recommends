
import React from 'react';

const LoadingAnalysis = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-t-fashion-mauve border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-[6px] rounded-full border-4 border-t-fashion-sage border-r-transparent border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
        </div>
        <h2 className="text-2xl font-serif font-medium">Analyzing your features...</h2>
        <div className="max-w-md mx-auto">
          <p className="text-muted-foreground mb-2">Our AI is assessing your:</p>
          <ul className="text-sm grid grid-cols-2 gap-2 max-w-xs mx-auto">
            <li className="animate-pulse-soft flex items-center justify-center bg-fashion-mauve/10 py-2 px-4 rounded-md">
              Face shape
            </li>
            <li className="animate-pulse-soft flex items-center justify-center bg-fashion-sage/10 py-2 px-4 rounded-md animation-delay-300">
              Skin undertone
            </li>
            <li className="animate-pulse-soft flex items-center justify-center bg-fashion-sage/10 py-2 px-4 rounded-md animation-delay-600">
              Body proportions
            </li>
            <li className="animate-pulse-soft flex items-center justify-center bg-fashion-mauve/10 py-2 px-4 rounded-md animation-delay-900">
              Contrast levels
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnalysis;
