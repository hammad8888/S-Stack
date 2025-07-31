import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

// ScrollToTop component - now only scrolls to top for all pages
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top for all route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <ScrollToTop />
        <div className="fixed top-0 w-full z-50">
          <Navbar />
        </div>

        <div className="h-16"></div> {/* Spacer for fixed navbar */}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}