import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and efficiency with our highly optimized architecture, ensuring your applications load instantly.",
      icon: "⚡️"
    },
    {
      title: "Intuitive Developer Experience",
      description: "Designed with developers in mind, offering a clean API, extensive documentation, and a smooth workflow from day one.",
      icon: "👩‍💻"
    },
    {
      title: "Vibrant Community & Support",
      description: "Join a thriving open-source community. Get support, contribute, and collaborate to shape the future of Stanza Stack.",
      icon: "🤝"
    },
    {
      title: "Scalable & Future-Proof",
      description: "Built to grow with your ambitions, our framework adapts to emerging web standards, ensuring long-term relevance and stability.",
      icon: "✨"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[30%] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-100px] right-[20%] w-[300px] h-[300px] bg-indigo-500 opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
            Why Choose Stanza Stack?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 font-medium">
            Explore the core values that make our framework exceptional and future-ready.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-purple-600/30 hover:scale-[1.03] group text-center"
            >
              <div className="text-5xl mb-6 group-hover:animate-pulse transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
