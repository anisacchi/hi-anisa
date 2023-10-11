'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Close, Eye, Figma, Github, Globe, Notion } from './icons';
import { Button } from '.';

const WebsiteCard = ({ project }) => {
  return (
    <div className='w-full sm:max-w-[320px] rounded-lg border border-primary-700 dark:border-primary-400 bg-neutral-100 dark:bg-neutral-800 hover:shadow-shadow-pink overflow-hidden scale-100 hover:scale-[1.02] duration-300 ease-in-out'>
      <Image
        src={project.cover_image}
        width={1366}
        height={768}
        alt={`Cover ${project.name} project`}
				priority
      />
      <div className='flex flex-col p-4 gap-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='lg:text-2xl text-xl font-bold'>{project.name}</h2>
          <p className='text-sm text-neutral-500 dark:text-neutral-200'>
            {project.description}
          </p>
        </div>
        <div className='w-full flex flex-wrap gap-2'>
          {project.techs.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className='px-2 py-1 text-xs border border-primary-700 dark:border-primary-400 rounded-lg text-primary-700 dark:text-primary-400'
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='w-full flex gap-2'>
          <Link href={project.link_notion} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Notion className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
            </Button>
          </Link>
          <Link href={project.link_figma} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Figma className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
            </Button>
          </Link>
          <Link href={project.link_github} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Github className='w-5 h-5 fill-primary-700 dark:fill-primary-400' />
            </Button>
          </Link>
          <Link
            href={project.link_demo}
            target='_blank'
            rel='noreferrer'
            className='ml-auto'
          >
            <Button type='button' intent='primary' icon='only' radius='full'>
              <Globe className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
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
        className='w-full sm:max-w-[320px] rounded-lg border border-primary-700 dark:border-primary-400 bg-neutral-100 dark:bg-neutral-800 hover:shadow-shadow-pink overflow-hidden scale-100 hover:scale-[1.02] duration-300 ease-in-out cursor-pointer'
      >
        <Image
          src={project.cover_image}
          width={1366}
          height={768}
          alt={`Cover ${project.name} project`}
					priority
        />
        <div className='flex flex-col p-4 gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='lg:text-2xl text-xl font-bold'>{project.name}</h2>
            <p className='text-sm text-neutral-500 dark:text-neutral-200'>
              {project.description}
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-2'>
            {project.techs.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className='px-2 py-1 text-xs border border-primary-700 dark:border-primary-400 rounded-lg text-primary-700 dark:text-primary-400'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='w-full flex gap-2 justify-end'>
            <Button
              type='button'
              intent='primary'
              icon='only'
              radius='full'
              onClick={() => modalOpenHandler(project)}
            >
              <Eye className='w-5 h-5 fill-neutral-100 dark:fill-neutral-700' />
            </Button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`${
            isModalOpen ? 'fixed' : 'hidden'
          } flex flex-col items-center p-4 z-50 top-0 left-0 bottom-0 right-0 w-full overflow-scroll bg-neutral-600/80 no-scrollbar`}
        >
          <Button
            type='button'
            intent='primary'
            onClick={() => setIsModalOpen(false)}
            className='ml-auto fixed flex justify-center items-center w-10 h-10 right-4 top-4'
          >
            <div>
              <span
                className={`block h-0.5 lg:w-4 w-5 my-0.5 rounded-full transition-all duration-300 ease-out bg-neutral-100 dark:bg-neutral-800 rotate-45 translate-y-0.5`}
              />
              <span
                className={`block h-0.5 lg:w-4 w-5 my-0.5 rounded-full transition-all duration-300 ease-out bg-neutral-100 dark:bg-neutral-800 -rotate-45 -translate-y-0.5`}
              />
            </div>
          </Button>
          <div className='mt-12 w-full max-w-[800px] flex flex-col'>
            {projectOpen.images.map((image, index) => (
              <Image
                key={`image-${index}`}
                src={image}
                width={1366}
                height={768}
                alt={project.name}
                className='w-full max-w-[800px]'
								priority
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { WebsiteCard, DesignCard };
