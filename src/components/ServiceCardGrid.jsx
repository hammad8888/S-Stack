import React from 'react';
import ServiceCard from './ServiceCard';
import { FaCode, FaMobile, FaChartLine, FaServer, FaPalette, FaShieldAlt } from 'react-icons/fa';

const ServiceCardGrid = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies.",
      features: [
        "React/Next.js development",
        "Performance optimization",
        "SEO-friendly structure",
        "CMS integration"
      ]
    },
    {
      icon: <FaMobile size={40} />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native development",
        "Native iOS/Android apps",
        "Push notifications",
        "Offline functionality"
      ]
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your business.",
      features: [
        "SEO optimization",
        "Social media marketing",
        "PPC campaign management",
        "Analytics & reporting"
      ]
    },
    {
      icon: <FaServer size={40} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for your applications.",
      features: [
        "AWS/Azure/GCP solutions",
        "Serverless architecture",
        "Database management",
        "DevOps services"
      ]
    },
    {
      icon: <FaPalette size={40} />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Interaction design",
        "Design systems"
      ]
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Cyber Security",
      description: "Protect your digital assets with robust security measures.",
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits",
        "Compliance consulting"
      ]
    }
  ];

  return (
    <section className="service-card-grid">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive solutions tailored to your business needs</p>
        
        <div className="grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardGrid;