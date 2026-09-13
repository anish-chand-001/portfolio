import React from 'react';

// Define the prop type so TypeScript is happy
interface FloatingBadgeProps {
  onClick: () => void;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ onClick }) => {
  return (
    // Scaled the positioning breakpoints
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 2xl:bottom-12 2xl:right-12 z-50 flex items-center justify-center pointer-events-auto">
      <button
        onClick={onClick}
        aria-label="Explore Projects"

        className="group relative flex h-20 w-20 lg:h-24 lg:w-24 2xl:h-36 2xl:w-36 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
      >
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible" role="img" aria-label="Explore Projects circular text">
            <title>Explore Projects</title>
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="transparent"
            />
            <text className="fill-black text-[10.5px] font-bold uppercase tracking-widest">
              <textPath href="#circlePath" startOffset="0%">
                 • Projects • Projects •  Projects 
              </textPath>
            </text>
          </svg>
        </div>

        {/* Scaled the inner red circle and arrow responsively */}
        <div className="absolute flex h-8 w-8 lg:h-10 lg:w-10 2xl:h-12 2xl:w-12 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:-rotate-45">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="w-6 h-6 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6" 
            role="img"
            aria-hidden="true"
          >
            <title>Arrow icon</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingBadge;