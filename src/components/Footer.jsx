import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Services",
      links: [
        { name: "UI/UX Design", url: "/Services" },
        { name: "MERN Stack Development", url: "/Services" },
        { name: "Mobile App Development", url: "/Services" },
        { name: "Custom Software Solutions", url: "/services" },
      ]
    },
    {
      title: "Projects",
      links: [
        { name: "Wazir Auto Ltd", url: "https://wazirauto.com" },
        { name: "Sunshine Legal", url: "https://sunshinelegal.com/" },
        { name: "One Green Filter", url: "https://onegreenfilter.com/" },
        { name: "View All Work", url: "/Services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Home", url: "/" },
        { name: "Services", url: "/Services" },
        { name: "About Us", url: "/About" },

        { name: "Contact Us", url: "/Contact" }
      ]
    }
  ];

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content sections using flexbox */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-y-12 mb-12">
          {/* Main branding and social links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-between pr-4 md:pr-8 lg:pr-12" /* Added padding for spacing */
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-[#001EFF]">Stanza</span>
                <span className="text-[#00F3FF]">Stack</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Building innovative digital experiences with cutting-edge web technologies and AI solutions.
              </p>
            </div>
            {/* Social media icons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex space-x-4 mt-6 md:mt-0"
            >
              <motion.a
                href="https://www.linkedin.com/in/yourprofile" // REMINDER 
                whileHover={{ y: -3, scale: 1.1, backgroundColor: "#0A66C2" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-white transition-all duration-300 text-xl bg-gray-800 p-3 rounded-full flex items-center justify-center shadow-lg"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://wa.me/923213018303"
                whileHover={{ y: -3, scale: 1.1, backgroundColor: "#25D366" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-white transition-all duration-300 text-xl bg-gray-800 p-3 rounded-full flex items-center justify-center shadow-lg"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="mailto:stanzastack@gmail.com"
                whileHover={{ y: -3, scale: 1.1, backgroundColor: "#EA4335" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-500 hover:text-white transition-all duration-300 text-xl bg-gray-800 p-3 rounded-full flex items-center justify-center shadow-lg"
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Dynamic sections mapping using flexbox for columns */}
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sections.indexOf(section) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="w-full md:w-1/2 lg:w-1/4 px-4" /* Responsive width for columns */
            >
              <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-3">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <a
                      href={link.url}
                      target={link.url.startsWith('http') || link.url.startsWith('https') || link.url.startsWith('mailto') || link.url.startsWith('tel') ? "_blank" : "_self"}
                      rel={link.url.startsWith('http') || link.url.startsWith('https') ? "noopener noreferrer" : ""}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group text-base"
                    >
                      {link.icon && link.icon}
                      {link.name}
                      {(link.url.startsWith('http') || link.url.startsWith('https')) && (
                        <FiExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Copyright section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="w-full text-center">
            <p className="text-gray-500 text-sm mx-auto max-w-2xl">
              &copy; {currentYear} Stanza Stack. All rights reserved. Built with passion and precision.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating glowing elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-4 h-4 rounded-full bg-blue-500 opacity-20 filter blur-sm z-0"
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
        className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-400 opacity-20 filter blur-sm z-0"
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
