import React from 'react';
import { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-16 h-16 bg-gray-300 rounded"></div>
      <div className="flex-1">
        <h3 className="font-bold text-lg">{experience.title}</h3>
        <p className="text-gray-600 mb-2">{experience.company}</p>
        <div className="flex flex-wrap gap-2">
          {['React', 'TypeScript', 'Node.js', 'MongoDB'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700">{experience.description}</p>
    <span className="text-sm text-gray-500 mt-2 inline-block">{experience.year}</span>
  </div>
);

export default ExperienceCard;
