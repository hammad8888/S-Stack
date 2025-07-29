import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown, FiUser } from 'react-icons/fi'
import { FaReact, FaMobile } from 'react-icons/fa'
import { SiMongodb, SiGraphql, SiFigma } from 'react-icons/si'
import logo from '../assets/logo2.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileSubmenu = (linkName) => {
    setMobileSubmenu(mobileSubmenu === linkName ? null : linkName)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="StanzaStack Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.parentElement.innerHTML = '<span class="text-blue-600 font-bold text-lg">SS</span>'
                }}
              />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold text-gray-800">
              <span className="text-[#001EFF]">Stanza</span>
              <span className="text-[#00F3FF]">Stack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm sm:text-base ${
                    location.pathname === link.path 
                      ? 'text-[#001EFF] font-medium' 
                      : 'text-gray-700 hover:text-[#001EFF]'
                  } transition-colors`}
                >
                  <span>{link.name}</span>
                </Link>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#001EFF]"
                  initial={false}
                  animate={{
                    scaleX: location.pathname === link.path ? 1 : hoveredLink === link.name ? 0.8 : 0,
                    opacity: location.pathname === link.path ? 1 : hoveredLink === link.name ? 1 : 0
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </div>
            ))}
            
            {/* Auth Buttons - Desktop */}
            <div className="flex items-center ml-4 space-x-2">
              <Link 
                to="/login" 
                className="px-3 py-2 text-gray-700 hover:text-[#001EFF] transition-colors text-sm sm:text-base"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="px-4 py-2 bg-gradient-to-r from-[#001EFF] to-[#00F3FF] text-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button and auth */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Auth Buttons - Mobile (icon only on xs, text on sm) */}
            <div className="flex items-center">
              <Link 
                to="/login" 
                className="p-2 text-gray-700 hover:text-[#001EFF] sm:hidden"
                aria-label="Login"
              >
                <FiUser size={18} />
              </Link>
              <Link 
                to="/login" 
                className="hidden sm:block px-3 py-2 text-gray-700 hover:text-[#001EFF] text-sm"
              >
                Login
              </Link>
            </div>
            
            <button
              className="text-gray-700 hover:text-[#001EFF] focus:outline-none p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white w-full shadow-lg mt-2 rounded-lg overflow-hidden"
            >
              <div className="space-y-1 px-4 py-3">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-100 last:border-0">
                    <Link
                      to={link.path}
                      className={`block px-3 py-3 rounded-lg ${
                        location.pathname === link.path
                          ? 'bg-blue-50 text-[#001EFF]'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
                
                {/* Auth Buttons - Mobile (only shown on xs screens) */}
                <div className="pt-2 sm:hidden">
                  <Link 
                    to="/login" 
                    className="block px-4 py-2 text-center text-gray-700 hover:text-[#001EFF]"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block px-4 py-2 mt-2 bg-gradient-to-r from-[#001EFF] to-[#00F3FF] text-white rounded-lg text-center shadow-md hover:shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
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