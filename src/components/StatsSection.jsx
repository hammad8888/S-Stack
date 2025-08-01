import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const StatsSection = () => {
  const stats = [
    { value: 25000, label: "Active Developers" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 1500, label: "GitHub Stars", prefix: "+" },
    { value: 45, label: "Countries", suffix: "+" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={2.5} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""} 
                />
              </div>
              <p className="text-xl opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;