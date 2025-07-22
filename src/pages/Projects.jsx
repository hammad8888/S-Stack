import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our recent work and see how we've helped clients achieve their digital goals.
          </p>
        </div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;