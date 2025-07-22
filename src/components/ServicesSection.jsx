// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiMonitor,
//   FiPieChart, FiShield
// } from 'react-icons/fi';

// const ServicesSection = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 }
//     }
//   };

//   const services = [
//     {
//       title: "Web Development",
//       description: "Custom, responsive websites built with modern frameworks.",
//       icon: <FiMonitor className="w-6 h-6" />,
//       highlights: ["React/Next.js", "Tailwind CSS", "SSR Optimization"]
//     },
//     {
//       title: "UI/UX Design",
//       description: "Interfaces crafted for engagement and usability.",
//       icon: <FiLayers className="w-6 h-6" />,
//       highlights: ["Figma/Sketch", "Design Systems", "User Testing"]
//     },
//     {
//       title: "Mobile Apps",
//       description: "Cross-platform mobile apps with native performance.",
//       icon: <FiCode className="w-6 h-6" />,
//       highlights: ["React Native", "iOS & Android", "Push Notifications"]
//     },
//     {
//       title: "Data Solutions",
//       description: "Data visualization and dashboards that deliver insights.",
//       icon: <FiPieChart className="w-6 h-6" />,
//       highlights: ["SQL/NoSQL", "Dashboards", "ETL Pipelines"]
//     },
//     {
//       title: "DevOps",
//       description: "Cloud infrastructure & CI/CD pipelines built to scale.",
//       icon: <FiShield className="w-6 h-6" />,
//       highlights: ["AWS/GCP", "Docker/K8s", "Monitoring"]
//     },
//     {
//       title: "Consulting",
//       description: "Strategy for digital growth and tech adoption.",
//       icon: <FiCheckCircle className="w-6 h-6" />,
//       highlights: ["Tech Audits", "Roadmapping", "Cost Optimization"]
//     }
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//         >
//           {/* Section Header */}
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <span className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-500 px-3 py-1 bg-emerald-100 rounded-full mb-3">
//               What We Offer
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-900">
//               Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Services</span>
//             </h2>
//             <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
//               End-to-end solutions tailored to your business and users.
//             </p>
//           </motion.div>

//           {/* Service Cards */}
//           <motion.div
//             variants={staggerContainer}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -6 }}
//                 className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 transition-all hover:border-emerald-300 hover:shadow-lg group"
//               >
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-emerald-50 rounded-md text-emerald-600 group-hover:bg-emerald-100 mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">{service.title}</h3>
//                 <p className="text-sm sm:text-base text-slate-600 mb-3">{service.description}</p>
//                 <ul className="space-y-2 text-sm text-slate-500">
//                   {service.highlights.map((point, i) => (
//                     <li key={i} className="flex items-start gap-2">
//                       <FiCheckCircle className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" />
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="mt-5 text-emerald-600 hover:text-emerald-700 flex items-center gap-1 text-sm font-medium transition group-hover:translate-x-1">
//                   Learn more <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




















import React from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiMonitor,
  FiPieChart, FiShield
} from 'react-icons/fi';

const ServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(5, 150, 105, 0.15)",
      borderColor: "#10b981",
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive websites built with modern frameworks and optimized for performance.",
      icon: <FiMonitor className="w-6 h-6" />,
      highlights: ["React/Next.js", "Tailwind CSS", "SSR Optimization"],
      accent: "from-emerald-400 to-teal-500"
    },
    {
      title: "UI/UX Design",
      description: "Interfaces crafted for engagement, usability, and conversion optimization.",
      icon: <FiLayers className="w-6 h-6" />,
      highlights: ["Figma/Sketch", "Design Systems", "User Testing"],
      accent: "from-cyan-400 to-blue-500"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with native performance and seamless UX.",
      icon: <FiCode className="w-6 h-6" />,
      highlights: ["React Native", "iOS & Android", "Push Notifications"],
      accent: "from-indigo-400 to-purple-500"
    },
    {
      title: "Data Solutions",
      description: "Data visualization and dashboards that deliver actionable business insights.",
      icon: <FiPieChart className="w-6 h-6" />,
      highlights: ["SQL/NoSQL", "Dashboards", "ETL Pipelines"],
      accent: "from-violet-400 to-fuchsia-500"
    },
    {
      title: "DevOps",
      description: "Cloud infrastructure & CI/CD pipelines built for scalability and reliability.",
      icon: <FiShield className="w-6 h-6" />,
      highlights: ["AWS/GCP", "Docker/K8s", "Monitoring"],
      accent: "from-amber-400 to-orange-500"
    },
    {
      title: "Consulting",
      description: "Strategic guidance for digital transformation and technology adoption.",
      icon: <FiCheckCircle className="w-6 h-6" />,
      highlights: ["Tech Audits", "Roadmapping", "Cost Optimization"],
      accent: "from-rose-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp} 
            className="text-center mb-16 sm:mb-20"
          >
            <span className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-500 px-3 py-1 bg-emerald-100 rounded-full mb-4">
              Our Expertise
            </span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900"
              variants={fadeInUp}
            >
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Services</span>
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-slate-600 text-lg"
              variants={fadeInUp}
            >
              End-to-end digital solutions tailored to your business goals and user needs.
            </motion.p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="group relative overflow-hidden bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.accent}`}></div>
                
                <div className="pt-1">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg text-emerald-600 group-hover:bg-gradient-to-br group-hover:from-emerald-100 group-hover:to-teal-100 mb-5 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((point, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <FiCheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium gap-2 group-hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;