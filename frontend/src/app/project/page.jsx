'use client';
import Footer from '@/components/Footer';
import React from 'react';

const projects = [
 
  {
    title: 'Voice Assistant App',
    description: 'Voice-controlled web assistant using Web Speech API.',
    technologies: ['Tailwind CSS', 'Next.js','MongoDB','Express'],
    image: 'https://irp.cdn-website.com/0930f0fc/dms3rep/multi/Ai+Virtual+Assistants.png',
    demo: 'https://virtual-assistant-kappa-jet.vercel.app/',
    code: 'https://github.com/ankita8188/virtual_assistant',
  },
   {
    title: 'Screen Recording Tool',
    description: 'Responsive website  made with Next.js & Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: 'https://www.videostudiopro.com/static/vsp/images/pages/seo/tips/basics/screen-recorder.jpg', // Add your image path
    demo: 'https://screen-recording-chi.vercel.app/',
    code: 'https://github.com/ankita8188/Screen-Recording-Tool',
  },
   {
    title: 'Text-To-Speech Converter',
    description: 'Created a Text-to-Speech Converter using HTML, CSS, and JavaScript to convert written text into spoken words.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxneCeoe7PrKVY4Yseyok_pmjmcegyApgzpg&s', // Add your image path
    demo: 'https://text-to-voice-eta-one.vercel.app/',
    code: 'https://github.com/ankita8188/Text-To-Voice',
  },
  {
    title: 'QR code generator',
    description: 'A QR Code Generator using HTML, CSS, and JavaScript to dynamically create scannable QR codes from user input',
    technologies: ['HTML', 'CSS', 'Javascript'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMj43ZWG1OGgEwQc1Zh8--gsZFGq0qyczojnlg1RvEISy6cbF_DT3MQ-up4HR3SXODSEw&usqp=CAU',
    demo: 'https://qr-code-generator-topaz-omega.vercel.app/',
    code: 'https://github.com/ankita8188/QR_code_generator',
  },
];

const Project = () => {
  return (
   <div>
     <section
      id="projects"
      className="min-h-screen pt-[150px] bg-gradient-to-r from-black via-[#0e1a42] to-black
 text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-blue-400 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 hover:shadow-blue-400/40 transition duration-300"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-300 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-800/30 border border-blue-500 text-sm text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between text-sm">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
   </div>
  );
};

export default Project;
