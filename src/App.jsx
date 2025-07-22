import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'

export default function App() {
  const [showTopBar, setShowTopBar] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setShowTopBar(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-full'}`}>
          <TopBar />
          <Navbar />
        </div>
        
        {/* Spacer to account for fixed navbar */}
        <div className="h-[calc(56px+40px)]"></div> {/* Adjust based on your navbar height */}
        
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