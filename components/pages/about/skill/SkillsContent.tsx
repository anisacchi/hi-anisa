import React from 'react';

import contents from '@/constants/skills/skills.json';
import { SkillCard } from '@/components/pages/about';

const SkillsContent = () => {
  return (
    <div className='w-full flex flex-col md:grid md:grid-cols-2'>
      {contents.map((content, index) => (
        <SkillCard
          key={content.name}
          index={index}
          name={content.name}
          category={content.category}
          icon={content.icon}
        />
      ))}
    </div>
  );
};

export default SkillsContent;
