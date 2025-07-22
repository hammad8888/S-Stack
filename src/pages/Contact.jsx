import { useEffect } from 'react';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            
          </div>
      


        </div>
            <ContactMap />
      </div>
    </div>
  );
};

export default ContactPage;