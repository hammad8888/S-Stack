import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Join thousands of developers already building with Stanza Stack
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
            >
              Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;