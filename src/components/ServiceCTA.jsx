// // src/components/services/ServiceCTA.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiArrowRight, FiDownload, FiPhone, FiDollarSign } from 'react-icons/fi';

// const ServiceCTA = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   return (
//     <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={staggerContainer}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <motion.div 
//             variants={fadeInUp}
//             className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-400 px-3 py-1 bg-emerald-900/30 rounded-full mb-4"
//           >
//             Get Started
//           </motion.div>
          
//           <motion.h2
//             className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
//             variants={fadeInUp}
//           >
//             Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transform</span> Your Business?
//           </motion.h2>
          
//           <motion.p
//             className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto"
//             variants={fadeInUp}
//           >
//             Let's discuss how we can help you achieve your goals with our expert digital services.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row justify-center gap-4"
//             variants={fadeInUp}
//           >
//             <motion.a
//               href="/contact"
//               className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get a Free Consultation
//               <FiArrowRight className="w-5 h-5" />
//             </motion.a>
            
//             {/* <motion.a
//               href="/services"
//               className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-emerald-500/50 text-white font-medium rounded-lg hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Case Studies
//               <FiDownload className="w-5 h-5" />
//             </motion.a> */}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//         >
//           {[
//             {
//               title: "Download Brochure",
//               description: "Get our complete service catalog",
//               icon: <FiDownload className="w-6 h-6 text-emerald-400" />,
//               link: "#"
//             },
//             {
//               title: "Schedule Call",
//               description: "Book a 30-min discovery call",
//               icon: <FiPhone className="w-6 h-6 text-emerald-400" />,
//               link: "/contact"
//             },
//             {
//               title: "Pricing Guide",
//               description: "Understand our pricing models",
//               icon: <FiDollarSign className="w-6 h-6 text-emerald-400" />,
//               link: "#"
//             }
//           ].map((item, index) => (
//             <motion.a
//               key={index}
//               href={item.link}
//               variants={fadeInUp}
//               className="bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700 hover:border-emerald-500/30 rounded-lg p-6 transition-all group"
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-emerald-900/20 rounded-lg group-hover:bg-emerald-900/30 transition">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
//                   <p className="text-sm text-slate-400">{item.description}</p>
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServiceCTA;





























import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCTA = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-400 px-3 py-1 bg-emerald-900/30 rounded-full mb-4"
          >
            Get Started
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            variants={fadeInUp}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Let's discuss how we can help you achieve your goals with our expert digital services.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeInUp}
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
              <FiArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;