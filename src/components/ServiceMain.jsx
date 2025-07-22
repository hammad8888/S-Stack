// src/components/services/ServiceHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ServicesSection from '../components/ServicesSection';


const ServiceHero = () => {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10" />

      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Left Text */}
            <motion.div variants={fadeInUp} className="space-y-5 sm:space-y-6">
              <span className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-400 px-3 py-1 bg-emerald-900/30 rounded-full">
                Our Expertise
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                Digital Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Engineered</span> for Impact
              </h1>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
                We build modern, scalable digital products that help businesses grow. Trusted by 200+ clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-lg font-medium transition flex items-center gap-2 text-white shadow-lg shadow-emerald-500/20"
                >
                  Get Started <FiArrowRight />
                </motion.a>
                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-transparent border border-slate-700 hover:bg-slate-800/50 rounded-lg font-medium transition text-white"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { value: "95%", label: "Client Retention" },
                { value: "60+", label: "Projects Delivered" },
                { value: "4.9/5", label: "Average Rating" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition backdrop-blur-sm"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-400">{stat.value}</p>
                  <p className="mt-1 text-slate-400 text-sm sm:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
       {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default ServiceHero;