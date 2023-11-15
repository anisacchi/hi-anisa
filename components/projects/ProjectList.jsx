import React from 'react';
import { OthersCard, WebsiteCard } from '@/components';

const ProjectList = ({ projects }) => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
      {projects.map((project, index) => {
        return project.category === 'Website' ? (
          <WebsiteCard key={`website-${index}`} project={project} />
        ) : (
          <OthersCard key={`design-${index}`} project={project} />
        );
      })}
    </div>
  );
};

export default ProjectList;
