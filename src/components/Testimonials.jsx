import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wazir Auto Client",
      role: "Automotive Industry",
      feedback: "The Wazir Auto platform revolutionized our car dealership. The AI recommendations increased our sales by 40% and the user experience is seamless across all devices.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: "wazirauto.com"
    },
    {
      name: "Healthcare Professional",
      role: "Medical Director",
      feedback: "Doctor AI has transformed our patient care. The symptom analysis is remarkably accurate and has reduced our diagnosis time by 60%. The interface is intuitive for both doctors and patients.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5,
      project: "shizakhalid.online"
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what clients say about the projects we've delivered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100 group-hover:border-blue-100 transition-all h-full">
                <div className="flex items-start mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-500"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="flex ml-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 relative">
                  <span className="absolute -top-4 -left-4 text-5xl text-blue-500 opacity-10 font-serif">"</span>
                  {testimonial.feedback}
                  <span className="absolute -bottom-4 -right-4 text-5xl text-blue-500 opacity-10 font-serif">"</span>
                </p>
                <div className="absolute bottom-4 right-4">
                  <svg className="w-10 h-10 text-blue-500 opacity-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to be our next success story?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  ); 
};

export default Testimonials;