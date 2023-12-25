'use client';

import { animate, animateModal } from '@/lib/animate';
import { motion } from 'framer-motion';
import { useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '@/components/pages/projects';
import { ProjectType } from './ProjectCards';

type ProjectCardProps = {
  index: number;
  project: ProjectType;
};

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controlCard = useAnimation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const controlModal = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlCard.start(animate.show(index));
    }
  }, [isInView, controlCard, index]);

  useEffect(() => {
    if (isModalOpen) {
      controlModal.start('show');
    } else {
      controlModal.start('hidden');
    }
  }, [controlModal, isModalOpen]);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <motion.button
        ref={ref}
        variants={animate}
        initial='hidden'
        animate={controlCard}
        exit='hidden'
        onClick={modalHandler}
        className='h-full w-full flex flex-col rounded-lg border border-primary-400 dark:border-primary-300 bg-neutral-100 dark:bg-neutral-500 overflow-hidden group'
      >
        <Image
          src={project.cover_image}
          width={1366}
          height={768}
          alt={`Cover ${project.name}`}
          priority
        />
        <div className='h-full flex flex-col p-4 gap-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-left text-lg md:text-2xl font-semibold tracking-wide text-neutral-500 dark:text-neutral-100 group-hover:text-primary-400 dark:group-hover:text-primary-200 duration-300 transition-all'>
              {project.name}
            </h2>
            <p className='text-left text-neutral-300 dark:text-neutral-200 text-sm md:text-base'>
              {project.description}
            </p>
          </div>
          <div className='mt-auto w-full flex flex-wrap gap-2'>
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
      </motion.button>

      <motion.div
        variants={animateModal}
        initial='hidden'
        animate={controlModal}
        onClick={modalHandler}
        className='fixed flex flex-col items-center p-4 z-50 top-0 bottom-0 right-0 left-0 overflow-scroll no-scrollbar bg-neutral-500/80 gap-8'
      >
        <Modal project={project} modalHandler={modalHandler} />
      </motion.div>
    </>
  );
};

export default ProjectCard;
