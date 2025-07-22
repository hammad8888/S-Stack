// import { motion, useAnimation, useInView } from 'framer-motion'
// import { useEffect, useRef, useState } from 'react'
// import { FaReact, FaNodeJs, FaMobileAlt, FaServer, FaArrowRight } from 'react-icons/fa'
// import { SiMongodb, SiGraphql, SiExpress } from 'react-icons/si'

// const ServiceCard = ({ service }) => {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <motion.div
//       className="flex-shrink-0 w-80 mx-4"
//       whileHover={{ y: -10 }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       <div 
//         className="h-full p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{
//           transform: isHovered ? 'perspective(1000px) rotateX(5deg)' : 'none',
//           boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         }}
//       >
//         {/* Icon and Title */}
//         <div className="flex items-center mb-4">
//           <motion.div 
//             className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-2xl mr-3"
//             style={{
//               background: `linear-gradient(135deg, ${service.colorFrom}, ${service.colorTo})`
//             }}
//             animate={{
//               rotate: isHovered ? 10 : 0,
//               scale: isHovered ? 1.1 : 1
//             }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             {service.icon}
//           </motion.div>
//           <motion.h3 
//             className="text-xl font-bold"
//             animate={{ color: isHovered ? service.colorFrom : '#1f2937' }}
//             transition={{ duration: 0.3 }}
//           >
//             {service.title}
//           </motion.h3>
//         </div>
        
//         <motion.p 
//           className="mb-6 flex-grow"
//           animate={{ color: isHovered ? '#4b5563' : '#6b7280' }}
//           transition={{ duration: 0.3 }}
//         >
//           {service.description}
//         </motion.p>
        
//         <div className="flex justify-between items-center">
//           <motion.span 
//             className="inline-block px-3 py-1 rounded-full text-sm font-medium"
//             animate={{
//               background: `linear-gradient(135deg, ${isHovered ? service.colorFrom : service.colorFrom + '20'}, ${isHovered ? service.colorTo : service.colorTo + '20'})`,
//               color: isHovered ? 'white' : service.colorFrom
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             {service.category}
//           </motion.span>
//           <motion.button
//             className="font-medium flex items-center"
//             animate={{ color: isHovered ? service.colorFrom : '#3b82f6' }}
//             transition={{ duration: 0.3 }}
//           >
//             Learn more
//             <motion.span
//               animate={{ x: isHovered ? 5 : 0 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <FaArrowRight className="ml-2" />
//             </motion.span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const Services = () => {
//   const services = [
//     {
//       title: "MERN Stack Development",
//       description: "Complete solutions using MongoDB, Express, React, and Node.js. We build scalable, high-performance web applications with modern architecture.",
//       icon: <FaReact />,
//       category: "Full Stack",
//       colorFrom: "#61DAFB",
//       colorTo: "#4DB33D"
//     },
//     {
//       title: "Frontend Development",
//       description: "Beautiful, responsive interfaces with React, Next.js, and modern CSS. Focused on UX design principles and performance optimization.",
//       icon: <FaReact />,
//       category: "Web",
//       colorFrom: "#61DAFB",
//       colorTo: "#764ABC"
//     },
//     {
//       title: "Backend Services",
//       description: "Robust API development with Node.js, Express, and GraphQL. Secure, well-documented backend systems for your applications.",
//       icon: <FaNodeJs />,
//       category: "API",
//       colorFrom: "#68A063",
//       colorTo: "#3C873A"
//     },
//     {
//       title: "Database Solutions",
//       description: "MongoDB expertise with optimized schemas, indexing, and aggregation pipelines. Ensuring your data layer is performant and scalable.",
//       icon: <SiMongodb />,
//       category: "Data",
//       colorFrom: "#4DB33D",
//       colorTo: "#3FA037"
//     },
//     {
//       title: "Mobile Development",
//       description: "Cross-platform mobile apps with React Native. Single codebase for both iOS and Android with native performance.",
//       icon: <FaMobileAlt />,
//       category: "Mobile",
//       colorFrom: "#00D1F7",
//       colorTo: "#087EA4"
//     },
//     {
//       title: "API Integration",
//       description: "Seamless integration with third-party services and legacy systems. Specializing in GraphQL and REST API development.",
//       icon: <SiGraphql />,
//       category: "Integration",
//       colorFrom: "#E535AB",
//       colorTo: "#C4198E"
//     },
//     {
//       title: "DevOps & Cloud",
//       description: "Cloud deployment and server management solutions. CI/CD pipelines and infrastructure as code for seamless deployments.",
//       icon: <FaServer />,
//       category: "DevOps",
//       colorFrom: "#F0B90B",
//       colorTo: "#D6A309"
//     }
//   ]

//   const containerRef = useRef(null)
//   const controls = useAnimation()
//   const isInView = useInView(containerRef, { once: true, amount: 0.1 })
//   const [autoScroll, setAutoScroll] = useState(true)

