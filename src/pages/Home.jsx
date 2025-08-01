import Hero from '../components/Hero';
import Services from '../components/MainServices';
import ProjectsShowcase from '../components/ProjectsShowcase';


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
