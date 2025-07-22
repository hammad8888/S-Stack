// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// export default function ContactCTA() {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       className="py-16 bg-gradient-to-r from-primary to-secondary text-white"
//     >
//       <div className="container mx-auto px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold mb-6"
//         >
//           Ready to Start Your Project?
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="text-xl mb-8 max-w-2xl mx-auto"
//         >
//           Get in touch with us today and let's discuss how we can help bring your ideas to life.
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <Link
//             to="/contact"
//             className="inline-block bg-white hover:bg-light text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Contact Us
//           </Link>
//         </motion.div>
//       </div>
//     </motion.section>
//   )
// }





import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-10"
      />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -left-10 -bottom-10 w-80 h-80 rounded-full bg-white opacity-10"
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-blue-200">Collaborate</span>?
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Let's transform your vision into an exceptional digital experience. Get in touch today to discuss your project.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out bg-white/10 group-hover:bg-white/20 backdrop-blur-sm"></span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-90"></span>
            <span className="absolute bottom-0 right-0 w-12 h-12 -mb-8 -mr-5 transition-all duration-300 ease-linear transform rotate-45 translate-x-1 group-hover:translate-x-0 bg-blue-700 opacity-10"></span>
            <span className="absolute top-0 left-0 w-12 h-12 -mt-1 -ml-12 transition-all duration-300 ease-linear transform -rotate-45 -translate-x-1 group-hover:translate-x-0 bg-blue-400 opacity-10"></span>
            <span className="relative z-10 flex items-center text-lg">
              Start Your Project <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            to="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-blue-600 rounded-full shadow-2xl bg-white hover:text-blue-700"
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 bg-white group-hover:bg-blue-50"></span>
            <span className="absolute bottom-0 right-0 w-12 h-12 -mb-8 -mr-5 transition-all duration-300 ease-linear transform rotate-45 translate-x-1 group-hover:translate-x-0 bg-blue-100 opacity-30"></span>
            <span className="absolute top-0 left-0 w-12 h-12 -mt-1 -ml-12 transition-all duration-300 ease-linear transform -rotate-45 -translate-x-1 group-hover:translate-x-0 bg-blue-100 opacity-30"></span>
            <span className="relative z-10 flex items-center text-lg">
              View Our Work
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Floating elements animation */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white"
      />
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-white"
      />
    </motion.section>
  )
}