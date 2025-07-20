import React from "react";
import { Project } from "../types";
import GithubIcon from "../assets/svg/github.svg?react";
import WWWIcon from "../assets/svg/www.svg?react";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="pt-6 pb-4 border-b border-gray-300 last:border-b-0">
    <div className="flex flex-row items-start gap-x-5">
      <div className="border border-gray-300 rounded p-0.5">
        <img
          src={project?.img}
          alt={project?.title}
          className="w-24 h-auto rounded"
        />
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <div className="flex flex-row items-center gap-x-2">
          <h5 className="font-medium">{project?.title}</h5>&nbsp;-&nbsp;
          {project?.liveUrl && (
            <a href={project.liveUrl}>
              <WWWIcon className="h-4 w-4 hover:text-gray-100 hover:bg-black border rounded-full" />
            </a>
          )}
          {project?.githubUrl && (
            <a href={project.githubUrl}>
              <GithubIcon className="h-4 w-4 hover:text-gray-100 hover:bg-black border rounded-full" />
            </a>
          )}
        </div>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {project?.tools?.map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 rounded-full text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
