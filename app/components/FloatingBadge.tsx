
// import Link from 'next/link';
// import React from 'react';

// const FloatingBadge: React.FC = () => {
//   return (
//     // ADJUSTMENT: Tighter margins on mobile (bottom-4 right-4), larger on desktop (md:bottom-10 md:right-10)
//     <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 flex items-center justify-center pointer-events-auto">
//       <Link
//         href="#projects"
//         // ADJUSTMENT: Smaller size on mobile (h-24 w-24), original size on desktop (md:h-32 md:w-32)
//         className="group relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
//       >
//         <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
//           <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
//             <path
//               id="circlePath"
//               d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
//               fill="transparent"
//             />
//             <text className="fill-black text-[10.5px] font-bold uppercase tracking-widest">
//               <textPath href="#circlePath" startOffset="0%">
//                 Explore Projects • Explore Projects •
//               </textPath>
//             </text>
//           </svg>
//         </div>

//         {/* ADJUSTMENT: Smaller inner red circle on mobile (h-10 w-10), original size on desktop (md:h-12 md:w-12) */}
//         <div className="absolute flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:-rotate-45">
//           <svg 
//             width="20" // Slightly smaller icon base size
//             height="20" 
//             viewBox="0 0 24 24" 
//             fill="none" 
//             stroke="currentColor" 
//             strokeWidth="2"
//             className="md:w-6 md:h-6" // Restores icon size on desktop
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/>
//           </svg>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default FloatingBadge;







import React from 'react';

// Define the prop type so TypeScript is happy
interface FloatingBadgeProps {
  onClick: () => void;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 flex items-center justify-center pointer-events-auto">
      {/* Changed from <Link> to <button> and added the onClick prop */}
      <button
        onClick={onClick}
        aria-label="Explore Projects"
        className="group relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#ff4103] focus-visible:outline-none"
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
                Explore Projects • Explore Projects •
              </textPath>
            </text>
          </svg>
        </div>

        <div className="absolute flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:-rotate-45">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="md:w-6 md:h-6" 
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