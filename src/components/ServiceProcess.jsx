// src/components/services/ServiceProcess.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServiceProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        mass: 0.8
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const colorScheme = {
    colors: [
      { text: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
      { text: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200" },
      { text: "text-cyan-600", bg: "bg-cyan-100", border: "border-cyan-200" },
      { text: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
      { text: "text-indigo-600", bg: "bg-indigo-100", border: "border-indigo-200" }
    ],
    timeline: "bg-gradient-to-b from-emerald-400 to-indigo-500"
  };

  const steps = [
    {
      title: "Discovery & Definition",
      description: "Thorough analysis of requirements, goals, and target audience to define project scope.",
      phase: "Phase 01"
    },
    {
      title: "Architecture & Planning",
      description: "Designing the technical architecture, database schemas, and creating a detailed project plan.",
      phase: "Phase 02"
    },
    {
      title: "Design & Prototyping",
      description: "Crafting intuitive user interfaces (UI) and engaging user experiences (UX), followed by interactive prototypes.",
      phase: "Phase 03"
    },
    {
      title: "Development & Testing",
      description: "Building robust features with agile methodologies, followed by rigorous testing and quality assurance.",
      phase: "Phase 04"
    },
    {
      title: "Deployment & Maintenance",
      description: "Smooth launch of the application, continuous monitoring, updates, and ongoing support.",
      phase: "Phase 05"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-500 px-3 py-1 bg-emerald-100 rounded-full mb-4"
          >
            Our Process
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight"
            variants={itemVariants}
          >
            The Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600">Journey</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A systematic and transparent path from concept to successful execution.
          </motion.p>
        </motion.div>

        <div className="relative pl-8 sm:pl-12 md:pl-20">
          <motion.div
            className={`absolute left-4 sm:left-6 md:left-10 top-0 h-full w-1 ${colorScheme.timeline} rounded-full shadow-lg`}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          ></motion.div>

          {steps.map((step, index) => {
            const colors = colorScheme.colors[index % colorScheme.colors.length];
            return (
              <motion.div
                key={index}
                className="mb-10 sm:mb-12 flex items-start last:mb-0 group"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={itemVariants}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 relative">
                  <motion.div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 relative -left-[18px] sm:-left-[22px] md:-left-[38px] border-4 border-slate-50 ${colors.bg} ${colors.text} shadow-md`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <motion.div
                  className={`bg-white p-6 rounded-xl shadow-sm ml-6 flex-grow transition-all duration-300 border-l-4 ${colors.border} hover:shadow-md`}
                >
                  <span className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 block ${colors.text}`}>
                    {step.phase}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base">{step.description}</p>
                  <motion.div 
                    className="mt-4 h-1 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: colors.text.replace('text-', 'bg-') }}
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;