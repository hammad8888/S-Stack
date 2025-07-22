// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// export default function TopBar() {
//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -50, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//         className="w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white text-sm font-medium z-50"
//       >
//         <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <span className="font-semibold">📢 Welcome To:</span>
//             <Link to="/stanzastack.com" className=" hover:text-yellow-200 transition">
//               Stanza Stack
//             </Link>
           
//           </div>

//           <div className="hidden sm:block">
//             <Link to="/login" className="hover:underline mr-2">Login</Link> |{' '}
//             <Link to="/signup" className="hover:underline ml-2">Signup</Link>
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }



















import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const messages = [
  "Welcome to Stanza Stack - Where ideas meet innovation! Start your journey today.",
  "🔥 New Feature Alert: Try our AI-powered code suggestions!",
  "🎉 Special Offer: Get 3 months free with annual subscription!",
  "💡 Pro Tip: Use our templates to kickstart your projects!"
];

export default function TopBar() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // Change message every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full bg-gradient-to-r from-blue-700 to-blue-400 text-white text-sm font-medium z-50"
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-2 overflow-hidden">
            <motion.span 
              className="font-semibold"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4
              }}
            >
              📢
            </motion.span>
            
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentMessageIndex}
                initial={{ 
                  opacity: 0,
                  x: -30,
                  filter: 'blur(5px)'
                }}
                animate={{ 
                  opacity: 1,
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { 
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                  }
                }}
                exit={{ 
                  opacity: 0,
                  x: 30,
                  filter: 'blur(5px)',
                  transition: { 
                    ease: 'easeInOut',
                    duration: 0.3
                  }
                }}
                transition={{ 
                  duration: 0.5,
                  ease: 'backOut'
                }}
                className="whitespace-nowrap"
              >
                {messages[currentMessageIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden sm:block">
            <Link to="/login" className="hover:underline mr-2">Login</Link> |{' '}
            <Link to="/signup" className="hover:underline ml-2">Signup</Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}