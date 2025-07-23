import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectsShowcase from '../components/ProjectsShowcase';

import ContactCTA from '../components/ContactCTA';
import CTA from '../components/CTA';
import ServiceTestimonials from '../components/ServiceTestimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProjectsShowcase />
      
      <ServiceTestimonials/>
      <CTA />
      
    </>
  );
}
