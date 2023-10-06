'use client';

import { DesignCard, Transition, WebsiteCard } from '@/components';
import { projects } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Projects() {
  const filter = ['All', 'Website', 'Design'];
  const [categorySelected, setCategorySelected] = useState('All');
  const [displayedProject, setDisplayedProject] = useState(projects);

  // pagination
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectPerPage] = useState(3);

  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects = displayedProject.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  useEffect(() => {
    setTotalPage(Math.ceil(displayedProject.length / projectPerPage));
  }, [displayedProject, projectPerPage]);

  const categorySelectHandler = (category) => {
    if (category == 'All') {
      setDisplayedProject(projects);
    } else {
      setDisplayedProject(
        projects.filter((project) => project.category.includes(category))
      );
      setCurrentPage(1);
    }
    setCategorySelected(category);
  };

  return (
    <>
      <Transition />
      <section className='w-full flex flex-col justify-center items-center'>
        <h3 className='text-primary-300 lg:text-2xl text-xl font-bold tracking-wide'>Projects</h3>
        <div className='flex gap-4'>
          {filter.map((category, index) => (
            <button
              key={`category-${index}`}
              onClick={() => categorySelectHandler(category)}
              className={`relative hover:text-primary-300 ${
                categorySelected === category
                  ? 'font-semibold text-primary-400 hover:text-primary-400 dark:text-primary-200 hover:dark:text-primary-200 after:scale-100'
                  : 'text-neutral-500 dark:text-neutral-200 after:scale-0'
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-lg after:bg-primary-400 after:dark:bg-primary-200 after:duration-300 after:ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='w-full mt-4 flex flex-wrap gap-4'>
          {currentProjects.map((project) => {
            return project.category === 'Website' ? (
              <WebsiteCard project={project} />
            ) : (
              <DesignCard project={project} />
            );
          })}
        </div>
      </section>
    </>
  );
}
