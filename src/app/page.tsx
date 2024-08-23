import Details from "@/components/Details";
import HomePageImage from "@/components/HomePageImage";

export default function Home() {
  return (
    <main className="mt-10 flex flex-col lg:flex-row justify-center min-h-screen">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl p-4 space-y-8 lg:space-y-0 lg:space-x-8 gap-2">
        <div className="flex-1">
          <Details />
        </div>
        <div className="flex-1">
          <HomePageImage />
        </div>
      </div>
    </main>
  );
}


// import React from 'react';

// function Details() {
//   return (
//     <div className='flex items-center'>
//       <div className=''>
//       <h1 className='text-2xl'>Hey, there<span className='text-accent'>!</span></h1>
//       <p className='mt-2 text-4xl'>I'm</p>
//       <p className='text-6xl'>
//         {Array.from('Ganesh Mallela.').map((letter, index) => (
//           <span
//             key={index}
//             className={`inline-block fade-in fade-in-delay`}
//             style={{ '--animation-delay': `${index * 0.05}s` }}
//           >
//             {letter === 'G' || letter === 'M' ? (
//               <span className={`text-accent`}>{letter}</span>
//             ) : (
//               letter
//             )}
//           </span>
//         ))}
//       </p>
//       <p className='mt-2 text-3xl'>
//         {Array.from('Software Developer').map((letter, index) => (
//           <span
//             key={index}
//             className={`inline-block fade-in fade-in-delay`}
//             style={{ '--animation-delay': `${(index + 20) * 0.05}s` }} // Adjust delay to ensure it's sequential
//           >
//             {letter}
//           </span>
//         ))}
//       </p>
//       <p className="mt-4 text-lg text-gray-700">
//         I'm a passionate developer with a knack for creating beautiful and functional web applications.
//       </p>
//     </div>
//     </div>
//   );
// }

// export default Details;
