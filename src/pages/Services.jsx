// src/pages/Services.jsx
import React from 'react';
import ServiceHero from '../components/ServiceMain';
import ProjectsShowcase from '../components/ProjectsShowcase';
import ServiceProcess from '../components/ServiceProcess';
import ServiceTestimonials from '../components/ServiceTestimonials';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceCTA from '../components/ServiceCTA';

const Services = () => {
  return (
    <div className="services-page bg-slate-950">
      <ServiceHero />
      <ProjectsShowcase />
      <ServiceProcess />
    
      <ServiceTestimonials />
        <ServiceFAQ />
      <ServiceCTA />
    </div>
  );
};

export default Services;