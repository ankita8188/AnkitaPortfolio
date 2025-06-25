'use client';
import Footer from '@/components/Footer';
import React from 'react';

const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'C'],
  },
  {
    title: 'Tools',
    items: ['MS Word', 'Canva', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    items: ['Leadership', 'Time Management'],
  },
];

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="min-h-screen bg-gradient-to-r from-black via-[#0e1a42] to-black text-white px-6 py-16"
      >
        <div className="max-w-6xl pt-[90px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {skills.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 border border-blue-400 rounded-3xl p-6 backdrop-blur-md shadow-md hover:shadow-blue-400/30 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="bg-white/10 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
