import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Wazir Auto",
    description: "A premium automotive marketplace featuring luxury and performance vehicles with advanced search and AI-powered recommendations.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "AI Integration"],
    image: "/src/assets/wazir.PNG",
    links: {
      live: "https://wazirauto.com",
      code: "#"
    }
  },
  {
    title: "Doctor AI",
    description: "AI-powered healthcare platform providing symptom analysis, virtual consultations, and personalized health recommendations.",
    tags: ["React", "Python", "TensorFlow", "Flask", "Healthcare AI"],
    image: "/src/assets/doctorai.PNG",
    links: {
      live: "https://shizakhalid.online",
      code: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative digital solutions that deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-md h-full border border-gray-100 group-hover:border-blue-100 transition-all duration-300">
                <div className="relative overflow-hidden h-64 w-full">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <motion.div
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-white"
                    >
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <FiExternalLink className="mr-2" />
                          View Project
                        </a>
                        {project.links.code !== "#" && (
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                          >
                            <FiGithub className="mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 group-hover:bg-blue-50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium group-hover:bg-blue-200 group-hover:text-blue-700 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
          >
            Let's Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}