import React from 'react';
import { Transition } from '@/components/shared';
import { useLocale, useTranslations } from 'next-intl';
import { Contents } from '@/components/pages/projects';

const Projects = () => {
  const t = useTranslations('projects');
	const locale = useLocale();

  return (
    <>
      <Transition />

      <section className='padding'>
        <div className='flex flex-col'>
          <span className='text-sm lg:text-base text-primary-400 dark:text-primary-200'>
            {t('subtitle')}
          </span>
          <h1 className='text-2xl md:text-4xl font-bold tracking-wide text-primary-500 dark:text-primary-100'>
            {t('title')}
          </h1>
        </div>

				<div className='mt-4'>
					<Contents locale={locale}/>
				</div>
      </section>
    </>
  );
};

export default Projects;
