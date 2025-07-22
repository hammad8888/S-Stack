// src/components/services/ProjectsShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const ProjectsShowcase = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
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
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "WazirAuto Platform",
      description: "A complete automotive marketplace with AI-powered recommendations and dealer management system.",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
      image: "/images/wazirauto.jpg",
      liveUrl: "https://wazirauto.com",
      codeUrl: "https://github.com/yourusername/wazirauto",
      featured: true,
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      title: "HealthTrack Pro",
      description: "Comprehensive health monitoring app with wearable integration and data analytics dashboard.",
      tags: ["React Native", "Firebase", "GraphQL", "TypeScript"],
      image: "/images/healthtrack.jpg",
      liveUrl: "https://healthtrack.app",
      codeUrl: "https://github.com/yourusername/healthtrack",
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "EduConnect LMS",
      description: "Learning management system with virtual classrooms, progress tracking, and certification.",
      tags: ["React", "Django", "PostgreSQL", "WebRTC"],
      image: "/images/educonnect.jpg",
      liveUrl: "https://educonnect.tech",
      codeUrl: "https://github.com/yourusername/educonnect",
      accentColor: "from-purple-500 to-fuchsia-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-block uppercase tracking-wider text-xs sm:text-sm font-medium text-emerald-500 px-3 py-1 bg-emerald-100 rounded-full mb-4"
          >
            Our Work
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900"
            variants={fadeInUp}
          >
            Projects We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">Built</span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg"
            variants={fadeInUp}
          >
            Innovative solutions that demonstrate our technical expertise and creative approach.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 p-5 sm:p-6 transition-all hover:shadow-lg"
            >
              {/* Project Image */}
              <motion.div 
                className="h-48 sm:h-56 overflow-hidden rounded-lg relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-70 rounded-lg`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white/20">{project.title.split(' ')[0]}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
              </motion.div>
              
              {/* Project Content */}
              <div className="pt-5">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  {project.codeUrl && (
                    <motion.a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="text-sm font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition"
                    >
                      <FiGithub className="w-4 h-4" />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
              
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a 
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-emerald-500/20"
          >
            Explore Full Portfolio
            <FiArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;