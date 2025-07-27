import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you work with startups or large enterprises?",
      answer: "Yes. Our solutions scale to fit both startups looking to launch quickly and enterprises seeking long-term digital transformation.",
    },
    {
      question: "Can we request a customized solution?",
      answer: "Absolutely. Every service we provide can be tailored to your unique business goals and user needs.",
    },
    {
      question: "How quickly can we get started?",
      answer: "We can begin with a discovery call within 1–2 days of contact. Kickoff depends on project scope and readiness.",
    },
    {
      question: "Is there a dedicated team for my project?",
      answer: "Yes, we assign a focused team including project manager, developers, and designers to ensure communication and delivery.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-teal-600 bg-teal-50 px-4 py-2 rounded-full mb-4">
            Need Help?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl overflow-hidden transition-all ${openIndex === index ? 'shadow-lg' : 'shadow-md hover:shadow-lg'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors ${openIndex === index ? 'bg-teal-50' : 'bg-white'}`}
                whileHover={{ backgroundColor: '#f0fdfa' }}
              >
                <span className="text-lg font-medium text-slate-800 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-teal-600 shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-white"
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                      <div className="prose prose-slate max-w-none">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-slate-600 mb-6">
            Still have questions? We're happy to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Contact Our Team
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFAQ;