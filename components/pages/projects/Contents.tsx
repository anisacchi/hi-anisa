'use client';

import React, { useEffect, useState } from 'react';
import {
  Categories,
  Pagination,
  ProjectCards,
} from '@/components/pages/projects';
import enData from '@/constants/projects/en.json';
import idData from '@/constants/projects/id.json';
import { ProjectType } from './ProjectCards';

type ContentsProps = {
  locale: string;
};

const Contents = ({ locale }: ContentsProps) => {
  const projects = locale === 'en' ? enData : idData;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayedProjects, setDisplayedProjects] =
    useState<ProjectType[]>(projects);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectPerPage = 3;

  // display projects per page
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = displayedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // display projects by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(
        projects.filter((project) =>
          project.category.includes(selectedCategory)
        )
      );
    }
    setCurrentPage(1);
  }, [selectedCategory, projects]);

  return (
    <div className='flex flex-col'>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className='mt-4'>
        <ProjectCards projects={currentProjects} />
        <Pagination
          displayedProjectsLength={displayedProjects.length}
          projectPerPage={projectPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Contents;
