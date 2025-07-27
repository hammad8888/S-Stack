// src/components/services/ServiceTestimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServiceTestimonials = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const testimonials = [
    {
      quote: "Their team transformed our digital presence completely. The results exceeded our expectations and drove a 40% increase in conversions.",
      name: "Sarah Johnson",
      role: "CEO, TechSolutions Inc.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      accentColor: "bg-emerald-500"
    },
    {
      quote: "The mobile app they developed has significantly improved our customer engagement metrics with a 65% increase in daily active users.",
      name: "Michael Chen",
      role: "Product Manager, RetailGo",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      accentColor: "bg-cyan-500"
    },
    {
      quote: "Their cloud solutions helped us scale seamlessly during peak season, handling 3x our normal traffic without issues. Highly recommended!",
      name: "David Martinez",
      role: "CTO, EcomGlobal",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      accentColor: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-400 px-3 py-1 bg-emerald-900/30 rounded-full mb-4"
          >
            Client Voices
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
            variants={fadeInUp}
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Hear from organizations that have transformed their business with our solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/80 border border-slate-800 hover:border-emerald-500/30 transition-all shadow-lg hover:shadow-xl"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${testimonial.accentColor}`}></div>
              
              <div className="p-6 sm:p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <motion.p 
                  className="text-lg text-slate-200 mb-6 italic relative"
                  whileHover={{ x: 2 }}
                >
                  <span className="absolute top-0 left-0 text-7xl text-slate-700/50 -mt-4 -ml-2">"</span>
                  {testimonial.quote}
                </motion.p>
                
                <div className="flex items-center">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-slate-800 ${testimonial.accentColor}`}></div>
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;


















