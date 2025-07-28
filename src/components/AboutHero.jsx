// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // Enhanced SVG Icons with gradient fills
// const IconAward = () => (
//   <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
//     <defs>
//       <linearGradient id="awardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#3B82F6" />
//         <stop offset="100%" stopColor="#8B5CF6" />
//       </linearGradient>
//     </defs>
//     <circle cx="12" cy="8" r="7" stroke="url(#awardGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
//     <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="url(#awardGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
//   </svg>
// );

// const IconUsers = () => (
//   <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
//     <defs>
//       <linearGradient id="usersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#EC4899" />
//         <stop offset="100%" stopColor="#F43F5E" />
//       </linearGradient>
//     </defs>
//     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//     <circle cx="9" cy="7" r="4" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//   </svg>
// );

// const IconCode = () => (
//   <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
//     <defs>
//       <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#10B981" />
//         <stop offset="100%" stopColor="#3B82F6" />
//       </linearGradient>
//     </defs>
//     <polyline points="16 18 22 12 16 6" stroke="url(#codeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
//     <polyline points="8 6 2 12 8 18" stroke="url(#codeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
//   </svg>
// );

// const IconGlobe = () => (
//   <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
//     <defs>
//       <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#F59E0B" />
//         <stop offset="100%" stopColor="#EF4444" />
//       </linearGradient>
//     </defs>
//     <circle cx="12" cy="12" r="10" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
//     <line x1="2" y1="12" x2="22" y2="12" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
//     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//   </svg>
// );

// const AboutHero = () => {
//   const [innovationIdea, setInnovationIdea] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const stats = [
//     { 
//       value: '50+', 
//       label: 'Projects Completed', 
//       icon: <IconAward />,
//       bg: 'bg-gradient-to-br from-blue-100 to-purple-100'
//     },
//     { 
//       value: '10K+', 
//       label: 'Users Worldwide', 
//       icon: <IconUsers />,
//       bg: 'bg-gradient-to-br from-pink-100 to-rose-100'
//     },
//     { 
//       value: '15', 
//       label: 'Team Members', 
//       icon: <IconCode />,
//       bg: 'bg-gradient-to-br from-green-100 to-blue-100'
//     },
//     { 
//       value: '5', 
//       label: 'Years Experience', 
//       icon: <IconGlobe />,
//       bg: 'bg-gradient-to-br from-amber-100 to-red-100'
//     }
//   ];

//   const generateInnovationIdea = async () => {
//     setIsLoading(true);
//     setInnovationIdea('');
    
//     // Simulate API call
//     setTimeout(() => {
//       const ideas = [
//         "Developing AI-powered interfaces that adapt to user behavior in real-time, creating personalized experiences without manual configuration.",
//         "Pioneering blockchain-based identity solutions that give users complete control over their personal data across all platforms.",
//         "Creating 3D spatial web interfaces that blend AR and web technologies for immersive browser experiences."
//       ];
//       setInnovationIdea(ideas[Math.floor(Math.random() * ideas.length)]);
//       setIsLoading(false);
//     }, 1500);
//   };

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-50/80 to-purple-50/80 overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
    
    
//       {/* Dynamic background elements */}
//       <motion.div
//         animate={{ 
//           x: [0, 40, 0],
//           y: [0, -30, 0],
//           rotate: [0, 5, 0]
//         }}
//         transition={{ 
//           duration: 25, 
//           repeat: Infinity, 
//           ease: "easeInOut" 
//         }}
//         className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//       />
      
//       <motion.div
//         animate={{ 
//           x: [0, -60, 0],
//           y: [0, 40, 0],
//           rotate: [0, -8, 0]
//         }}
//         transition={{ 
//           duration: 30, 
//           repeat: Infinity, 
//           ease: "easeInOut" 
//         }}
//         className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
//       />

//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/soft-circle-pattern.png')] opacity-10" />

//       <div className="container mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-center lg:text-left"
//           >
//             <motion.span 
//               className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               Redefining Digital Excellence
//             </motion.span>

//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Masterpieces</span> That Inspire
//             </motion.h1>

//             <motion.p
//               className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.7 }}
//             >
//               At Stanza Stack, we blend cutting-edge technology with artistic vision to create digital experiences that captivate and convert. Our team of passionate innovators is dedicated to pushing boundaries and setting new standards in web development.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.7 }}
//             >
//               <motion.button
//                 whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(99, 102, 241, 0.5)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
//               >
//                 Our Journey
//               </motion.button>
              
//               <motion.button
//                 onClick={generateInnovationIdea}
//                 whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.3)" }}
//                 whileTap={{ scale: 0.98 }}
//                 className="px-8 py-3.5 bg-white text-gray-800 font-semibold rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:bg-gray-50 flex items-center gap-2"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     <span>Thinking...</span>
//                   </>
//                 ) : (
//                   <>
//                     <span className="text-blue-600">✨</span>
//                     <span>Future Vision</span>
//                   </>
//                 )}
//               </motion.button>
//             </motion.div>

//             {innovationIdea && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 transition={{ duration: 0.5 }}
//                 className="mt-6 p-5 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 text-left max-w-xl lg:max-w-none mx-auto lg:mx-0 overflow-hidden"
//               >
//                 <h3 className="text-lg font-semibold text-blue-700 mb-2">Innovation Preview:</h3>
//                 <p className="text-gray-700">{innovationIdea}</p>
//               </motion.div>
//             )}
//           </motion.div>

