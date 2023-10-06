'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Close, Figma, Github, Globe, Notion } from './icons';

const WebsiteCard = ({ project }) => {
  return (
    <Link href={project.link_demo} target='_blank' rel='noreferrer'>
      <div className='w-full max-w-[280px] rounded-lg border border-primary-300 bg-neutral-100 dark:bg-neutral-600 hover:shadow-shadow-pink overflow-hidden scale-100 hover:scale-[1.02] duration-300 ease-in-out'>
        <Image
          src={project.cover_image}
          width={1366}
          height={768}
          alt={`Cover ${project.name} project`}
        />
        <div className='flex flex-col p-4 gap-4'>
          <div className='flex flex-col'>
            <span className='lg:text-lg text-base font-bold'>
              {project.name}
            </span>
            <p className='text-sm text-neutral-500 dark:text-neutral-200'>
              {project.description}
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-2'>
            {project.techs.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className='px-2 py-1 text-xs border border-primary-300 rounded-lg'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='w-full flex gap-2'>
            <Link
              href={project.link_notion}
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full bg-primary-300'
            >
              <Notion width={18} height={18} color='#FEFEFE' />
            </Link>
            <Link
              href={project.link_figma}
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full bg-primary-300'
            >
              <Figma width={18} height={18} color='#FEFEFE' />
            </Link>
            <Link
              href={project.link_github}
              target='_blank'
              rel='noreferrer'
              className='p-2 rounded-full bg-primary-300'
            >
              <Github width={18} height={18} color='#FEFEFE' />
            </Link>
            <Link
              href={project.link_demo}
              target='_blank'
              rel='noreferrer'
              className='ml-auto p-2 rounded-full bg-primary-300'
            >
              <Globe width={18} height={18} color='#FEFEFE' />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

const DesignCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(null);
  const modalOpenHandler = (project) => {
    setIsModalOpen(true);
    setProjectOpen(project);
  };

  return (
    <>
      <div
        onClick={() => modalOpenHandler(project)}
        className='w-full max-w-[280px] rounded-lg border border-primary-300 bg-neutral-100 dark:bg-neutral-600 hover:shadow-shadow-pink overflow-hidden scale-100 hover:scale-[1.02] duration-300 ease-in-out'
      >
        <Image
          src={project.cover_image}
          width={1366}
          height={768}
          alt={`Cover ${project.name} project`}
        />
        <div className='flex flex-col p-4 gap-4'>
          <div className='flex flex-col'>
            <span className='lg:text-lg text-base font-bold'>
              {project.name}
            </span>
            <p className='text-sm text-neutral-500 dark:text-neutral-200'>
              {project.description}
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-2'>
            {project.techs.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className='px-2 py-1 text-xs border border-primary-300 rounded-lg'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`${
            isModalOpen ? 'fixed' : 'hidden'
          } flex flex-col items-center p-4 z-50 top-0 left-0 bottom-0 right-0 w-full overflow-scroll bg-neutral-600/80 no-scrollbar`}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className='ml-auto fixed flex justify-center items-center w-10 h-10 right-4 top-4'
          >
            <Close width={40} height={40} color='#FEFEFE' />
          </button>
          <div className='mt-12 w-full max-w-[800px] flex flex-col'>
            {projectOpen.images.map((image, index) => (
              <Image
                key={`image-${index}`}
                src={image}
                width={1366}
                height={768}
                alt={project.name}
                className='w-full max-w-[800px]'
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { WebsiteCard, DesignCard };
