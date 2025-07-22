import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Projects",
      links: [
        { name: "Wazir Auto", url: "https://wazirauto.com" },
        { name: "Doctor AI", url: "https://shizakhalid.online" },
        { name: "View All Work", url: "#projects" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "#services" },
        { name: "UI/UX Design", url: "#services" },
        { name: "AI Integration", url: "#services" },
        { name: "Consulting", url: "#services" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", icon: <FaLinkedin className="inline mr-2" />, url: "#" },
        { name: "GitHub", icon: <FaGithub className="inline mr-2" />, url: "#" },
        { name: "Twitter", icon: <FaTwitter className="inline mr-2" />, url: "#" },
        { name: "Contact", icon: <FaEnvelope className="inline mr-2" />, url: "#contact" }
      ]
    }
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-white">Stanza</span>
              <span className="text-blue-500">Stack</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building innovative digital experiences with cutting-edge web technologies and AI solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex space-x-4"
            >
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-500 hover:text-blue-500 transition-colors text-xl bg-gray-800 p-3 rounded-full"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {link.icon && link.icon}
                      {link.name}
                      {link.url.startsWith('http') && (
                        <FiExternalLink className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="w-full text-center">
            <p className="text-gray-500 text-sm mx-auto">
              &copy; {currentYear} Stanza Stack. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating glowing elements */}
      <motion.div 
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-blue-500 opacity-20"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </footer>
  );
}