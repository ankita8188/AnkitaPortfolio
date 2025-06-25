'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skill' },
    { name: 'Projects', href: '/project' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-gradient-to-r from-black via-[#0e1a42] to-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-blue-400 text-2xl" />
            ) : (
              <FaBars className="text-blue-400 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-4 pb-4 space-y-3 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-blue-400 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
