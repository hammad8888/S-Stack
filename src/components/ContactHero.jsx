// import { motion } from 'framer-motion';
// import contactbg from '../assets/contactbg.avif'; // adjust path based on file location

// const ContactHero = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
//       <div
//         className="absolute inset-0 opacity-20 bg-cover bg-center"
//         style={{ backgroundImage: `url(${contactbg})` }}
//       ></div>

//       <div className="relative max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative z-10"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Get in <span className="text-teal-400">Touch</span>
//             </h1>

//             <p className="text-xl text-gray-300 mb-8 max-w-lg">
//               We're here to help and answer any questions you might have.
//               Reach out and we'll respond as soon as possible.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition shadow-lg"
//               >
//                 Schedule a Call
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-transparent border-2 border-teal-600 hover:border-teal-400 text-white font-medium rounded-lg transition shadow-lg"
//               >
//                 Send Email
//               </motion.button>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="grid grid-cols-2 gap-6 relative z-10"
//           >
//             {[
//               { value: "24h", label: "Avg. Response Time" },
//               { value: "98%", label: "Client Satisfaction" },
//               { value: "50+", label: "Experts Team" },
//               { value: "5", label: "Global Locations" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
//               >
//                 <div className="text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
//                 <div className="text-gray-300 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactHero;














import { motion } from 'framer-motion';
import contactbg from '../assets/contactbg.avif';

const ContactHero = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:stanzastack@gmail.com';
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+9232213018303';
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactbg})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="text-teal-400">Touch</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              We're here to help and answer any questions you might have.
              Reach out and we'll respond as soon as possible.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition shadow-lg"
              >
                Schedule a Call
              </motion.button>

              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-teal-600 hover:border-teal-400 text-white font-medium rounded-lg transition shadow-lg"
              >
                Send Email
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 relative z-10"
          >
            {[
              { value: "24h", label: "Avg. Response Time" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Experts Team" },
              { value: "5", label: "Global Locations" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
              >
                <div className="text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;