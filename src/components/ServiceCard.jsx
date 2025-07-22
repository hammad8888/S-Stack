// import { motion } from 'framer-motion';
// import { FiArrowRight } from 'react-icons/fi';

// const ServiceCard = ({ service, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.15 }}
//       whileHover={{ y: -8 }}
//       className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
//     >
//       <div className="flex items-center gap-4 mb-4">
//         <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center text-2xl shadow-inner">
//           {service.icon}
//         </div>
//         <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
//       </div>

//       <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

//       <div className="flex justify-between items-center">
//         <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
//           {service.tag}
//         </span>
//         <motion.div whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }}>
//           <FiArrowRight className="text-accent text-lg" />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;






import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Return null if service is not properly defined
  if (!service || !service.colorFrom || !service.colorTo) {
    return null;
  }

  return (
    <motion.div
      className="flex-shrink-0 w-80 mx-4"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="h-full p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'perspective(1000px) rotateX(5deg)' : 'none',
          boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <motion.div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mr-3"
            style={{
              background: `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`
            }}
            animate={{
              rotate: isHovered ? 10 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {service.icon || <FaArrowRight />}
          </motion.div>
          <motion.h3 
            className="text-xl font-bold"
            animate={{ color: isHovered ? service.colorFrom : '#1f2937' }}
            transition={{ duration: 0.3 }}
          >
            {service.title || 'Service Title'}
          </motion.h3>
        </div>
        
        <motion.p 
          className="mb-6 flex-grow"
          animate={{ color: isHovered ? '#4b5563' : '#6b7280' }}
          transition={{ duration: 0.3 }}
        >
          {service.description || 'Service description goes here.'}
        </motion.p>
        
        <div className="flex justify-between items-center">
          <motion.span 
            className="inline-block px-3 py-1 rounded-full text-sm font-medium"
            animate={{
              background: `linear-gradient(135deg, ${isHovered ? service.colorFrom : service.colorFrom + '20'}, ${isHovered ? service.colorTo : service.colorTo + '20'})`,
              color: isHovered ? 'white' : service.colorFrom
            }}
            transition={{ duration: 0.3 }}
          >
            {service.category || 'Category'}
          </motion.span>
          <motion.button
            className="font-medium flex items-center"
            animate={{ color: isHovered ? service.colorFrom : '#3b82f6' }}
            transition={{ duration: 0.3 }}
          >
            Learn more
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaArrowRight className="ml-2" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
    category: PropTypes.string,
    colorFrom: PropTypes.string,
    colorTo: PropTypes.string
  }).isRequired
};

export default ServiceCard;