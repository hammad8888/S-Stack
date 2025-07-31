import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Aisha Khan',
    title: 'CEO & Founder',
    image: 'https://via.placeholder.com/150/F8F9FA/495057?text=Aisha',
    bio: 'Visionary leader driving innovation and strategic growth for the company.',
    social: {
      linkedin: 'https://linkedin.com/in/aishakhan',
      twitter: 'https://twitter.com/aishakhan',
    },
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    title: 'Lead Software Engineer',
    image: 'https://via.placeholder.com/150/F8F9FA/495057?text=Bilal',
    bio: 'Crafting robust and scalable software solutions with passion.',
    social: {
      linkedin: 'https://linkedin.com/in/bilalahmed',
      github: 'https://github.com/bilalahmed',
    },
  },
  {
    id: 3,
    name: 'Zara Malik',
    title: 'Product Designer',
    image: 'https://via.placeholder.com/150/F8F9FA/495057?text=Zara',
    bio: 'Designing intuitive and delightful user experiences.',
    social: {
      linkedin: 'https://linkedin.com/in/zaramalik',
      dribbble: 'https://dribbble.com/zaramalik',
    },
  },
  {
    id: 4,
    name: 'Usman Ali',
    title: 'Marketing Specialist',
    image: 'https://via.placeholder.com/150/F8F9FA/495057?text=Usman',
    bio: 'Connecting our products with the right audience.',
    social: {
      linkedin: 'https://linkedin.com/in/usmanali',
      twitter: 'https://twitter.com/usmanali',
    },
  },
];

const Team = () => {
  return (
    <section className="bg-light py-16 font-sans text-gray-800"> {/* Section background as light */}
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold mb-4 text-gray-900 animate-fade-in-up"> {/* Added fade-in-up */}
          Meet Our Amazing Team
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-100"> {/* Added fade-in-up with delay */}
          Passionate individuals dedicated to our mission and vision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-white rounded-xl p-6 text-center shadow-lg transition-all duration-300 ease-in-out
                         hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between
                         animate-fade-in-up`} // Apply fade-in-up to each card
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
            >
              <div className="mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary shadow-md flex items-center justify-center animate-pulse-slow"> {/* Using primary color, added pulse-slow */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-md text-gray-600 font-medium">{member.title}</p>
              </div>

              <div className="flex justify-center space-x-4 mt-auto mb-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn of ${member.name}`}
                    className="text-gray-500 hover:text-primary transition-colors duration-200" // Using primary color for hover
                  >
                    <FaLinkedin className="text-xl animate-float" /> {/* Added float animation */}
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Twitter of ${member.name}`}
                    className="text-gray-500 hover:text-accent transition-colors duration-200" // Using accent color for hover
                  >
                    <FaTwitter className="text-xl animate-float" /> {/* Added float animation */}
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub of ${member.name}`}
                    className="text-gray-500 hover:text-dark transition-colors duration-200" // Using dark color for hover
                  >
                    <FaGithub className="text-xl animate-float" /> {/* Added float animation */}
                  </a>
                )}
                {member.social.dribbble && (
                  <a
                    href={member.social.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Dribbble of ${member.name}`}
                    className="text-gray-500 hover:text-accent transition-colors duration-200" // Using accent color for hover
                  >
                    <FaDribbble className="text-xl animate-float" /> {/* Added float animation */}
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;