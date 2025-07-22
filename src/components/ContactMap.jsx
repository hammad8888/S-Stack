// import { motion } from 'framer-motion';

// const ContactMap = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3 }}
//       className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden "
//     >
//       <h3 className="text-lg font-medium text-gray-800 mb-4">Our Location</h3>
//       <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//         {/* Replace with your actual map embed */}
//         <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
//           <p className="text-gray-500">Map would be displayed here</p>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-end">
//         <motion.a
//           href="https://maps.google.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.05 }}
//           className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
//         >
//           Open in Maps
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </motion.a>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactMap;





import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-xl overflow-hidden"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us on the Map</h3>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
        {/* Replace with your actual map embed */}
        <div className="w-full h-64 bg-gradient-to-r from-teal-50 to-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">123 Business Ave, San Francisco</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <motion.a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-teal-600 hover:text-teal-800 font-medium flex items-center"
        >
          Open in Maps
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactMap;