import React from 'react';
import { motion } from 'framer-motion';

// Custom animated icons with gradients
const IconRocket = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 19l3-3m-3 3l-3-3m3 3v-8m0 0c-3.5 0-7 .5-7.5-1.5C4.5 6 5 3 12 3s7.5 3 7.5 6.5c-.5 2-4 1.5-7.5 1.5z" 
      stroke="url(#rocketGradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

const IconHeart = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      stroke="url(#heartGradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
  </svg>
);

const IconLeaf = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
      stroke="url(#leafGradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
  </svg>
);

const IconBrain = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 4v16m8-8H4m13-4l4 4-4 4M7 16l-4-4 4-4" 
      stroke="url(#brainGradient)" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
  </svg>
);

const AboutMission = () => {
  const principles = [
    {
      title: "Innovate Fearlessly",
      description: "We push boundaries with cutting-edge technologies to create solutions that redefine possibilities.",
      icon: <IconRocket />,
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      title: "Empower People",
      description: "Our human-centric approach ensures technology serves people, not the other way around.",
      icon: <IconHeart />,
      color: "bg-gradient-to-br from-pink-500 to-rose-500"
    },
    {
      title: "Build Sustainably",
      description: "We develop with future generations in mind, minimizing environmental impact at every step.",
      icon: <IconLeaf />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-500"
    },
    {
      title: "Learn Constantly",
      description: "Continuous improvement is our culture - we evolve daily to stay ahead of the curve.",
      icon: <IconBrain />,
      color: "bg-gradient-to-br from-amber-500 to-red-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50/20 to-purple-50/20">
      {/* Floating background elements */}
      <motion.div 
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      
      <motion.div 
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Our Guiding Star
          </span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            To <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transform Industries</span> Through Technology With Purpose
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We believe technology should solve real problems, create meaningful connections, and make the world better for everyone.
          </motion.p>
        </motion.div>

        {/* Core Principles */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              className={`p-6 rounded-xl ${principle.color} text-white relative overflow-hidden transition-all duration-300`}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
              
              <motion.div 
                className="mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {principle.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-white/90 text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Vision
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                A Future Where Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Elevates Humanity</span>
              </h3>
              <p className="text-gray-700 mb-6">
                We envision a world where digital solutions bridge gaps, empower communities, and create opportunities for all.
              </p>
              <motion.button
                whileHover={{ y: -3, boxShadow: "0 10px 25px -10px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                Join Our Mission
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex-1 relative min-h-[250px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/soft-circle-pattern.png')] opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                      scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-32 h-32 border-8 border-blue-200/50 rounded-full"
                  >
                    <motion.div
                      animate={{ 
                        rotate: -360,
                        scale: [1, 0.95, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-full h-full border-8 border-purple-200/50 rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMission;