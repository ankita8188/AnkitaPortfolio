import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl, demoLink, githubLink }) => {
  return (
    <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl shadow-xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition duration-300 hover:scale-105"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 flex items-center gap-1 hover:text-blue-300 transition"
          >
            Live <FaExternalLinkAlt size={14} />
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 flex items-center gap-1 hover:text-white transition"
          >
            GitHub <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
