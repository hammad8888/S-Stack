// src/components/services/ServiceFAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className="border-b border-slate-700 last:border-0 overflow-hidden relative group"
      initial={false}
      animate={{
        backgroundColor: isOpen ? 'rgba(30, 41, 59, 0.5)' : 'rgba(15, 23, 42, 0.5)',
        borderColor: isOpen ? '#10b981' : '#334155'
      }}
      transition={{ duration: 0.3 }}
    >
      {isOpen && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      <button
        className="w-full py-6 px-6 sm:px-8 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg relative z-10"
        onClick={onClick}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-white pr-4 leading-snug">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="pb-6 px-6 sm:px-8 text-slate-300 leading-relaxed text-base sm:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across various industries including healthcare, finance, e-commerce, education, and more. Our solutions are meticulously tailored to meet specific industry requirements and challenges."
    },
    {
      question: "How do you ensure project quality and timely delivery?",
      answer: "We adhere to agile development methodologies, incorporating rigorous quality assurance processes, continuous integration, and regular client feedback loops to ensure high-quality, on-time project delivery."
    },
    {
      question: "What is your typical project engagement model?",
      answer: "We offer flexible engagement models, including fixed-price projects for well-defined scopes, time & materials for evolving requirements, and dedicated team setups for long-term partnerships. We'll help you choose the best fit for your needs."
    },
    {
      question: "Can you help with post-launch support and maintenance?",
      answer: "Absolutely! Our commitment extends beyond deployment. We provide comprehensive post-launch support, maintenance, and optimization services to ensure your digital solutions remain secure, performant, and up-to-date in a dynamic environment."
    },
    {
      question: "How do you handle intellectual property rights?",
      answer: "All intellectual property developed during the project, including source code, designs, and documentation, is transferred to you upon project completion and full payment. This is clearly outlined in our transparent contracts."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-400 px-3 py-1 bg-emerald-900/30 rounded-full mb-4"
          >
            Need Answers?
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            variants={itemVariants}
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Questions</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Everything you need to know about our services and processes.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg border border-slate-700 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Contact Our Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQ;