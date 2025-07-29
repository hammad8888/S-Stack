import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import WhyChooseUs from '../components/WhyChooseUs';
import TeamSection from '../components/TeamSection';
import StatsSection from '../components/StatsSection';
import CoreValues from '../components/CoreValues';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <TeamSection />
      <MissionVision />
      <WhyChooseUs />
      <CoreValues />
      
      <StatsSection />
      <CTA />
    </div>
  );
};

export default AboutPage;