'use client';
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#0e1a42] to-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name/Logo */}
        <div className="text-xl font-semibold text-blue-400">
          Ankita Tiwari
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="/project" className="hover:text-blue-400 transition duration-300">Projects</a>
          <a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.linkedin.com/in/ankita-tiwari-00693b295/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ankita8188"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/at030038/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Ankita Tiwari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
