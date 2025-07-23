import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import Lenis from '@studio-freight/lenis';

const ProjectsShowcase = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const lenisRef = useRef(null);
  const containerRef = useRef(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      smoothTouch: true
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => lenis.destroy();
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "Sunshine Legal",
      description: "Modern law firm platform with client portals and case management integration.",
      tags: ["Next.js", "Tailwind", "Contentful"],
      liveUrl: "https://sunshinelegal.com/",
      accentColor: "from-amber-400 to-orange-500",
      featured: true
    },
    {
      title: "WazirAuto",
      description: "Next-gen automotive marketplace with AI-powered recommendations.",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://wazirauto.com/",
      accentColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "Corsa Athletics",
      description: "Performance sportswear e-commerce with 3D product previews.",
      tags: ["Shopify", "WebGL", "Liquid"],
      liveUrl: "https://www.corsa-athletics.com/",
      accentColor: "from-red-500 to-pink-600"
    },
    {
      title: "One Green Filter",
      description: "Sustainable product platform with environmental impact metrics.",
      tags: ["WordPress", "WooCommerce", "GSAP"],
      liveUrl: "https://onegreenfilter.com/",
      accentColor: "from-green-500 to-emerald-600"
    },
    {
      title: "Papa Injury Lawyer",
      description: "Legal services portal with intelligent case evaluation.",
      tags: ["Next.js", "Tailwind", "Formik"],
      liveUrl: "https://nextjs-papainjurylawyer.vercel.app/",
      accentColor: "from-purple-500 to-fuchsia-600"
    },
    {
      title: "Tucker Enterprise",
      description: "Corporate logistics platform with real-time tracking.",
      tags: ["React", "Bootstrap", "Node.js"],
      liveUrl: "https://tuckerenterprise.com/",
      accentColor: "from-cyan-500 to-blue-600"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.div 
            variants={item}
            className="inline-block text-xs font-semibold tracking-wider text-emerald-500 uppercase mb-4"
          >
            OUR WORK
          </motion.div>
          
          <motion.h2 
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-5 text-slate-900"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Our Digital</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-1 left-0 w-full h-3 bg-emerald-100/80 z-0"
                style={{ originX: 0 }}
              />
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Showcase
            </span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="max-w-2xl mx-auto text-lg text-slate-600"
          >
            Cutting-edge solutions that blend innovative design with robust functionality.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={container}
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={item}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
                layout
              >
                {/* Gradient Header */}
                <motion.div 
                  className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.accentColor}`}
                  variants={cardHover}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      className="text-white text-4xl font-bold tracking-tight text-center px-4"
                    >
                      {project.title.split(' ')[0]}
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                  />
                </motion.div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 mb-5">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ y: -2 }}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Visit Live Site
                    <FiExternalLink className="ml-1.5 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            onClick={() => {
              setShowAllProjects(!showAllProjects);
              // Smooth scroll to show new items
              setTimeout(() => {
                lenisRef.current?.scrollTo(containerRef.current, {
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
              }, 300);
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center px-8 py-3.5 overflow-hidden text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full group"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40"></span>
            <span className="relative flex items-center">
              {showAllProjects ? 'Show Less Projects' : 'Explore Full Portfolio'}
              <FiArrowRight className={`ml-2 w-4 h-4 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;