//   useEffect(() => {
//     let interval
//     if (isInView && autoScroll) {
//       interval = setInterval(() => {
//         containerRef.current.scrollBy({ left: 1, behavior: 'smooth' })
//         if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= 
//             containerRef.current.scrollWidth - 10) {
//           // Reset to start when reaching end
//           setTimeout(() => {
//             containerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
//           }, 1000)
//         }
//       }, 30)
//     }
//     return () => clearInterval(interval)
//   }, [isInView, autoScroll])

//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Updated Header Layout */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
//         >
//           <div className="md:w-2/3 mb-6 md:mb-0">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Discover What We Offer</h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Our broad range of services are designed to meet your business's evolving needs. 
//               With a focus on precision, agility, and measurable impact.
//             </p>
//           </div>
//           <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center self-end md:self-auto">
//             View All Services <FaArrowRight className="ml-2" />
//           </button>
//         </motion.div>

//         {/* Horizontal scrolling container */}
//         <div 
//           ref={containerRef}
//           className="relative h-[420px] overflow-x-auto pb-8"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           onMouseEnter={() => setAutoScroll(false)}
//           onMouseLeave={() => setAutoScroll(true)}
//         >
//           <div className="flex" style={{ width: `${services.length * 22}rem` }}>
//             {services.map((service, index) => (
//               <ServiceCard key={index} service={service} />
//             ))}
//           </div>
//         </div>

//         {/* Custom scroll indicator */}
//         <div className="flex justify-center mt-8">
//           <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
//             <motion.div 
//               className="h-full bg-gradient-to-r from-blue-500 to-green-500"
//               animate={controls}
//               initial={{ width: 0 }}
//               style={{
//                 width: `${(containerRef.current?.scrollLeft / 
//                          (containerRef.current?.scrollWidth - containerRef.current?.clientWidth)) * 100}%`
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default 













import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaMobileAlt, FaServer, FaArrowRight } from 'react-icons/fa';
import { SiMongodb, SiGraphql } from 'react-icons/si';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      description: "Complete solutions using MongoDB, Express, React, and Node.js. We build scalable, high-performance web applications with modern architecture.",
      icon: <FaReact />,
      category: "Full Stack",
      colorFrom: "#61DAFB",
      colorTo: "#4DB33D"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Beautiful, responsive interfaces with React, Next.js, and modern CSS. Focused on UX design principles and performance optimization.",
      icon: <FaReact />,
      category: "Web",
      colorFrom: "#61DAFB",
      colorTo: "#764ABC"
    },
    {
      id: 3,
      title: "Backend Services",
      description: "Robust API development with Node.js, Express, and GraphQL. Secure, well-documented backend systems for your applications.",
      icon: <FaNodeJs />,
      category: "API",
      colorFrom: "#68A063",
      colorTo: "#3C873A"
    },
    {
      id: 4,
      title: "Database Solutions",
      description: "MongoDB expertise with optimized schemas, indexing, and aggregation pipelines. Ensuring your data layer is performant and scalable.",
      icon: <SiMongodb />,
      category: "Data",
      colorFrom: "#4DB33D",
      colorTo: "#3FA037"
    },
    {
      id: 5,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native. Single codebase for both iOS and Android with native performance.",
      icon: <FaMobileAlt />,
      category: "Mobile",
      colorFrom: "#00D1F7",
      colorTo: "#087EA4"
    },
    {
      id: 6,
      title: "API Integration",
      description: "Seamless integration with third-party services and legacy systems. Specializing in GraphQL and REST API development.",
      icon: <SiGraphql />,
      category: "Integration",
      colorFrom: "#E535AB",
      colorTo: "#C4198E"
    },
    {
      id: 7,
      title: "DevOps & Cloud",
      description: "Cloud deployment and server management solutions. CI/CD pipelines and infrastructure as code for seamless deployments.",
      icon: <FaServer />,
      category: "DevOps",
      colorFrom: "#F0B90B",
      colorTo: "#D6A309"
    }
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let interval;
    if (isInView && autoScroll && containerRef.current) {
      interval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollBy({ left: 1, behavior: 'smooth' });
          if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= 
              containerRef.current.scrollWidth - 10) {
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }, 1000);
          }
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isInView, autoScroll]);

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16"
        >
          <div className="md:w-2/3 mb-6 md:mb-0 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Discover What We Offer</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our broad range of services are designed to meet your business's evolving needs. 
              With a focus on precision, agility, and measurable impact.
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center self-end md:self-auto">
            View All Services <FaArrowRight className="ml-2" />
          </button>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative h-[360x] overflow-x-auto pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
        >
          <div className="flex" style={{ width: `${services.length * 22}rem` }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-green-500"
              animate={controls}
              initial={{ width: 0 }}
              style={{
                width: `${(containerRef.current?.scrollLeft / 
                         (containerRef.current?.scrollWidth - containerRef.current?.clientWidth)) * 100}%`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;