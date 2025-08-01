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
            <p className="text-gray-600">Jaranwala road, Faisalabad<br />Punjab, Pakistan</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiPhone className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Phone</h4>
            <p className="text-gray-600">+92 (321) 3018303<br />Mon-Fri, 9am-5pm PK</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-teal-100 p-3 rounded-full mr-4">
            <FiMail className="text-teal-600 text-xl" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">Email</h4>
            <p className="text-gray-600">stanzastack@gmail.com</p>
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