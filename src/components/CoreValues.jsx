import { motion } from 'framer-motion';

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for technical excellence in everything we build.",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Innovation",
      description: "Continuous improvement through creative problem solving.",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Transparency",
      description: "Open communication and decision-making processes.",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Community",
      description: "Empowering developers through collaboration.",
      color: "bg-amber-100 text-amber-800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${value.color} hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
              <p className="opacity-90">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;