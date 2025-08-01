import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

import UsmanImage from '../assets/us.png';
import HammadImage from '../assets/hm.png';
import ZaraImage from '../assets/us.png';
import BilalImage from '../assets/us.png';

const teamMembers = [
  {
    id: 1,
    name: 'Hammad Mustafa',
    designation: '',

    title: 'Web Developer ',
    image: HammadImage,
    bio: 'A passionate web developer with a focus on creating dynamic and responsive web applications using the latest technologies.',
    social: {
      linkedin: 'https://www.linkedin.com/in/hammad-mustafa-/',
      whatsapp: 'https://wa.me/923213018303',
      github: 'https://github.com/hammadmustafa',
    },
  },
  {
    id: 2,
    name: 'Muhammad Usman',
    title: 'MERN Stack Developer',
    designation: '',

    image: UsmanImage,
    bio: 'Specializing in building robust and scalable web applications with MongoDB, Express, React, and Node.js.',
    social: {
      linkedin: 'https://linkedin.com/in/musmanah',
      whatsapp: 'https://wa.me/923213018303',
    },
  },
  {
    id: 3,
    name: 'Muhammad Bilal',
    title: 'MERN Stack Developer & AI Specialist',
    designation: '',

    image: ZaraImage,
    bio: 'Expert in developing AI-driven applications and enhancing user experiences through innovative solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/muhammad-bilal-509475238 ',
      whatsapp: 'https://wa.me/923030489680',
    },
  },
  {
    id: 4,
    name: 'Muhammad Umar',
    designation: 'Chief Executive Officer',
    title: 'Digital Solutions Architect',
    image: BilalImage,
    bio: 'Dynamic developer with expertise in full stack development and mobile app solutions, committed to delivering high-quality products.',
    social: {
      linkedin: 'https://www.linkedin.com/in/ch-umar-062a41198/',
      whatsapp: 'https://wa.me/923030489680',
    },
  },
];

const Team = () => {
  // Separate CEO from other team members
  const ceo = teamMembers.find(member => member.designation.includes('Chief Executive Officer'));
  const otherMembers = teamMembers.filter(member => !member.designation.includes('Chief Executive Officer'));

  return (
    <section className="bg-light py-16 font-sans text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-5xl font-bold mb-4 animate-fade-in-up">
          Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001EFF] to-[#00F3FF]">Dream Team</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
          A dedicated team of professionals committed to delivering exceptional results.
        </p>

        {/* CEO Card - Centered at the top */}
        {ceo && (
          <div className="flex justify-center mb-12 animate-fade-in-up">
            <div className="group rounded-xl p-6 text-center shadow-lg transition-all duration-700 ease-in-out
              bg-white hover:bg-gradient-to-br hover:from-[#001EFF] hover:to-[#00F3FF]
              hover:text-white hover:shadow-2xl hover:-translate-y-2 w-full max-w-md">
              <div className="mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1 transition-colors duration-300 group-hover:text-white">
                  {ceo.designation}
                </h3>
                 <h3 className="text-2xl font-semibold mb-1 transition-colors duration-300 group-hover:text-white">
                  {ceo.name}
                </h3>
                <p className="text-md text-gray-600 font-medium transition-colors duration-300 group-hover:text-white">
                  {ceo.title}
                </p>
              </div>

              <div className="flex justify-center space-x-4 mt-auto mb-4">
                {ceo.social.linkedin && (
                  <a
                    href={ceo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn of ${ceo.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-xl animate-float" />
                  </a>
                )}
                {ceo.social.github && (
                  <a
                    href={ceo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub of ${ceo.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaGithub className="text-xl animate-float" />
                  </a>
                )}
                {ceo.social.whatsapp && (
                  <a
                    href={ceo.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp of ${ceo.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaWhatsapp className="text-xl animate-float" />
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed mt-2">
                {ceo.bio}
              </p>
            </div>
          </div>
        )}

        {/* Other Team Members in a grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {otherMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group rounded-xl p-6 text-center shadow-lg transition-all duration-700 ease-in-out
                bg-white hover:bg-gradient-to-br hover:from-[#001EFF] hover:to-[#00F3FF]
                hover:text-white hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1 transition-colors duration-300 group-hover:text-white">
                  {member.name}
                </h3>
                <p className="text-md text-gray-600 font-medium transition-colors duration-300 group-hover:text-white">
                  {member.title}
                </p>
              </div>

              <div className="flex justify-center space-x-4 mt-auto mb-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn of ${member.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-xl animate-float" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub of ${member.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaGithub className="text-xl animate-float" />
                  </a>
                )}
                {member.social.whatsapp && (
                  <a
                    href={member.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp of ${member.name}`}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <FaWhatsapp className="text-xl animate-float" />
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed mt-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;