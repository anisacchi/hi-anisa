'use client';

import React, { useState } from 'react';
import {
  CertificatesContent,
  ContentInfo,
  EducationContent,
  ExperiencesContent,
  SkillsContent,
  TabInfo,
} from '@/components/pages/about';
import { useLocale } from 'next-intl';

const Informations = () => {
  const [selectedTab, setSelectedTab] = useState<string>('education');
  const locale = useLocale();

  const displayContent = () => {
    switch (selectedTab) {
      case 'education':
        return (
          <ContentInfo
            id={selectedTab}
            title={locale === 'en' ? 'Education' : 'Pendidikan'}
            subtitle={
              locale === 'en'
                ? 'Where I studied and got my degree'
                : 'Tempat saya belajar dan mendapatkan gelar'
            }
            content={<EducationContent locale={locale} />}
          />
        );
      case 'skills':
        return (
          <ContentInfo
            id={selectedTab}
            title={locale === 'en' ? 'Skills' : 'Keahlian'}
            subtitle={
              locale === 'en'
                ? `A few technologies I've been working with recently`
                : 'Beberapa teknologi yang saya gunakan'
            }
            content={<SkillsContent />}
          />
        );
      case 'experiences':
        return (
          <ContentInfo
            id={selectedTab}
            title={locale === 'en' ? 'Experiences' : 'Pengalaman'}
            subtitle={
              locale === 'en'
                ? 'What I have done so far'
                : 'Apa yang telah saya lakukan sejauh ini'
            }
            content={<ExperiencesContent locale={locale} />}
          />
        );
      case 'certificates':
        return (
          <ContentInfo
            id={selectedTab}
            title={locale === 'en' ? 'Certificates' : 'Sertifikasi'}
            subtitle={
              locale === 'en'
                ? 'What I achieved so far'
                : 'Apa yang saya capai sejauh ini'
            }
            content={<CertificatesContent />}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <TabInfo selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {displayContent()}
    </div>
  );
};

export default Informations;
