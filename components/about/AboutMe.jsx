'use client';

import React, { useState } from 'react';
import { Certificate, Education, Skill, Work } from '@/assets/icons';
import {
  CertificatesContent,
  EducationContent,
  ExperiencesContent,
  SkillsContent,
} from './Card';

const Content = ({ title, subtitle, content }) => {
  return (
    <div className='mt-4'>
      <div className='flex flex-col'>
        <span className='text-xs lg:text-sm text-primary-400 dark:text-primary-200'>
          {subtitle}
        </span>
        <span className='text-xl md:text-2xl font-bold tracking-wide text-primary-500 dark:text-primary-100'>
          {title}
        </span>
      </div>

      <div className='mt-4'>{content}</div>
    </div>
  );
};

const AboutMe = () => {
  const [selectedMenu, setSelectedMenu] = useState('Education');

  const displayContent = () => {
    switch (selectedMenu) {
      case 'Education':
        return (
          <Content
            title='Education'
            subtitle='Where I studied and got my degree'
            content={<EducationContent />}
          />
        );
      case 'Skills':
        return (
          <Content
            title='Skills'
            subtitle={`A few technologies I've been working with recently`}
            content={<SkillsContent />}
          />
        );
      case 'Experiences':
        return (
          <Content
            title='Experiences'
            subtitle='What I have done so far'
            content={<ExperiencesContent />}
          />
        );
      case 'Certificates':
        return (
          <Content
            title='Certificates'
            subtitle='What I achieved so far'
            content={<CertificatesContent />}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Menu Start */}
      <div className='mt-4 w-full border-b border-b-primary-300/20'>
        <div className='flex justify-between'>
          <button
            type='button'
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedMenu === 'Education' ? 'before:w-full' : 'before:w-0'
            } group`}
            onClick={() => setSelectedMenu('Education')}
          >
            <Education
              className={`w-6 h-6 ${
                selectedMenu === 'Education'
                  ? 'fill-primary-400 dark:fill-primary-200'
                  : 'fill-neutral-300 group-hover:fill-primary-300'
              }`}
            />
          </button>
          <button
            type='button'
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedMenu === 'Skills' ? 'before:w-full' : 'before:w-0'
            } group`}
            onClick={() => setSelectedMenu('Skills')}
          >
            <Skill
              className={`w-6 h-6 ${
                selectedMenu === 'Skills'
                  ? 'fill-primary-400 dark:fill-primary-200'
                  : 'fill-neutral-300 group-hover:fill-primary-300'
              }`}
            />
          </button>
          <button
            type='button'
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedMenu === 'Experiences' ? 'before:w-full' : 'before:w-0'
            } group`}
            onClick={() => setSelectedMenu('Experiences')}
          >
            <Work
              className={`w-6 h-6 ${
                selectedMenu === 'Experiences'
                  ? 'fill-primary-400 dark:fill-primary-200'
                  : 'fill-neutral-300 group-hover:fill-primary-300'
              }`}
            />
          </button>
          <button
            type='button'
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedMenu === 'Certificates' ? 'before:w-full' : 'before:w-0'
            } group`}
            onClick={() => setSelectedMenu('Certificates')}
          >
            <Certificate
              className={`w-6 h-6 ${
                selectedMenu === 'Certificates'
                  ? 'fill-primary-400 dark:fill-primary-200'
                  : 'fill-neutral-300 group-hover:fill-primary-300'
              }`}
            />
          </button>
        </div>
      </div>
      {/* Menu End */}

      {/* Content Start */}
      {displayContent()}
      {/* Content End */}
    </>
  );
};

export default AboutMe;
