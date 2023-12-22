'use server';

import { ContentInfo, EducationContent } from '@/components/pages/about';
import { educations } from '@/constants';
import { useTranslations } from 'next-intl';

export async function GetEducations(selectedTab: string) {
  const t = useTranslations('about.info');
  return educations.map((education) => (
    <ContentInfo
      key={education.id}
      id={selectedTab}
      title={t('title')}
      subtitle={t('subtitle')}
      content={<EducationContent />}
    />
  ));
}