//           {/* Right Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, rotate: 2 }}
//             animate={{ opacity: 1, x: 0, rotate: 0 }}
//             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
//             className="relative p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
//           >
//             <motion.h2
//               className="text-2xl font-bold text-gray-900 mb-8 text-center"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               Our <span className="text-blue-600">Impact</span> in Numbers
//             </motion.h2>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
//                   whileHover={{ 
//                     y: -5,
//                     scale: 1.03,
//                     boxShadow: "0 10px 25px -10px rgba(0,0,0,0.1)"
//                   }}
//                   className={`p-6 rounded-xl ${stat.bg} text-center flex flex-col items-center justify-center transition-all duration-300`}
//                 >
//                   <div className="mb-3">
//                     {stat.icon}
//                   </div>
//                   <span className="text-3xl font-bold mb-1 text-gray-900">{stat.value}</span>
//                   <span className="text-sm font-medium text-gray-700">{stat.label}</span>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.div
//               className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
//               animate={{ scale: [1, 1.1, 1] }}
//               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutHero;

























import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aboutBg from '../assets/aboutbg.avif';

// Enhanced SVG Icons with gradient fills
const IconAward = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="awardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="7" stroke="url(#awardGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="url(#awardGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
  </svg>
);

const IconUsers = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="usersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#F43F5E" />
      </linearGradient>
    </defs>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <circle cx="9" cy="7" r="4" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#usersGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const IconCode = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    <polyline points="16 18 22 12 16 6" stroke="url(#codeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
    <polyline points="8 6 2 12 8 18" stroke="url(#codeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
  </svg>
);

const IconGlobe = () => (
  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
    <line x1="2" y1="12" x2="22" y2="12" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="url(#globeGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

const AboutHero = () => {
  const [innovationIdea, setInnovationIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    { 
      value: '50+', 
      label: 'Projects Completed', 
      icon: <IconAward />,
      bg: 'bg-gradient-to-br from-blue-100 to-purple-100'
    },
    { 
      value: '10K+', 
      label: 'Users Worldwide', 
      icon: <IconUsers />,
      bg: 'bg-gradient-to-br from-pink-100 to-rose-100'
    },
    { 
      value: '15', 
      label: 'Team Members', 
      icon: <IconCode />,
      bg: 'bg-gradient-to-br from-green-100 to-blue-100'
    },
    { 
      value: '5', 
      label: 'Years Experience', 
      icon: <IconGlobe />,
      bg: 'bg-gradient-to-br from-amber-100 to-red-100'
    }
  ];

  const generateInnovationIdea = async () => {
    setIsLoading(true);
    setInnovationIdea('');
    
    // Simulate API call
    setTimeout(() => {
      const ideas = [
        "Developing AI-powered interfaces that adapt to user behavior in real-time, creating personalized experiences without manual configuration.",
        "Pioneering blockchain-based identity solutions that give users complete control over their personal data across all platforms.",
        "Creating 3D spatial web interfaces that blend AR and web technologies for immersive browser experiences."
      ];
      setInnovationIdea(ideas[Math.floor(Math.random() * ideas.length)]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={aboutBg}
          alt="Background"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black" />
      </div>

      {/* Dynamic background elements */}
      <motion.div
        animate={{ 
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-screen filter blur-3xl opacity-30"
      />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span 
              className="inline-block mb-4 text-sm font-semibold tracking-wider text-white uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Redefining Digital Excellence
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001EFF] to-[#00F3FF]">Digital Masterpieces</span> That Inspire
            </motion.h1>

            <motion.p
              className="text-lg text-white mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              At Stanza Stack, we blend cutting-edge technology with artistic vision to create digital experiences that captivate and convert. Our team of passionate innovators is dedicated to pushing boundaries and setting new standards in web development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Our Journey
              </motion.button>
              
              <motion.button
                onClick={generateInnovationIdea}
                whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(236, 72, 153, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 shadow-sm transition-all duration-300 hover:bg-white/20 flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Thinking...</span>
                  </>
                ) : (
                  <>
                    <span>✨</span>
                    <span>Future Vision</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {innovationIdea && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-5 bg-white/10 backdrop-blur-sm rounded-xl shadow-md border border-white/20 text-left max-w-xl lg:max-w-none mx-auto lg:mx-0 overflow-hidden"
              >
                <h3 className="text-lg font-semibold text-blue-200 mb-2">Innovation Preview:</h3>
                <p className="text-blue-100">{innovationIdea}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
          >
            <motion.h2
              className="text-2xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001EFF] to-[#00F3FF]">Impact</span> in Numbers
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.03,
                    boxShadow: "0 10px 25px -10px rgba(255,255,255,0.1)"
                  }}
                  className={`p-6 rounded-xl ${stat.bg} bg-opacity-70 backdrop-blur-sm text-center flex flex-col items-center justify-center transition-all duration-300 border border-white/20`}
                >
                  <div className="mb-3">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold mb-1 text-black">{stat.value}</span>
                  <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400/20 rounded-full mix-blend-screen filter blur-2xl opacity-30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
