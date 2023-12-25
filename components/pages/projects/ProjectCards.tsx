import React from 'react';
import { ProjectCard } from '@/components/pages/projects';

export type ProjectType = {
  name: string;
  description: string;
  category: string;
  techs: string[];
  cover_image: string;
  images: string[];
  link_demo: string;
  link_notion: string;
  link_figma: string;
  link_github: string;
};

type ProjectCardsProps = {
  projects: ProjectType[];
};

const ProjectCards = ({ projects }: ProjectCardsProps) => {
  return (
    <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
