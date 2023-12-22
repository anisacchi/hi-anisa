import React from 'react';
import dataEn from '@/constants/experiences/en.json';
import dataId from '@/constants/experiences/id.json';
import { ExperienceCard } from '@/components/pages/about';

type ExperiencesContentProps = {
  locale: string;
};

const ExperiencesContent = ({ locale }: ExperiencesContentProps) => {
  const contents = locale === 'en' ? dataEn : dataId;

  return (
    <div className='w-full flex flex-col'>
      {contents.map((content, index) => (
        <ExperienceCard
          index={index}
          key={`job-${index}`}
          title={content.title}
          company={content.company_name}
          date={content.date}
          icon={content.icon}
          desc={content.job_desc}
        />
      ))}
    </div>
  );
};

export default ExperiencesContent;
