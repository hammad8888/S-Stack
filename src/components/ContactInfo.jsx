// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

// const ContactInfo = () => {
//   const contactItems = [
//     {
//       icon: <FiMail className="text-indigo-600 text-2xl" />,
//       title: "Email Us",
//       content: "stanzastack@gmail.com",
//       link: "mailto:stanzastack@gmail.com",
//     },
//     {
//       icon: <FiPhone className="text-indigo-600 text-2xl" />,
//       title: "Call Us",
//       content: "+92 (321) 3018303",
//       link: "tel:+15551234567",
//     },
//     {
//       icon: <FiMapPin className="text-indigo-600 text-2xl" />,
//       title: "Visit Us",
//       content: "Faisalabad, Punajb, Pakistan",
//       link: "https://maps.google.com",
//     },
//     {
//       icon: <FiClock className="text-indigo-600 text-2xl" />,
//       title: "Working Hours",
//       content: "Monday - Thursday: 10am - 5pm\nFriday - Saturday: 10am - 12pm",
//     },
//   ];

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}
//       className=" bg-teal-500 shadow-lg rounded-2xl p-8 space-y-6 max-w-xl mx-auto -mt-10 relative z-10 "
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
//       <div className="space-y-6">
//         {contactItems.map((item, index) => (
//           <motion.div 
//             key={index}
//             whileHover={{ x: 5 }}
//             className="flex items-start space-x-4"
//           >
//             <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg">
//               {item.icon}
//             </div>
//             <div>
//               <h3 className="font-medium text-gray-800">{item.title}</h3>
//               {item.link ? (
//                 <a 
//                   href={item.link} 
//                   className="text-gray-600 hover:text-indigo-600 transition"
//                 >
//                   {item.content}
//                 </a>
//               ) : (
//                 <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ContactInfo;











import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-8 rounded-xl shadow-xl"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiMapPin className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Our Address</h4>
            <p className="text-gray-600">123 Business Ave, Suite 400<br />San Francisco, CA 94107</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiPhone className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Fri, 9am-5pm PST</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiMail className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Email</h4>
            <p className="text-gray-600">hello@stanzastack.com<br />support@stanzastack.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiClock className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Working Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9AM - 5PM<br />Weekends: Closed</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;