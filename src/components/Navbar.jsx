// Navbar.jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiGraphql } from 'react-icons/si'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      subItems: [
        { name: 'StanzaCore', path: '/services/stanzacore', icon: <FaReact className="text-blue-500" /> },
        { name: 'StanzaAPI', path: '/services/stanzaapi', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'StanzaDB', path: '/services/stanzadb', icon: <SiMongodb className="text-green-700" /> },
        { name: 'StanzaQL', path: '/services/stanzaql', icon: <SiGraphql className="text-pink-500" /> }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-md"
            >
              <span className="text-white font-bold text-lg">SS</span>
            </motion.div>
            <span className="text-2xl font-bold text-gray-800">
              Stanza<span className="text-green-500">Stack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center px-1 py-2 ${
                    location.pathname === link.path 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                >
                  <span>{link.name}</span>
                  {link.subItems && (
                    <FiChevronDown className={`ml-1 transition-transform ${
                      hoveredLink === link.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Animated underline */}
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                  initial={false}
                  animate={{
                    width: location.pathname === link.path ? '100%' : hoveredLink === link.name ? '80%' : '0%',
                    opacity: location.pathname === link.path ? 1 : hoveredLink === link.name ? 0.8 : 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                
                {/* Dropdown menu */}
                {link.subItems && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-1 w-56 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden"
                      >
                        {link.subItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4"
            >
              <div className="space-y-2 px-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-100 last:border-0">
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 ${
                        location.pathname === link.path
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex justify-between items-center">
                        <span>{link.name}</span>
                        {link.subItems && <FiChevronDown />}
                      </div>
                    </Link>
                    
                    {/* Mobile submenu */}
                    {link.subItems && (
                      <div className="pl-6 py-2 space-y-2">
                        {link.subItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center">
                              <span className="mr-3">{item.icon}</span>
                              <span>{item.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}