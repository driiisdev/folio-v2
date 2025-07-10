import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mb-8 pb-8 border-b border-gray-300 last:border-b-0">
    <span className="text-sm text-gray-500">{project.year}</span>
    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
    <p className="text-gray-700">{project.description}</p>
  </div>
);

export default ProjectCard;
