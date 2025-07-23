import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero.mp4';

export default function Hero() {
  // Animation variants
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative h-[80vh] min-h-[400px] w-full flex items-center overflow-hidden bg-gray-900">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src={heroVideo}
          poster="/assets/images/hero-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl lg:max-w-3xl text-left"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-accent/30 rounded-full backdrop-blur-sm">
              Expert MERN & App Development
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
          >
            Empowering Ideas with{' '}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
              StanzaStack
            </span> */}
             <span className="text-[#001EFF] ">Stanza </span>
              <span className="text-[#00F3FF]">Stack</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
          >
            Full-stack solutions in MERN, Web Development & App Development.
            Turn your concept into a scalable, fast, and responsive digital product.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/get-started"
              className="relative overflow-hidden inline-flex items-center justify-center bg-accent hover:bg-gradient-to-r from-[#001EFF] to-[#00F3FF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <motion.span 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative z-10 flex items-center"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white/5"
            >
              <motion.span 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Services
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle floating elements for visual interest */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      />
    </section>
  );
}




















