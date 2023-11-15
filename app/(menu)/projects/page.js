'use client';

import React, { useEffect, useState } from 'react';
import { Pagination, ProjectsList, Tabs, Transition } from '@/components';
import { projects } from '@/constants';

const Projects = () => {
  const [tabSelected, setTabSelected] = useState('All');
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(3);

  // display projects per page
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = displayedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // display project by tab category
  useEffect(() => {
    if (tabSelected === 'All') {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(
        projects.filter((project) => project.category.includes(tabSelected))
      );
    }
    setCurrentPage(1);
  }, [tabSelected]);

  return (
    <>
      <Transition />

      <div className='padding'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Projects</h1>

        <div className='padding-y'>
          <Tabs tabSelected={tabSelected} setTabSelected={setTabSelected} />
        </div>

        <ProjectsList projects={currentProjects} />

        <Pagination
          displayedProjectsLength={displayedProjects.length}
          projectPerPage={projectPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Projects;
