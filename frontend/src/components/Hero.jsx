'use client';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-16 bg-gradient-to-r from-black via-[#0e1a42] to-black text-white"
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-blue-400">Ankita Tiwari</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          A passionate MERN Stack Developer | AI-ML Enthusiast <br />
          I build responsive web apps & voice assistants with modern UI.
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white py-2 px-6 rounded-lg font-medium transition duration-300 shadow-md"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-blue-500 hover:bg-blue-600 hover:text-white text-blue-400 py-2 px-6 rounded-lg font-medium transition duration-300 shadow-md"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-54 h-54 md:w-64 md:h-64  rounded-full bg-gradient-to-br from-blue-700 to-blue-400 p-1 hover:scale-105 transition duration-500">
        <div className="rounded-full w-full h-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/ankitatiwari.jpeg"
            alt="Ankita Tiwari"
            className="w-full h-full object-cover rounded-full"
            
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
