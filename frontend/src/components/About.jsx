'use client';
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-[150px] bg-gradient-to-br from-black via-[#0e1a42] to-black text-white px-6 py-16 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-600 inline-block text-transparent bg-clip-text">
        About Me
      </h2>

      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-lg text-gray-300 mb-6">
            Hi! My name is <span className="font-semibold text-white">Ankita Tiwari</span>.<br />
            I’m a MERN Stack Developer based in India with experience building full-stack
            applications, AI/ML projects, and creative digital experiences.
          </p>
          <p className="text-gray-400 mb-4">
            My objective is to grow through real-world project experiences, improve my technical
            and soft skills, and contribute with passion to every opportunity.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-2 text-sm md:text-base">
            <p>
              <strong>Email:</strong> at030038@gmail.com
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/ankita-tiwari-00693b295/"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                /ankita-tiwari-00693b295
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/ankita8188"
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                /ankita8188
              </a>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-50 h-70 shadow-xl border-4 border-blue-500 bg-white/5 overflow-hidden">
            <img
              src="/ankitatiwari.jpeg"
              alt="Ankita Tiwari"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-6xl mt-20 bg-gradient-to-br from-[#101d36] to-[#15294b] rounded-3xl p-10 text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Education</h3>
            <p>B.Tech – AI & ML</p>
            <p className="text-sm text-gray-300">2021 – Present</p>

            <h3 className="mt-6 text-xl font-semibold mb-4 text-blue-300">Technical Skills</h3>
            <ul className="space-y-1 text-gray-200">
              <li>JavaScript / React / Node.js</li>
              <li>MongoDB / Express</li>
              <li>Python (Basic)</li>
              <li>HTML / CSS / Tailwind</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold mb-4 text-blue-300">Interest</h3>
            <p>AI Projects, UI Design, Technology</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Soft Skills</h3>
            <ul className="space-y-1 text-gray-200">
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold mb-4 text-blue-300">Languages</h3>
            <p>English, Hindi</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Skill Set</h3>
            <ul className="space-y-1 text-gray-200">
              <li>Frontend & Backend Dev</li>
              <li>Web Design</li>
              <li>Responsive UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
