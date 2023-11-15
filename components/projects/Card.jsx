'use client';

import { Close, Figma, Github, Globe, Notion } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Modal } from '..';

const WebsiteCard = ({ project }) => {
  return (
    <div className='w-full rounded-lg border border-primary-400 dark:border-primary-300 bg-neutral-100 dark:bg-neutral-500 overflow-hidden scale-100 hover:scale-105 duration-300 ease-in-out'>
      <Image
        src={project.cover_image}
        width={1366}
        height={768}
        alt={`Cover ${project.name}`}
        priority
      />
      <div className='flex flex-col p-4 gap-4'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg md:text-2xl font-semibold tracking-wide'>{project.name}</h2>
          <p className='text-neutral-300 dark:text-neutral-200 text-sm md:text-base'>{project.description}</p>
        </div>
        <div className='w-full flex flex-wrap gap-2'>
          {project.techs.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className='px-2 py-1 text-xs rounded-lg border border-primary-400 dark:border-primary-300 text-primary-400 dark:text-primary-300'
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='w-full flex gap-2'>
          <Link href={project.link_notion} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Notion className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200' />
            </Button>
          </Link>
          <Link href={project.link_figma} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Figma className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200' />
            </Button>
          </Link>
          <Link href={project.link_github} target='_blank' rel='noreferrer'>
            <Button type='button' intent='secondary' icon='only' radius='full'>
              <Github className='w-5 h-5 fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200' />
            </Button>
          </Link>
          <Link
            href={project.link_demo}
            target='_blank'
            rel='noreferrer'
            className='ml-auto'
          >
            <Button type='button' intent='primary' icon='only' radius='full'>
              <Globe className='w-5 h-5 fill-neutral-100 dark:fill-neutral-500' />
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

  const modalOpenHandler = (images) => {
    setIsModalOpen(true);
    setProjectOpen(images);
  };

  return (
    <>
      <div
        className='w-full rounded-lg border border-primary-400 dark:border-primary-300 bg-neutral-100 dark:bg-neutral-500 overflow-hidden scale-100 hover:scale-105 duration-300 ease-in-out cursor-pointer'
        onClick={() => modalOpenHandler(project.images)}
      >
        <Image
          src={project.cover_image}
          width={1366}
          height={768}
          alt={`Cover ${project.name}`}
          priority
        />
        <div className='flex flex-col p-4 gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-lg md:text-2xl font-semibold tracking-wide'>{project.name}</h2>
            <p className='text-neutral-300 dark:text-neutral-200 text-sm md:text-base'>{project.description}</p>
          </div>
          <div className='w-full flex flex-wrap gap-2'>
            {project.techs.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className='px-2 py-1 text-xs rounded-lg border border-primary-400 dark:border-primary-300 text-primary-400 dark:text-primary-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal projectImages={projectOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export { WebsiteCard, DesignCard };
