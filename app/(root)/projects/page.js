'use client';

import { Button, DesignCard, Transition, WebsiteCard } from '@/components';
import { CaretLeft, CaretRight } from '@/components/icons';
import { projects } from '@/constants';
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
      <section className='w-full h-full flex flex-col justify-center items-center gap-4'>
        <h1 className='lg:text-4xl text-2xl font-bold tracking-wide text-primary-700 dark:text-primary-400'>
          Projects
        </h1>
        <div className='flex gap-4'>
          {filter.map((category, index) => (
            <button
              key={`category-${index}`}
              onClick={() => categorySelectHandler(category)}
              className={`relative hover:text-primary-600 hover:dark:text-primary-200 ${
                categorySelected === category
                  ? 'font-semibold text-primary-600 dark:text-primary-200 hover:text-primary-600 hover:dark:text-primary-200 after:scale-100'
                  : 'text-neutral-800 dark:text-neutral-100 after:scale-0'
              } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:rounded-lg after:bg-primary-600 after:dark:bg-primary-200 after:duration-300 after:ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='w-full h-full flex flex-wrap gap-4 justify-center '>
          {currentProjects.map((project, index) => {
            return project.category === 'Website' ? (
              <WebsiteCard project={project} key={`website-${index}`} />
            ) : (
              <DesignCard project={project} key={`design-${index}`} />
            );
          })}
        </div>

        {/* Pagination */}
        <div className='mt-2 flex gap-2 justify-center items-center'>
          <Button
            type='button'
            intent={currentPage === 1 ? 'disabled' : 'secondary'}
            icon='only'
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <CaretLeft
              className={
                currentPage === 1
                  ? 'fill-neutral-300 dark:fill-neutral-400'
                  : 'fill-primary-700 dark:fill-primary-400'
              }
            />
          </Button>
          {[...Array(totalPage).keys()].map((page) => (
            <Button
              key={page}
              type='button'
							intent={page + 1 === currentPage ? 'primary' : 'secondary'}
              icon='only'
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </Button>
          ))}
          <Button
            type='button'
						intent={currentPage === totalPage ? 'disabled' : 'secondary'}
            icon='only'
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <CaretRight
              className={
                currentPage === totalPage
                  ? 'fill-neutral-300 dark:fill-neutral-400'
                  : 'fill-primary-700 dark:fill-primary-400'
              }
            />
          </Button>
        </div>
      </section>
    </>
  );
}
