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
    title: 'CEO & Full Stack Developer',
    image: HammadImage,
    bio: 'Visionary leader and technical expert driving innovation and strategic growth for the company.',
    social: {
      linkedin: 'https://www.linkedin.com/in/hammad-mustafa-/',
      whatsapp: 'https://wa.me/923213018303',
      github: 'https://github.com/hammadmustafa',
    },
  },
  {
    id: 2,
    name: 'M. Usman AH',
    title: 'MERN Stack Developer',
    image: UsmanImage,
    bio: 'Specializing in building robust and scalable web applications with MongoDB, Express, React, and Node.js.',
    social: {
      linkedin: 'https://linkedin.com/in/musmanah',
      whatsapp: 'https://wa.me/923213018303',
    },
  },
  {
    id: 3,
    name: 'Zara Malik',
    title: 'Social Media Manager',
    image: ZaraImage,
    bio: 'Creating engaging content and managing digital presence to connect with our audience effectively.',
    social: {
      linkedin: 'https://linkedin.com/in/zaramalik',
      whatsapp: 'https://wa.me/923213018303',
    },
  },
  {
    id: 4,
    name: 'Bilal AH',
    title: 'Mobile App Developer',
    image: BilalImage,
    bio: 'Building cross-platform mobile applications with React Native and Flutter for seamless user experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/bilalah',
      whatsapp: 'https://wa.me/923213018303',
      github: 'https://github.com/bilalah',
    },
  },
];

const Team = () => {
  return (
    <section className="bg-light py-16 font-sans text-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-5xl font-bold mb-4 animate-fade-in-up">
          Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001EFF] to-[#00F3FF]">Dream Team</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100">
          A dedicated team of professionals committed to delivering exceptional results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          {teamMembers.map((member, index) => (
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
