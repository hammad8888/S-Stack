// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import heroVideo from '../assets/hero.mp4';

// export default function Hero() {
//   const floatingVariants = {
//     float: {
//       y: [0, -15, 0],
//       transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
//     },
//     floatReverse: {
//       y: [0, 15, 0],
//       transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
//     },
//     rotate: {
//       rotate: [0, 360],
//       transition: { duration: 20, repeat: Infinity, ease: 'linear' }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' }
//     }
//   };

//   return (
//     <section className="relative h-[80vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-gray-900">
//       {/* Background video */}
//       <div className="absolute inset-0 z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//           src={heroVideo}
//           poster="/assets/images/hero-poster.jpg"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="container mx-auto px-4 z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left content */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//             className="text-center lg:text-left"
//           >
//             <motion.span
//               variants={textVariants}
//               className="inline-block px-4 py-1 text-sm font-medium text-white bg-accent/30 rounded-full backdrop-blur-sm mb-2"
//             >
//               Expert MERN & App Development
//             </motion.span>

//             <motion.h1
//               variants={textVariants}
//               className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-4"
//             >
//               Empowering Ideas with
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
//                 StanzaStack
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={textVariants}
//               className="text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-white/80 mb-8"
//             >
//               Full-stack solutions in MERN, Web Development & App Development.
//               Turn your concept into a scalable, fast, and responsive digital product.
//             </motion.p>

//             <motion.div
//               variants={textVariants}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <Link
//                 to="/get-started"
//                 className="relative overflow-hidden inline-flex items-center justify-center bg-accent hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
//               >
//                 <motion.span whileHover={{ scale: 1.05 }} className="relative z-10 flex items-center">
//                   Get Started
//                   <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </motion.span>
//               </Link>

//               <Link
//                 to="/services"
//                 className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/5"
//               >
//                 View Services
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right visual content */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.3 }}
//             className="hidden lg:flex relative justify-center items-center"
//           >
//             {/* Main card */}
//             <motion.div
//               className="w-64 h-64 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center text-white"
//               animate={{
//                 y: [0, -10, 0],
//                 rotate: [0, 2, -2, 0]
//               }}
//               transition={{
//                 duration: 7,
//                 repeat: Infinity,
//                 ease: 'easeInOut'
//               }}
//             >
//               <div className="text-4xl mb-2">💻</div>
//               <h3 className="font-semibold text-xl">MERN Stack</h3>
//               <p className="text-sm text-white/60 mt-2 px-4">Scalable & secure full-stack development</p>
//             </motion.div>

//             {/* Floating service bubbles */}
//             {[
//               { label: 'Web Dev', emoji: '🌐', x: -120, y: -70 },
//               { label: 'App Dev', emoji: '📱', x: 130, y: -60 },
//               { label: 'MERN', emoji: '⚙️', x: 0, y: 130 }
//             ].map(({ label, emoji, x, y }, i) => (
//               <motion.div
//                 key={label}
//                 className="absolute bg-white/10 backdrop-blur-md text-white border border-white/10 rounded-lg px-4 py-2 shadow-lg text-sm font-semibold flex items-center gap-2"
//                 initial={{ opacity: 0, x, y }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 + i * 0.3 }}
//                 style={{ transform: `translate(${x}px, ${y}px)` }}
//               >
//                 <span>{emoji}</span>
//                 {label}
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating background blobs */}
//       <motion.div
//         className="absolute top-[20%] left-[10%] w-10 h-10 rounded-full bg-accent blur-xl opacity-50"
//         variants={floatingVariants}
//         animate={["float", "rotate"]}
//       />
//       <motion.div
//         className="absolute bottom-[15%] right-[12%] w-16 h-16 rounded-full bg-primary-light blur-xl opacity-30"
//         variants={floatingVariants}
//         animate="floatReverse"
//       />
//     </section>
//   );
// }

































import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero.mp4';

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative h-[80vh] min-h-[400px] w-full flex items-center overflow-hidden bg-gray-900">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={heroVideo}
          poster="/assets/images/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-accent/30 rounded-full backdrop-blur-sm">
              Expert MERN & App Development
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
          >
            Empowering Ideas with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
              StanzaStack
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            Full-stack solutions in MERN, Web Development & App Development.
            Turn your concept into a scalable, fast, and responsive digital product.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/get-started"
              className="relative overflow-hidden inline-flex items-center justify-center bg-accent hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <motion.span 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative z-10 flex items-center"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              <motion.span 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Services
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle floating elements for visual interest */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
}