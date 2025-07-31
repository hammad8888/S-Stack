import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaMobileAlt, FaServer, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiMongodb, SiGraphql } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const ServiceCard = ({ service }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <div
      className="h-2 w-full"
      style={{ background: `linear-gradient(to right, ${service.colorFrom}, ${service.colorTo})` }}
    ></div>
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div
          className="p-3 rounded-full text-white mr-4"
          style={{ background: `linear-gradient(to bottom right, ${service.colorFrom}, ${service.colorTo})` }}
        >
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <Link
        to="/services"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Learn more <FaArrowRight className="ml-2" />
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      description: "Complete solutions using MongoDB, Express, React, and Node.js. We build scalable, high-performance web applications with modern architecture.",
      icon: <FaReact className="text-xl" />,
      category: "Full Stack",
      colorFrom: "#61DAFB",
      colorTo: "#4DB33D"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Beautiful, responsive interfaces with React, Next.js, and modern CSS. Focused on UX design principles and performance optimization.",
      icon: <FaReact className="text-xl" />,
      category: "Web",
      colorFrom: "#61DAFB",
      colorTo: "#764ABC"
    },
    {
      id: 3,
      title: "Backend Services",
      description: "Robust API development with Node.js, Express, and GraphQL. Secure, well-documented backend systems for your applications.",
      icon: <FaNodeJs className="text-xl" />,
      category: "API",
      colorFrom: "#68A063",
      colorTo: "#3C873A"
    },
    {
      id: 4,
      title: "Database Solutions",
      description: "MongoDB expertise with optimized schemas, indexing, and aggregation pipelines. Ensuring your data layer is performant and scalable.",
      icon: <SiMongodb className="text-xl" />,
      category: "Data",
      colorFrom: "#4DB33D",
      colorTo: "#3FA037"
    },
    {
      id: 5,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native. Single codebase for both iOS and Android with native performance.",
      icon: <FaMobileAlt className="text-xl" />,
      category: "Mobile",
      colorFrom: "#00D1F7",
      colorTo: "#087EA4"
    },
    {
      id: 6,
      title: "API Integration",
      description: "Seamless integration with third-party services and legacy systems. Specializing in GraphQL and REST API development.",
      icon: <SiGraphql className="text-xl" />,
      category: "Integration",
      colorFrom: "#E535AB",
      colorTo: "#C4198E"
    },
    {
      id: 7,
      title: "DevOps & Cloud",
      description: "Cloud deployment and server management solutions. CI/CD pipelines and infrastructure as code for seamless deployments.",
      icon: <FaServer className="text-xl" />,
      category: "DevOps",
      colorFrom: "#F0B90B",
      colorTo: "#D6A309"
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const [autoScroll, setAutoScroll] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Scroll logic
  useEffect(() => {
    const updateScrollInfo = () => {
      if (!containerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);

      const indicator = document.getElementById('scroll-indicator');
      if (indicator) {
        const percent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        indicator.style.width = `${percent}%`;
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', updateScrollInfo);
      updateScrollInfo();
    }

    let interval;
    if (isInView && autoScroll && containerRef.current) {
      interval = setInterval(() => {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          containerRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }, 30);
    }

    return () => {
      containerRef.current?.removeEventListener('scroll', updateScrollInfo);
      clearInterval(interval);
    };
  }, [isInView, autoScroll]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
        >
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Discover What We Offer</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our broad range of services are designed to meet your business's evolving needs. With a focus on precision, agility, and measurable impact.
            </p>
          </div>
          <Link
            to="/services"
            className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center self-end md:self-auto"
          >
            View All Services <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all ${
              showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-700 text-lg" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="relative overflow-x-auto pb-8 scrollbar-hide"
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            <div className="flex space-x-6 px-2">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all ${
              showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-700 text-lg" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-40 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              id="scroll-indicator"
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;











































